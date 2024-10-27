import { LOGIN_SUCCESS, LOGIN_FAIL, LOAD_USER_SUCCESS, LOAD_USER_FAIL, Authenticated_SUCCESS, Authenticated_FAIL, LOGOUT, PASSWORD_RESET_FAIL, PASSWORD_RESET_SUCCESS, PASSWORD_RESET_CONFIRM_FAIL, PASSWORD_RESET_CONFIRM_SUCCESS, SIGNUP_SUCCESS, SIGNUP_FAIL, ACTIVATION_SUCCESS, ACTIVATION_FAIL } from "../actions/types";

const initialState = {
    accessToken: localStorage.getItem("accessToken"),
    isAuthenticated: null,
    user: null
}

export default function(state = initialState, actions){
    const { type, payload } = actions;
    switch(type){
        case Authenticated_SUCCESS:
            return{
                ...state,
                isAuthenticated: true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem("accessToken", payload.accessToken)
            return{
                ...state,
                isAuthenticated: true,
                accessToken: payload.accessToken,
            }
        case SIGNUP_SUCCESS:
            return{
                ...state,
                isAuthenticated: false
            }
        case LOAD_USER_SUCCESS:
            return{
                ...state,
                user: payload
            }
        case Authenticated_FAIL:
            return{
                ...state,
                isAuthenticated: false
            }
        case LOAD_USER_FAIL:
            return{
                ...state,
                user: null
            }
        case LOGIN_FAIL:
        case SIGNUP_FAIL:
        case LOGOUT:
            localStorage.removeItem("accessToken")
            return{
                ...state,
                accessToken: null,
                isAuthenticated: false,
                user: null
            }
        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_FAIL:
        case PASSWORD_RESET_CONFIRM_SUCCESS:
        case PASSWORD_RESET_CONFIRM_FAIL:
        case ACTIVATION_SUCCESS:
        case ACTIVATION_FAIL:
            return{
                ...state
            }
        default:
            return state
    }
}