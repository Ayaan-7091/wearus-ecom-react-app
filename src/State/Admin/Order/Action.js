import { api } from "../../../config/apiConfig"
import { CANCELED_ORDER_FAILURE, CANCELED_ORDER_REQUEST, CANCELED_ORDER_SUCCESS, CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType"

export const getOrders = (reqData) =>{

    return async (dispatch)=>{
        dispatch({type:GET_ORDERS_REQUEST})

        try {
            const {data} =await api.get("/admin/orders/")
            console.log("orders fetched",data)
            dispatch({type:GET_ORDERS_SUCCESS,payload:data})
        } catch (error) {
            dispatch({type:GET_ORDERS_FAILURE,payload:error.message})
        }
    }
} 

export const confirmOrder = (orderId) => async(dispatch)=>{

    dispatch({type:CONFIRMED_ORDER_REQUEST})

    try {
        const {data} = await api.put(`/admin/orders/${orderId}/confirmed`)
        console.log("order confirmed",data)

        dispatch({type:CONFIRMED_ORDER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:CONFIRMED_ORDER_FAILURE,payload:error.message})
    }
}

export const shippedOrder = (orderId) => async(dispatch)=>{

    dispatch({type:SHIP_ORDER_REQUEST})

    try {
        const {data} = await api.put(`/admin/orders/${orderId}/shipped`)
        console.log("order shipped",data)

        dispatch({type:SHIP_ORDER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:SHIP_ORDER_FAILURE,payload:error.message})
    }
}

export const deliveredOrder = (orderId) => async(dispatch)=>{

    dispatch({type:DELIVERED_ORDER_REQUEST})

    try {
        const {data} = await api.put(`/admin/orders/${orderId}/delivered`)
        console.log("order delivered",data)

        dispatch({type:DELIVERED_ORDER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:DELIVERED_ORDER_FAILURE,payload:error.message})
    }
}


// export const cancelOrder = (orderId) => async(dispatch)=>{

//     dispatch({type:CANCELED_ORDER_REQUEST})

//     try {
//         const {data} = await api.put(`/admin/orders/${orderId}/cancel`)
//         console.log("order cancelled",data)

//         dispatch({type:CANCELED_ORDER_SUCCESS,payload:data})
//     } catch (error) {
//         dispatch({type:CANCELED_ORDER_FAILURE,payload:error.message})
//     }
// }

export const deleteOrder = (orderId) => async(dispatch)=>{

    dispatch({type:DELETE_ORDER_REQUEST})

    try {
        console.log(orderId)
        const {data} = await api.put(`/admin/orders/${orderId}/delete`)
        console.log("order deleted",data)

        dispatch({type:DELETE_ORDER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:DELETE_ORDER_FAILURE,payload:error.message})
    }
}