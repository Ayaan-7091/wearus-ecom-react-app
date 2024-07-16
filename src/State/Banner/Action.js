import { api } from "../../config/apiConfig"
import { ADD_BANNER_IMAGE_FAILURE, ADD_BANNER_IMAGE_REQUEST, ADD_BANNER_IMAGE_SUCCESS, DELETE_BANNER_IMAGE_FAILURE, DELETE_BANNER_IMAGE_REQUEST, DELETE_BANNER_IMAGE_SUCCESS, GET_BANNER_IMAGE_FAILURE, GET_BANNER_IMAGE_REQUEST, GET_BANNER_IMAGE_SUCCESS, GET_BANNER_IMAGES_REQUEST } from "./ActionType"

export const  getBannerImages = () => async(dispatch) =>{

    dispatch({type:GET_BANNER_IMAGE_REQUEST})
   

    try {
      
        const {data} =await api.get('/banner/image')
       
        dispatch({type:GET_BANNER_IMAGE_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_BANNER_IMAGE_FAILURE,payload:error.message})
    }
}

export const addBannerImage = (image) =>async(dispatch)=>{

    dispatch({type:ADD_BANNER_IMAGE_REQUEST})

    try {
        console.log("working")

        const {data} =await api.post('/banner/addImage',image)
        dispatch({type:ADD_BANNER_IMAGE_SUCCESS,payload:data})
        
    } catch (error) {
        dispatch({type:ADD_BANNER_IMAGE_FAILURE,payload:error.message})
    }
}

export const deleteBannerImage = (imageId)=>async(dispatch)=>{
    dispatch({type:DELETE_BANNER_IMAGE_REQUEST})

    try {

        const {data} =await api.put(`/banner/${imageId}/delete`)
        console.log(data)
        dispatch({type:DELETE_BANNER_IMAGE_SUCCESS,payload:data})
        
    } catch (error) {
        dispatch({type:DELETE_BANNER_IMAGE_FAILURE,payload:error.message})
    }
}