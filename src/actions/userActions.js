import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL} from "../constants/userConstants";
import axios from "axios";

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