import { api } from "../../config/apiConfig"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, GET_USER_ORDERS_FAILURE, GET_USER_ORDERS_REQUEST, GET_USER_ORDERS_SUCCESS, INITIATE_PAYMENT_FAILURE, INITIATE_PAYMENT_REQUEST, INITIATE_PAYMENT_SUCCESS } from "./ActionType"

export const createOrder = (reqData) =>async(dispatch)=>{
    
    dispatch({type:CREATE_ORDER_REQUEST})

    try {
        console.log(reqData)
        const {data} =await api.post(`/orders`,reqData.formData)
        //to navigate the user to the next page
        console.log(data._id)
       
        if(data._id){
            reqData.navigate({search:`step=3&order_id=${data._id}`})
        }
        console.log("created oder - ",data)

        dispatch({type:CREATE_ORDER_SUCCESS,payload:data})

    } catch (error) {
        dispatch({type:CREATE_ORDER_FAILURE,payload:error.message})
    }
}

export const getOrderById = (orderId) =>async(dispatch)=>{
    
    dispatch({type:GET_ORDER_BY_ID_REQUEST})

    try {
        console.log("requesting for order")
        const {data} =await api.get(`/orders/${orderId}`)
        console.log("from backend",data)

        dispatch({type:GET_ORDER_BY_ID_SUCCESS,payload:data})

    } catch (error) {
        dispatch({type:GET_ORDER_BY_ID_FAILURE,payload:error.message})
    }
}


export const initiatePayment = (orderId) =>async(dispatch)=>{
    
    dispatch({type:INITIATE_PAYMENT_REQUEST})

    try {
       
        const {data} = await api.get(`/payment/${orderId}`)
      
        console.log(data)
        


        dispatch({type:INITIATE_PAYMENT_SUCCESS,payload:data})

    } catch (error) {
        dispatch({type:INITIATE_PAYMENT_FAILURE,payload:error.message})
    }
}

export const getUserOrders = ()=>async(dispatch)=>{
    dispatch({type:GET_USER_ORDERS_REQUEST})

    try {
        const {data} = await api.get('/orders/user')
        
        dispatch({type:GET_USER_ORDERS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_USER_ORDERS_FAILURE,payload:error.message})
    }
}

