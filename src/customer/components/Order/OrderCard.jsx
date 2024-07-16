import { Grid } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useDispatch } from "react-redux";
import { getUserOrders } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";




export default function OrderCard({item}){
   const navigate = useNavigate()
   
   const handleNavigation = (item) =>{
        if(item.orderStatus=="PENDING"){
        toast.error("Order is cancelled !");
        }else{
            navigate(`/account/order/${item._id}`)
        }
   }
   

    return(

        <div className="border  mt-6 rounded-lg"  onClick={()=>handleNavigation(item)}>
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
             <div className="p-5 shadow-md hover:shadow-lg rounded-lg ">

<Grid container spacing={2} sx={{ justifyContent:'space-between'}}>
{item?.orderItems?.map((orderItem)=>
    <>
    <Grid item xs={8}>

        <div className="flex cursor-pointer  ">
            <img src={orderItem.product.imageUrl}   className="w-[5rem] h-[5rem] object-cover object-top"/>
            <div className="ml-5 space-y-2">
                <p>{orderItem.product.title}</p>
                <p className=" text-gray-500">₹ {orderItem.product.price}</p>
             

            </div>
        </div>

    </Grid>

    
    </>
    )}
    

    <Grid item xs={12} md={4}className="border border-2 rounded-xl" sx={{marginTop:"10px",paddingBottom:"15px"}}>
       {item.orderStatus=="DELIVERED"?
       <div >
      
       <p>
       <AdjustIcon sx={{height:'20px',width:'20px'}} className="text-green-400 mr-2" />
            <span className=" text-md">
                Delivered on  March 03
            </span>
        </p>
        <p className="text-md">
            Your Item Has Been Delivered
        </p>
  
        </div>:item.orderStatus=="PENDING" ?
         <div>
         <p>
                <AdjustIcon sx={{height:'15px',width:'15px'}} className="text-red-400 mr-2 text-md" />
                <span>
                   Order Cancelled - Payment Unsuccessful
                </span>
            </p>
            </div>:
        <div>
     <p>
            <AdjustIcon sx={{height:'15px',width:'15px'}} className="text-green-400 mr-2 text-md" />
            <span>
               Expected Delivery on March 03
            </span>
        </p>
        </div>
        }
    </Grid>


</Grid>
</div>

        </div>

     
       

    )

}