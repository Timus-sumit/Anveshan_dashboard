import database from '../firebase/firebase';

export const createEvents=()=>{
    return (dispatch,getState)=>{
        const user = getState().auth;
        const events = { Literatium:false,
            CodeMet:false,
            Initio:false,
            Internado:false,
            Metcon:false,
            Quarks:false,
            Snapshot:false,
            Rivista:false,};
        database.ref(`users/${user.uid}`).set({name:user.name,email:user.email,...events}).then((ref)=>{
            dispatch({
                type:'CREATE'
            })
        })

    }
}

export const editEvents=(updates,type)=>{
    return (dispatch,getState)=>{
        const user = getState().auth;
        database.ref(`users/${user.uid}`).update({...updates}).then(()=>{
            dispatch({type})
        })
    }
}

export const setEvents=()=>{
    return (dispatch,getState)=>{
        const user = getState().auth;
        return database.ref(`users/${user.uid}`).once('value').then((snapshot)=>{
            const events = snapshot.val();

            const event = {
                Literatium:events.Literatium,
                CodeMet:events.CodeMet,
                Initio:events.Initio,
                Internado:events.Internado,
                Metcon:events.Metcon,
                Quarks:events.Quarks,
                Snapshot:events.Snapshot,
                Rivista:events.Rivista,
            }

            dispatch({
                type:'SET',
                event
            })
        })
    }
}