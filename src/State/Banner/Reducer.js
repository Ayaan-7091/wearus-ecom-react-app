import { GET_BANNER_IMAGE_SUCCESS, GET_BANNER_IMAGE_FAILURE, GET_BANNER_IMAGE_REQUEST, ADD_BANNER_IMAGE_REQUEST, ADD_BANNER_IMAGE_FAILURE, ADD_BANNER_IMAGE_SUCCESS, DELETE_BANNER_IMAGE_REQUEST, DELETE_BANNER_IMAGE_SUCCESS, DELETE_BANNER_IMAGE_FAILURE } from "./ActionType";

const initialState = {
    images: [],
    loading: false,
    error: null
};

export const bannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BANNER_IMAGE_REQUEST:
        case ADD_BANNER_IMAGE_REQUEST:
        case DELETE_BANNER_IMAGE_REQUEST:
            return { ...state, loading: true, error: null };
        
        case GET_BANNER_IMAGE_SUCCESS:
        case ADD_BANNER_IMAGE_SUCCESS:
            return { ...state, loading: false, images: action.payload, error: null };

        case DELETE_BANNER_IMAGE_SUCCESS:
            return{...state,loading:false,deletedImage:action.payload}
        
        case GET_BANNER_IMAGE_FAILURE:
        case ADD_BANNER_IMAGE_FAILURE:
        case DELETE_BANNER_IMAGE_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};
