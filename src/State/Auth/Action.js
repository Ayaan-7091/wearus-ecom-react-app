

import { api, API_BASE_URL } from "../../config/apiConfig";
import { GET_ALL_USERS_FAILURE, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";
import axios from "axios";

const token = localStorage.getItem('jwt')


const registerRequest = () =>({type:REGISTER_REQUEST})
const registerSuccess = (user) =>({type:REGISTER_SUCCESS,payload:user})
const registerFailure = (error) =>({type:REGISTER_FAILURE,payload:error})

export const register = (userData) => async (dispatch)=>{

    dispatch(registerRequest())

    try {
        
        const response = await axios.post(`${API_BASE_URL}/auth/signup`,userData)
        const user = response.data
        if(user.jwt){
            console.log(user.jwt)
            localStorage.setItem("jwt",user.jwt)
        }
        console.log("user",user)

        dispatch(registerSuccess(user.jwt))

      

    } catch (error) {
        dispatch(registerFailure(error.message))
    }
}

const loginRequest = () =>({type:LOGIN_REQUEST})
const loginSuccess = (user) =>({type:LOGIN_SUCCESS,payload:user})
const loginFailure = (error) =>({type:LOGIN_FAILURE,payload:error})

export const login = (userData) => async (dispatch)=>{

    dispatch(loginRequest())

    try {
        
        const response = await axios.post(`${API_BASE_URL}/auth/login`,userData)
        const user = response.data
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        

        dispatch(loginSuccess(user.jwt))

    } catch (error) {
        dispatch(loginFailure(error.message))
    }
}

const getUserRequest = () =>({type:GET_USER_REQUEST})
const getUserSuccess = (user) =>({type:GET_USER_SUCCESS,payload:user})
const getUserFailure = (error) =>({type:GET_USER_FAILURE,payload:error})


export const getUser = (jwt) => async (dispatch)=>{

    dispatch(getUserRequest())

    try {
       
        const response = await axios.get(`${API_BASE_URL}/users/profile`,{
            headers:{
                "Authorization":`Bearer ${jwt}`
            }

        })
        const user = response.data
    //     console.log("GETuser",user)
    //    const firstName = user.firstName
    //    console.log({firstName})
       dispatch(getUserSuccess(user))
        

    } catch (error) {
        dispatch(getUserFailure(error.message))
    }
    return;
}

export const logout = () => (dispatch)=>{
    dispatch({type:LOGOUT,payload:null})
    localStorage.clear()

}


export const getAllUsers=()=>async(dispatch)=>{
    dispatch({type:GET_ALL_USERS_REQUEST})

    try {
        const {data} = await api.get("/users/")
        console.log("all users data",data)
        dispatch({type:GET_ALL_USERS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_ALL_USERS_FAILURE,payload:error.message})
    }
}