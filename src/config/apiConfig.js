import axios from "axios"
const jwt = localStorage.getItem('jwt')

export const API_BASE_URL = "https://mern-ecommerce-api-production.up.railway.app"

export const api = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization":`Bearer ${jwt}`,
        "Content-Type":"application/json"
    }
})