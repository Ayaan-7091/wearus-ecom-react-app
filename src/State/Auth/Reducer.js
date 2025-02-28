import { GET_ALL_USERS_FAILURE, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"

const initialState = {
  
    isLoading:false,
    error:null,
    jwt:null,
    user_data:null,
    users:[]
}

export const authReducer = (state=initialState,action)=>{

    switch(action.type){
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case GET_ALL_USERS_REQUEST:
            return {...state,isLoading:true,error:null}

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {...state,isLoading:false,error:null,jwt:action.payload}
        
        case GET_USER_SUCCESS:
            const userData = action.payload
            return {...state,isLoading:false,error:null,user_data:userData}

        case GET_ALL_USERS_SUCCESS:
            return{...state,isLoading:false,error:null,users:action.payload}

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
        case GET_ALL_USERS_FAILURE:
            return {...state,isLoading:false,error:action.payload}
        
        case LOGOUT:
            return {...initialState}
        default:
            return state
    }
}