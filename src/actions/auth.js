import { firebase, googleAuthProvider } from '../firebase/firebase'
import database from '../firebase/firebase'

export const login = ({ uid, name, email, pic }) => {
  return {
    type: 'LOGIN',
    uid,
    name,
    email,
    pic,
  }
}

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT',
  }
}

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut()
  }
}

export const editName = (name, type) => {
  return (dispatch, getState) => {
    const user = getState().auth
    database
      .ref(`users/${user.uid}`)
      .update({ name })
      .then(() => {
        dispatch({ type, name })
      })
  }
}
