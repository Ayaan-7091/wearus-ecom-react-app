import { type } from "@testing-library/user-event/dist/type"
import { api } from "../../config/apiConfig"
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "./ActionType"
import { Fragment } from "react"
import { Typography } from "@mui/material"

export const findProducts = (reqData) =>async(dispatch)=>{
    dispatch({type:FIND_PRODUCTS_REQUEST})

    const {category,color,size,minPrice,maxPrice,sort,stock,pageNumber,pageSize} = reqData
    try {
     
        const {data} =await api.get(`/products?color=${color}&size=${size}&minPrice=${minPrice}&maxPrice=${maxPrice}&category=${category}&sort=${sort}&stock=${stock}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
        console.log("product-data",data)
        
        dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})
        
    }
}

export const findProductsById = (reqData) =>async(dispatch)=>{
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})

    const id = reqData
    try {
        console.log("check man",id)

        const {data} =await api.get(`/products/id/${id}`)
        console.log("product-data",data)
        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
        
    }
}

export const createProduct = (productData) => async(dispatch)=>{
    dispatch({type:CREATE_PRODUCT_REQUEST})
    try {
        console.log("check api",productData)
        const {data} = api.post("/admin/products/",productData)
        dispatch({type:CREATE_PRODUCT_SUCCESS,payload:data})
        console.log("Created Product",data)

    } catch (error) {
        dispatch({type:CREATE_PRODUCT_FAILURE,payload:error.message})
    }
}

export const deleteProduct = (productId) => async(dispatch)=>{
    dispatch({type:DELETE_PRODUCT_REQUEST})
    try {
        
        const {data} = api.delete(`/admin/products/${productId}`)
        dispatch({type:DELETE_PRODUCT_SUCCESS,payload:productId})
        console.log("PRODUCT DELETED",data)

    } catch (error) {   
        dispatch({type:DELETE_PRODUCT_FAILURE,payload:error.message})
    }

   
}

export const updateProduct = (productId,productData)=> async(dispatch)=>{

    dispatch({type:UPDATE_PRODUCT_REQUEST})

    try {
        const {data} = api.put(`/admin/products/${productId}`,productData)
        dispatch({type:UPDATE_PRODUCT_SUCCESS,payload:productId})

    } catch (error) {
        dispatch({type:UPDATE_PRODUCT_FAILURE,payload:error.message})
        
    }
}