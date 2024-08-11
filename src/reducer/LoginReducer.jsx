const inistialData = {
isLoggedIn:false,
};

const LoginReducer=(state = inistialData, action)=>{
    switch(action.type){
        case "LOGOUT":
            state = {
                isLoggedIn: action.payload,
            };
            break;

            case "LOGIN":
                state = {
                    isLoggedIn: action.payload,
                };
                break;
    }
    return state;
};

export default LoginReducer;