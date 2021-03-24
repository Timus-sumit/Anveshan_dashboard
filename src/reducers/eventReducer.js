const initialState = {
    Literatium:false,
    CodeMet:false,
    Initio:false,
    Internado:false,
    Metcon:false,
    Quarks:false,
    Snapshot:false,
    Rivista:false,
}

const eventReducer = (state=initialState,action)=>{
    switch (action.type){
        case 'SET':
            return{
                ...action.event
            }
        case 'Literatium':
            return {
                ...state,
                Literatium:true
            }
        case 'CodeMet':
            return {
                ...state,
                CodeMet:true
            }
        case 'Initio':
            return {
                ...state,
                Initio:true
            }
        case 'Internado':
            return {
                ...state,
                Internado:true
            }
        case 'Metcon':
            return {
                ...state,
                Metcon:true
            }
        case 'Quarks':
            return {
                ...state,
                Quarks:true
            }
        case 'Snapshot':
            return {
                ...state,
                Snapshot:true
            }
        case 'Rivista':
            return {
                ...state,
                Rivista:true
            }
        default :
            return state;
            
    }
}

export default eventReducer;