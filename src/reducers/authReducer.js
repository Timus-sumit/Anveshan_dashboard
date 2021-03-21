const authReducer = (state={},action)=>{
    switch (action.type){
        case 'LOGIN':
            return {uid : action.uid, name: action.name, email:action.email, pic:action.pic };
        case 'LOGOUT':
            return {};
        default :
            return state;
    }
}

export default authReducer;