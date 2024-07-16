import React from 'react';
import './product.css';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ item }) {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/products/${item._id}`)} className="productCard w-[15rem] m-3 transition-all cursor-pointer border-2">
      <div className="h-[20rem] relative">
        <img
          className="h-full w-full object-cover object-left-top"
          src={item.imageUrl}
          alt=""
        />
        <img
          className="hoverImage h-full w-full object-cover object-left-top"
          src={item.imageUrl}
          alt=""
        />
      </div>
      <div className="productDetails bg-white p-3">
        <p className="font-bold opacity-80">{item.title}</p>
        <div className="flex items-center space-x-2">
          <p className="font-semibold opacity-50 line-through">₹{item.price}</p>
          <p className="font-semibold">{item.discountedPrice}</p>
          <p className="font-semibold text-green-500">{item.discountPresent}% off</p>
        </div>
      </div>
    </div>
  );
}
