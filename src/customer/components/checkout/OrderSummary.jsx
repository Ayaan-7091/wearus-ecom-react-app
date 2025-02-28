import AddressCard from "./AddressCard";
import tshirtsData from "../../../Data/Tshirts/tshirtsData";
import CartItemCard from "../../components/Cart/CartItemCard";
import { Button } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOrderById, initiatePayment } from "../../../State/Order/Action";
import { useEffect } from "react";
import { load } from "@cashfreepayments/cashfree-js";
import OrderSummaryItemCard from "./OrderSummaryItemCard";


export default function OrderSummary(){

    const dispatch = useDispatch()
    const location = useLocation()
    const {order} = useSelector(store=>store)
   

    const searchparams = new URLSearchParams(location.search)
    const orderId = searchparams.get("order_id")

    useEffect(() => {
        dispatch(initiatePayment(orderId))    
    }, [orderId]);

    console.log(order)
    console.log(order.order?.paymentData?.payment_session_id)



    //redirecting user to the payment page via session id obtained from initiate payment method
    let cashfree;
    var initializeSDK = async function () {          
        cashfree = await load({
            mode: "sandbox"
        });
    }
    initializeSDK();

    const handlePayment = async () => {
        let checkoutOptions = {
            paymentSessionId: order.order?.paymentData?.payment_session_id,
            redirectTarget: "_self",
        };
        cashfree.checkout(checkoutOptions);
    };


    //<------Ends HERE
   
    

    return(

        <div>
            <div className="p-5 shadow-md rounded-md border">
                <AddressCard address={order.order?.order?.shippingAddress}/>
            </div>
            <div >

<div className="lg:grid grid-cols-3  relative">

    <div className=" col-span-2">

{order.order?.order?.orderItems.map((item)=><OrderSummaryItemCard item={item}/>)}
    </div>

    <div className="lg:p-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
        <div className="border p-2 rounded-md shadow-md ">
        <p className="font-bold opacity-60 pb-4 pt-2">BILLING DETAILS</p>
        <hr />

        <div className="space-y-3 font-semibold">
        <div className="flex justify-between pt-3">
            <span>Price </span>
            <span> ₹ {order.order?.order?.totalPrice}</span>
        </div>

        <div className="flex justify-between pt-3">
            <span>Discount </span>
            <span className="text-green-500">- ₹ {order.order?.order?.discount}</span>
        </div>

        <div className="flex justify-between pt-3">
            <span>Delivery </span>
            <span className="text-green-500"> ₹ 60</span>
        </div>

        <div className="flex justify-between pt-3">
            <span>Total Amount </span>
            <span className="text-green-500"> ₹ {order.order?.order?.totalDiscountedPrice}</span>
        </div>
        </div>
        <Button className="w-full mt-5 text-bold text-white hover:bg-green-500 hover:text-white  p-1 rounded-md bg-black  py-2 transition-all" onClick={handlePayment}>Checkout</Button>
    </div>

</div>
</div>
</div>
        </div>
    )
}