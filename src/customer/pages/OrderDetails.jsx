import { Grid, Box} from "@mui/material"
import OrderTracker from "../components/Order/OrderTracker"
import AddressCard from "../components/checkout/AddressCard"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../State/Order/Action";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function OrderDetails(){
    const dispatch = useDispatch()

    const {order} = useSelector(store=>store)

  const params = useParams()

  const navigate = useNavigate()


    useEffect(() => {
        
    dispatch(getOrderById(params.orderId))
    
    }, []);

    console.log("status check",order?.order?.orderStatus)

    let stepValue = 0
    
    if(order?.order?.orderStatus == "DELIVERED"){
        stepValue = 4
    }
    else if(order?.order?.orderStatus == "CONFIRMED"){
        stepValue = 1
    }
    else if(order?.order?.orderStatus == "SHIPPED"){
        stepValue = 2
    }

    console.log(stepValue)

   


    return(
        <div className="p-5 lg:p-20">
          

            <div className="">
                <h1 className="font-semibold py-7 text-xl">Delivery Address</h1>
                <AddressCard address={order?.order?.shippingAddress}/>
            </div>

            <div className="py-20">
                <OrderTracker activeStep={stepValue} />
            </div>


            {order.order?.orderItems?.map((orderItem)=>
               
                <Grid className="space-y-5 mb-4" container >

                <Grid item container className="shadow-md rounded-md p-5 border" sx={{alignItems:'center',justifyContent:'space-between'}}>

                    <Grid item xs={12} md={6}>

                        <div className="flex items-center space-x-2">
                            <img className="w-[4.5rem] h-[5rem] object-fit object-top border rounded-md mr-4" src={orderItem.product.imageUrl} alt="" />
                            <div className="space-y-2 ml-10">
                                <p className="font-semibold">{orderItem.product.title}</p>
                                <p className="space-x-2 text-xs opacity-50 font-medium"><span>Size : M</span><span>Color : {orderItem.product.color}</span></p>
                                <p>₹ {orderItem.product.price}</p>
                            </div>
                        </div>

                    </Grid>

                    <Grid item>
                        <Box sx={{color:'green'}}>
                            <StarBorderIcon sx={{fontSize:'2rem'}} className="px-2 "/>
                            <span onClick={()=>navigate(`/account/${orderItem.product._id}/review`)} className="cursor-pointer">Rate & Review product</span>
                        </Box>
                    </Grid>
                </Grid>

            </Grid>
            )}

        </div>
    )
}