import { Grid,Button, Box, TextField } from "@mui/material";
import AddressCard from "./AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../../State/Order/Action";


export default function AddressForm(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {auth} = useSelector(store=>store)

    console.log(auth?.user_data?.address)

    const handleSubmit=(e)=>{
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        const formData = {
            firstName:data.get('firstName'),
            lastName:data.get('lastName'),
            streetAddress:data.get('address'),
            city:data.get('city'),
            state:data.get('state'),
            zipCode:data.get('zip'),
            mobile:data.get('phoneNumber'),


        }

      

        let orderData = {formData,navigate}
        dispatch((createOrder(orderData)))
    }


    const deliverHere = (item)=>{
        const formData = {
            firstName:item.firstName,
            lastName:item.lastName,
            streetAddress:item.streetAddress,
            city:item.city,
            state:item.state,
            zipCode:item.zipCode,
            mobile:item.mobile,
        }
        console.log("calling create order ")
        let orderData = {formData,navigate}
        dispatch((createOrder(orderData)))
    }
    return(
<div>
    <Grid container spacing={4}>
        <Grid xs={12} lg={5} className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll mt-8">


        {auth.user_data?.address.map((item)=><div className="p-5 py-7 border-b cursor-pointer">

    
                        <AddressCard address={item} />
  <  Button sx={{mt:2,bgcolor:'black',}} size='large' variant='contained' onClick={() => deliverHere(item)}>Deliver Here</Button>

                </div>)}
            

      


        </Grid>

        <Grid item xs={12} lg={7}>

           <Box className="border rounded-sm shadow-md p-5">

            <form onSubmit={handleSubmit}>

                <Grid container spacing={3}>

                    <Grid item xs={12} sm={6}>

                        <TextField required id="firstName" name="firstName" label='First Name' fullWidth autoComplete="given-name"/>

                    </Grid>

                    <Grid item xs={12} sm={6}>

                        <TextField required id="lastName" name="lastName" label='Last Name' fullWidth autoComplete="given-name"/>

                    </Grid>

                     <Grid item xs={12}>

                        <TextField required id="address" name="address" label='Address' fullWidth multiline rows={6}/>

                    </Grid>

                     <Grid item xs={12} sm={6}>

                        <TextField required id="city" name="city" label='City' fullWidth multiline />

                    </Grid>

                     <Grid item xs={12} sm={6}>

                        <TextField required id="state" name="state" label='State/Region/Province' fullWidth multiline />

                    </Grid>

                     <Grid item xs={12} sm={6}>

                        <TextField required id="zip" name="zip" label='Zip / Postal code' fullWidth multiline />

                    </Grid>

                     <Grid item xs={12} sm={6}>

                        <TextField required id="phoneNumber" name="phoneNumber" label='Phone Number' fullWidth multiline />

                    </Grid>
                    
                      <Grid item xs={12} >

                      <Button sx={{mt:2,bgcolor:'black',}} size='large' variant='contained' fullWidth type="submit">Deliver Here</Button>

                    </Grid>
                </Grid>
            </form>
           </Box>

        </Grid>
    </Grid>
</div>
    )
}