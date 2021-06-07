import { login } from "../AuthAPI";

const auth_domain = "http://206.189.89.204/app/"

const loggedReducer = (state = false, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return login(auth_domain).then(data => {
                return (data.token);
            });
        case 'SIGN_OUT':
            return false;
        default:
            return state;
    }
}

export default loggedReducer;