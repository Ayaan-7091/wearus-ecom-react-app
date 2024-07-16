import { IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";

export default function CartItemCard({ item }) {
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
                    <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                        <IconButton sx={{ color: 'black' }} onClick={() => handleUpdateCartItem(-1)} disabled={item.quantity <= 1}>
                            <RemoveCircleOutlineIcon />
                        </IconButton>
                        <span className="py-1 px-3 sm:px-7 rounded-xl border">
                            {item.quantity}
                        </span>
                        <IconButton sx={{ color: 'black' }} onClick={() => handleUpdateCartItem(1)}>
                            <AddCircleOutlineIcon />
                        </IconButton>
                    </div>
                </div>
            </div>

            {/* Remove Button */}
            <div className="flex items-center justify-end mt-4">
                <Button onClick={handleRemoveCartItem} className="text-bold text-white hover:bg-white hover:text-red-500 p-1 rounded-sm bg-red-600 px-2 transition-all">REMOVE</Button>
            </div>
        </div>
    );
}
