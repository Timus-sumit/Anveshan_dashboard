import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import AppRoute,{history}from './router/AppRoute';
import configureStore from './store/store';
import {firebase} from './firebase/firebase';
import{login,logout} from './actions/auth';


const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRoute/>
  </Provider>
)

let hasRendered = false;
const renderApp = ()=>{
  if(!hasRendered){
    ReactDOM.render(jsx,document.getElementById('root'));
    hasRendered = true;
  }
}

ReactDOM.render(<p>Loading...</p>,document.getElementById('root'));


firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    store.dispatch(login({uid:user.uid, name:user.displayName, email:user.email}))
    renderApp();
    if(history.location.pathname==='/'){
      history.push('/dashboard')
    }
  }else{
    store.dispatch(logout());
    renderApp();
    history.push('/')
  }
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
