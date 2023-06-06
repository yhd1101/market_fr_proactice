import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS
} from "../constants/userConstants";
import axios from "axios";
import {type} from "@testing-library/user-event/dist/type";

//로그인함수

export const login = (email, password) => async (dispatch) => {
    try{
        dispatch({
            type:USER_LOGIN_REQUEST
        })
        const {data, status} = await axios.post("http://localhost:9000/user/login", {email, password})
        if(status === 200){
            dispatch({
                type:USER_LOGIN_SUCCESS,
                payload:data.user
            })
            localStorage.setItem("userInfo", JSON.stringify(data.user))
            localStorage.setItem("token", JSON.stringify(data.token))
        }

    } catch (err){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message
        })
    }
}

export const logout = () => (dispath) => {
    localStorage.removeItem("userInfo")
    localStorage.removeItem("token")
    dispath({type: USER_LOGOUT})

    document.location.href="/login"
}

export const signup = (name, email, password) => async (dispatch) => {
    try{
        dispatch({
            type : USER_SIGNUP_REQUEST
        })
        const { status} = await axios.post("http://localhost:9000/user/signup",{name, email, password})
        if(status === 200){
            dispatch({
                type : USER_SIGNUP_SUCCESS,
                payload : true
            })
        }

    } catch (err){
        dispatch({
            type:USER_SIGNUP_FAIL,
            payload:
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message
        })

    }
}