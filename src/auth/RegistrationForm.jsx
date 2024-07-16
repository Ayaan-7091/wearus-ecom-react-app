
import { Button, Grid, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getUser, register } from "../State/Auth/Action";
import { useEffect } from "react";
import { store } from "../State/store";
import { toast, ToastContainer } from "react-toastify";

export default function RegistrationForm(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const jwt = localStorage.getItem('jwt')
    const {auth} = useSelector(store=>store)


    useEffect(()=>{
        if(jwt){

     dispatch(getUser(jwt))
    console.log("reg",auth.user_data)

    toast.error("Registered Successfully!");
        }
    },[jwt,auth.jwt])

        const handleSubmit = (event) =>{
            event.preventDefault()

            const data = new FormData(event.currentTarget)

            const userData = {
                firstName:data.get('firstName'),
                lastName:data.get('lastName'),
                password:data.get('password'),
                email:data.get('email'),

            }
            dispatch(register(userData))
            
            console.log(userData)
        }

    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
            <ToastContainer
                         position="top-right"
                         autoClose={5000}
                           hideProgressBar={false}
                           newestOnTop={false}
                          closeOnClick
                           rtl={false}
                         pauseOnFocusLoss
                         draggable
                           pauseOnHover
                         theme="dark"
                        />
                <Grid container spacing={3}>
                    
                   <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                    />
                   </Grid>
                   <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                    />
                   </Grid>
                   <Grid item xs={12} >
                    <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    autoComplete="email"
                    />
                   </Grid>
                   <Grid item xs={12} >
                    <TextField
                    required
                    id="password"
                    name="password"
                    label="Password"
                    fullWidth
                    
                    />
                   </Grid>
                   <Grid item xs={12} >
                    <Button
                    className="w-full bg-black text-white"
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{padding:".8rem 0",bgcolor:"black"
                        ,}}
                    >
                        Register
                    </Button>
                   </Grid>

                    </Grid> 
            </form>
            <div className="flex justify-center flex-col items-center">
                <div className="py-3 flex items-center">
                    <p>Already have an account</p>
                    <Button onClick={()=>navigate("/login")} className="ml-5" size="small">Login</Button>
                </div>
            </div>
        </div>
    )
}