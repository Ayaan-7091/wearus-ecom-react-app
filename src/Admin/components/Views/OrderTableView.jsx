import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableBody,
    Paper,
    Avatar,
    Button,
    Card,
    CardHeader,
    AvatarGroup,
    Menu,
    MenuItem,
  } from "@mui/material";
import { getOrders } from "../../../State/Admin/Order/Action";

export default function OrdersTableView(){

    const dispatch = useDispatch()
    const {adminOrder} = useSelector(store=>store)

    useEffect(()=>{
        dispatch(getOrders())
    },[adminOrder.shipped,adminOrder.confirmed,adminOrder.delivered,adminOrder.deletedOrder])

 
  

    return(
        <div className="">
            
        <div className="mt-2 rounded-3xl border p-4">
            <CardHeader title="Orders 📦" sx={{textAlign:"center"}}/>
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="left">Title</TableCell>
             
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Status</TableCell>
           
            </TableRow>
          </TableHead>
          <TableBody>
            {adminOrder?.orders?.slice(0,5).map((item,index) => (
              <TableRow
                key={item.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                    <AvatarGroup sx={{justifyContent:"start"}} max={3}>
                    {item.orderItems?.map((orderItem)=>  <Avatar src={orderItem?.product?.imageUrl}></Avatar>)}
                
                  </AvatarGroup>
                </TableCell>

                <TableCell component="th" scope="row">
                {item.orderItems?.map((orderItem)=>  <p> {orderItem.product?.title} </p>)}
                </TableCell>

                <TableCell align="left">{item.totalPrice}</TableCell>    
                <TableCell align="left" >
              <span  className={` px-4 py-2 rounded-full ${item.orderStatus === "PENDING"?"bg-[#ebf0ee] text-black":item.orderStatus === "CONFIRMED"?"bg-[#5252ff] text-white":
                        item.orderStatus === "SHIPPED"?"bg-[orange] text-white":item.orderStatus === "PLACED"?"bg-[yellow]":"bg-[#3cef3c]"
                     }`}>  {item.orderStatus}</span> </TableCell> 
                
             
                

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </div>
   
        </div>
    )
}