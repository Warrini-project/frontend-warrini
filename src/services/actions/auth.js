import { LOGIN_SUCCESS, LOGIN_FAIL, LOAD_USER_SUCCESS, LOAD_USER_FAIL, Authenticated_SUCCESS, Authenticated_FAIL, LOGOUT, PASSWORD_RESET_FAIL, PASSWORD_RESET_SUCCESS, PASSWORD_RESET_CONFIRM_FAIL, PASSWORD_RESET_CONFIRM_SUCCESS, SIGNUP_SUCCESS, SIGNUP_FAIL, ACTIVATION_SUCCESS, ACTIVATION_FAIL, REFRESH_FAIL, REFRESH_SUCCESS } from "./types";
import axios from "axios";
import { EDUCATION, MODIFY_COUNT, MODIFY_PROJECTS_COUNT, MODIFY_SKILLS_COUNT, MODIFY_SOCIAL_COUNT, PROFILE, PROJECTS, SKILLS, SOCIALS } from "./types";
import toast from 'react-hot-toast';

export const checkAuthenticated = () => async dispatch => {
    const accessToken = localStorage.getItem("access");
    const refreshToken = localStorage.getItem("refresh");

    if (accessToken) {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        };
        const body = { token: accessToken };

        try {
            const res = await axios.post('http://localhost:8000/auths/tokens/verify/', body, config);

            if (res.data.code !== "token_not_valid") {
                dispatch({
                    type: Authenticated_SUCCESS,
                });
            } else if (refreshToken) {
                // If the access token is not valid, try refreshing the token
                await dispatch(refreshToken());
            } else {
                dispatch({
                    type: Authenticated_FAIL,
                });
            }
        } catch (err) {
            console.error('Check Authentication error:', err.response ? err.response.data : err.message);
            dispatch({
                type: Authenticated_FAIL,
            });
        }
    } else {
        dispatch({
            type: Authenticated_FAIL,
        });
    }
};

///TO CHECK!!!!!!
/*export const load_user = () => async dispatch =>{
    if(localStorage.getItem("access")){
        const config = {
            headers:{
                "Content-Type": "application/json",
                "Authorization": `JWT ${localStorage.getItem("access")}`,
                "Accept": "application/json"
            }
        };
        try{
            const res = await axios.get(`http://localhost:8000/auths/tokens/verify/`, config);
            dispatch({
                type: LOAD_USER_SUCCESS,
                payload: res.data
            })
        }catch (error){
            dispatch({
                type: LOAD_USER_FAIL,
            })
        }
    }
    else{
        dispatch({
            type: LOAD_USER_FAIL,
        })
    }
}*/

export const refreshToken = () => async dispatch => {
    const refreshToken = localStorage.getItem("refresh");

    if (refreshToken) {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        try {
            const res = await axios.post('http://localhost:8000/auths/tokens/refresh/', { refresh: refreshToken }, config);
            localStorage.setItem("access", res.data.access); // Store new access token
            dispatch({
                type: REFRESH_SUCCESS,
                payload: res.data
            });
        } catch (error) {
            console.error('Refresh Token error:', error.response ? error.response.data : error.message);
            dispatch({
                type: REFRESH_FAIL
            });
        }
    } else {
        dispatch({
            type: REFRESH_FAIL
        });
    }
};

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    const body = JSON.stringify({ email, password });
    try {
        const res = await axios.post(`http://localhost:8000/auths/login/`, body, config);
        if(res.data.message === "User is not found!"){
            toast.error(res.data.message);
            dispatch({
                type: LOGIN_FAIL,
            });
        }
        else{
            localStorage.setItem('access', res.data.access); // Store access token
            localStorage.setItem('refresh', res.data.refresh); // Store refresh token
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }
        // Remove or replace this line if necessary
        // dispatch(load_user())
    } catch (error) {
        toast.error(`User is not found! Please verify your email and password!`);
        dispatch({
            type: LOGIN_FAIL,
        });
    }
}

export const signup =  (email, name, password) => async dispatch => {
    const config = {
        headers:{
            "Content-Type": "application/json"
        }
    };
    const body = JSON.stringify({ email, name, password });
    try{
        const res = await axios.post(`http://localhost:8000/auths/register/`, body, config)
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });
    }catch (error) {
        console.error('Signup error:', error.response ? error.response.data : error.message);
        dispatch({
            type: SIGNUP_FAIL,
        });
    }    
}

export const verify = (uid, token) =>  async dispatch => {
    const config = {
        headers:{
            "Content-Type": "application/json"
        }
    };
    const body = JSON.stringify({ uid, token });
    console.log(body);
    try{
        await axios.post(`http://localhost:8000/auths/activate/`, body, config)
        dispatch({
            type: ACTIVATION_SUCCESS,
        });
    }catch (error){
        console.error('Activation error:', error.response ? error.response.data : error.message);
        dispatch({
            type: ACTIVATION_FAIL,
        })
    }
}

export const reset_password = (email) => async dispatch => {
    const config = {
        headers:{
            "Content-Type": "application/json"
        }
    };

    const body = JSON.stringify({ email });
    try{
        await axios.post("http://localhost:8000/auths/reset_password/", body, config);
        dispatch({
            type: PASSWORD_RESET_SUCCESS
        })
    }
    catch(err){
        dispatch({
            type: PASSWORD_RESET_FAIL
        })
    }
}

export const reset_password_confirm = (uid, token, new_password) => async dispatch => {
    const config = {
        headers:{
            "Content-Type": "application/json"
        }
    };
    const body = JSON.stringify({ uid, token, new_password });
    try{
        await axios.post("http://localhost:8000/auths/reset_password_confirm/", body, config);
        dispatch({
            type: PASSWORD_RESET_CONFIRM_SUCCESS
        })
    }
    catch(err){
        dispatch({
            type: PASSWORD_RESET_CONFIRM_FAIL
        })
    }
}

export const logout = () => dispatch => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    dispatch({
        type: LOGOUT
    })
    window.location.href = '/login';
}
export const SaveEducationData = (data) => dispatch =>{

    dispatch({
     type: EDUCATION,
     payload : data
    })
}

export const ModifyEducationCount = (count) => dispatch =>{
    dispatch({
     type: MODIFY_COUNT,
     payload: count
    })
   }

   export const ModifySkillsCount = (count) => dispatch =>{
    dispatch({
     type: MODIFY_SKILLS_COUNT,
     payload: count
    })
   }
   export const ModifySocialsCount = (count) => dispatch =>{
    dispatch({
     type: MODIFY_SOCIAL_COUNT,
     payload: count
    })
   }
   export const ModifyProjectsCount = (count) => dispatch =>{
    dispatch({
     type: MODIFY_PROJECTS_COUNT,
     payload: count
    })
   }
   export const SaveProfileData = (data) => dispatch =>{

    dispatch({
     type: PROFILE,
     payload : data
    })
}

export const SaveSocialData = (data) => dispatch =>{

    dispatch({
     type: SOCIALS,
     payload : data
    })
}

export const SaveSkillsData = (data) => dispatch =>{
    dispatch({
     type: SKILLS,
     payload : data
    })
}

export const SaveProjectData = (data) => dispatch =>{
    dispatch({
     type: PROJECTS,
     payload : data
    })
}