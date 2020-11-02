const initialState = {
    loggedin: false
}

const LoginReducer = (state=initialState, action : any) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                loggedin: true
            }
        
        case 'LOGIN_FAILED':
            return {
                loggedin: false
            }
        default:
            return state;
    }
}

export default LoginReducer