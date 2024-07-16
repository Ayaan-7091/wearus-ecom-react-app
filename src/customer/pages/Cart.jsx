import { useNavigate } from "react-router-dom";
import tshirtsData from "../../Data/Tshirts/tshirtsData";
import CartItemCard from "../components/Cart/CartItemCard";
import { Button } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../State/Cart/Action";
import { useEffect } from "react";


export default function Cart(){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {cart} = useSelector(store=>store)

    const handleCheckout = () =>{
        navigate('/checkout?step=2')
    }
 

    useEffect(() => {
        
        dispatch(getCart())
       
    }, [cart.updateCartItem,cart.deleteCartItem]);


    return(
        <div className="p-5">

        <div className="lg:grid grid-cols-3 lg:px-16 relative">

            <div className=" col-span-2">
        {/* <CartItemCard /> */}
        {cart.cart?.cartItems.map((item)=><CartItemCard item={item}/>)}
            </div>

            <div className="lg:p-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                <div className="border p-2 rounded-md shadow-md ">
                <p className="font-bold opacity-60 pb-4 pt-2">BILLING DETAILS</p>
                <hr />

                <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3">
                    <span>Price </span>
                    <span> ₹ {cart.cart?.totalPrice}</span>
                </div>

                <div className="flex justify-between pt-3">
                    <span>Discount </span>
                    <span className="text-green-500">- ₹ {cart.cart?.discount}</span>
                </div>

                <div className="flex justify-between pt-3">
                    <span>Delivery </span>
                    <span className="text-green-500"> ₹ 60</span>
                </div>

                <div className="flex justify-between pt-3">
                    <span>Total Amount </span>
                    <span className="text-green-500"> ₹ {cart.cart?.totalDiscountedPrice}</span>
                </div>
                </div>
                <Button onClick={handleCheckout} className="w-full mt-5 text-bold text-white hover:bg-green-500 hover:text-white  p-1 rounded-md bg-black  py-2 transition-all" >Checkout</Button>
            </div>

        </div>
        </div>
        </div>
    )
}