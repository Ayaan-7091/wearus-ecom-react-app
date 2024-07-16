
import { Button, Grid, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../State/Auth/Action";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";

export default function LoginForm(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {auth} = useSelector(state=>state)
    

        const handleSubmit = (event) =>{
            event.preventDefault()

            const data = new FormData(event.currentTarget)

            const userData = {
                password:data.get('password'),
                email:data.get('email'),
            }

            dispatch(login(userData))
            
            if(auth?.error === null){
                toast.error("Invalid Credentials!");
            }
           
            console.log("check auth",auth)
      

    

        }

    


  useEffect(() => {
   
  }, [auth]);


    return(
        <div>
         
            <form  onSubmit={handleSubmit}>
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
                        Login
                    </Button>
                   </Grid>

                    </Grid> 
            </form>
            <div className="flex justify-center flex-col items-center">
                <div className="mt-2 flex items-center">
                    <p>Don't an account</p>
                    <Button onClick={()=>navigate("/register")} className="ml-5" size="small">Signup</Button>
                </div>
            </div>
          
        </div>
    )
}