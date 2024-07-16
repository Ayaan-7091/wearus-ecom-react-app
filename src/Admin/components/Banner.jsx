import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { deleteBannerImage, getBannerImages } from "../../State/Banner/Action"
import { Button, Grid } from "@mui/material"
import AddBannerImage from "./AddBannerImage"
import { toast, ToastContainer } from "react-toastify"

export default function Banner(){

    const {banner} = useSelector(store=>store)
    const dispatch = useDispatch()
    console.log(banner)

    useEffect(()=>{

        dispatch(getBannerImages())

    },[banner.deletedImage])

    const handleDelete = (imageId) =>{
        dispatch(deleteBannerImage(imageId))
        toast.error("Banner Deleted")
    }

    // console.log(banner)

    return(
        <div className="p-10">
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
        theme="colored"
       />
           <Grid container spacing={2}>
           {Array.isArray(banner?.images) && banner.images.map((item)=>
            
            <Grid item xs={12} md={6}>
            <div className="border border-2 rounded-xl overflow-hidden  flex flex-col items-center">
                <img src={item.image}  />
                <Button color="error" variant="outlined" onClick={()=>handleDelete(item._id)}   sx={{
                                        margin: "10px",
                                        
                                        fontSize: {
                                            xs: '0.50rem', // small screens
                                            sm: '0.875rem', // medium screens
                                            md: '1rem', // large screens
                                            lg: '1rem' // extra large screens
                                        }
                                    }}>Delete</Button>
            </div>
        </Grid>
            )}

            <Grid item xs={12}>
            
            </Grid>

           
           </Grid>
        </div>
    )
}