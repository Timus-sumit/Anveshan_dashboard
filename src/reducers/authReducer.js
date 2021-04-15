const authReducer = (state={},action)=>{
    switch (action.type){
        case 'LOGIN':
            return {uid : action.uid, name: action.name, email:action.email, pic:action.pic };
        case 'LOGOUT':
            return {};
        case 'USER_NAME':
            return{
                ...state,
                name:action.name
            }
        default :
            return state;
    }
}

export default authReducer;