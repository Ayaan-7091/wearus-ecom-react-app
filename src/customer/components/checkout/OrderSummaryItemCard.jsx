import { IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";

export default function OrderSummaryCard({ item }) {
    const dispatch = useDispatch();

    const handleUpdateCartItem = (num) => {
        const data = {
            data: { quantity: item.quantity + num },
            cartItemId: item?._id
        };
        dispatch(updateCartItem(data));
    };

    const handleRemoveCartItem = () => {
        dispatch(removeCartItem(item._id));
    };

    return (
        <div className="p-5 shadow-md rounded-md border mt-4">
            <div className="flex flex-col sm:flex-row gap-4 overflow-hidden">
                {/* Product Image */}
                <div className="w-full sm:w-[20rem] h-[20rem] md:w-[9rem] md:h-[9rem]">
                    <img src={item.product.imageUrl} className="object-cover object-top w-full h-full" />
                </div>

                {/* Product Details and Controls */}
                <div className="flex flex-col justify-between sm:flex-grow">
                    {/* Product Title */}
                    <div className="ml-0 sm:ml-5 mt-4 sm:mt-0">
                        <p className="font-semibold">{item.product.title}</p>
                        {/* Additional Information */}
                        <p className="opacity-60">Size: {item.size}, Black</p>

                        {/* Price and Discount */}
                        <div className='flex items-center space-x-2'>
                            <p className='font-semibold'>₹ {item.product.discountedPrice}</p>
                            <p className='opacity-50 line-through'>₹ {item.product.price}</p>
                            <p className='text-green-600 font-semibold'>{item.product.discountPresent}% off</p>
                        </div>
                    </div>

                    {/* Quantity Controls */}
                    
                </div>
            </div>

          
        </div>
    );
}
