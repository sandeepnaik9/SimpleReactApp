const authReducer = (state={authData:null},action)=>{
    switch(action.type){
        case 'AUTH':
            localStorage.setItem('profile',JSON.stringify({...action && action.data}));
            return {...state,authData: action&&action.data};
        case 'LOGOUT':
            localStorage.clear();

            return {...state,suthData:null};
        default:
            return state
    }
};

export default authReducer