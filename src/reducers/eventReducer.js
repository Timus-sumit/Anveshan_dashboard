const initialState = {
    Literatium:false,
    CodeMet:false,
    Initio:false,
    Internado:false,
    Microskopia:false,
    Quarks:false,
    Quitation:false,
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
        case 'Microskopia':
            return {
                ...state,
                Microskopia:true
            }
        case 'Quarks':
            return {
                ...state,
                Quarks:true
            }
        case 'Quitation':
            return {
                ...state,
                Quitation:true
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