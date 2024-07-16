import { GridOff } from "@mui/icons-material";
import { Grid } from "@mui/material";
import tshirtsData from "../../Data/Tshirts/tshirtsData";
import OrderCard from "../components/Order/OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../State/Order/Action";
import { useEffect, useState } from "react";

export default function Order(){

    const orderStatus = [
        {label:'On the Way',value:'on_the_way'},
        {label:'Delivered',value:'delivered'},
        {label:'Canceled',value:'canceled'},
        {label:'Returned',value:'returned'},

    ]

    const dispatch = useDispatch()
    const {order} = useSelector(store=>store)
    console.log("new data",order.orders)
   

    useEffect(() => {
        dispatch(getUserOrders())
    }, []);

    return(
        <div className="px-5 lg:px-20">
            <Grid container sx={{justifyContent:'space-around'}} >

                <Grid item xs={12} md={4}>

                    <div className="h-auto shadow-md border rounded-md bg-white p-5 sticky-top mt-6">

                        <h1 className="font-bold text-lg">Filter</h1>

                        <div className="space-y-5 mt-10">

                            <h1 className="font-semibold"> ORDER STATUS</h1>

                             {
                                orderStatus.map((option)=>   <div className="flex items-center">

                                <input defaultValue={option.value} type="checkbox" className="h-4 w-4 border-gray-100 focus:ring-indigo-500"/>
                                <label className="ml-3 text-sm text-gray-500" htmlFor={option.value}>{option.label}</label>

                            </div>)
                             }
                        </div>

                    </div>
                </Grid>

                <Grid xs={12} md={8} className="space-y-5">

                    {
                        order?.orders?.map((item)=><OrderCard item={item} />)
                    }

                </Grid>

            </Grid>
        </div>
    )
}