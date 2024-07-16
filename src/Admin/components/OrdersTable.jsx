import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shippedOrder } from "../../State/Admin/Order/Action"
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
import { toast, ToastContainer } from "react-toastify";

export default function OrdersTable(){

    const dispatch = useDispatch()
    const {adminOrder} = useSelector(store=>store)

    useEffect(()=>{
        dispatch(getOrders())
    },[adminOrder.shipped,adminOrder.confirmed,adminOrder.delivered,adminOrder.deletedOrder])

    console.log("Admin Orders",adminOrder)

    const handleShippedOrder=(orderId)=>{
       
        dispatch(shippedOrder(orderId))
    }

    const handleConfirmedOrder=(orderId)=>{
       
        dispatch(confirmOrder(orderId))
    }

    const handleDeliverOrder=(orderId)=>{
       
        dispatch(deliveredOrder(orderId))
    }

    const handleDeleteOrder=(orderId)=>{
        dispatch(deleteOrder(orderId))
        toast.success("Order deleted successfully")
    }
    //STATUS MENU CONTROLS 
    const [anchorEl, setAnchorEl] =useState([]);
  const open = Boolean(anchorEl);

  const handleClick = (event,index) => {
    const newAnchorElArray = [...anchorEl]
    newAnchorElArray[index]=event.currentTarget
    setAnchorEl(newAnchorElArray)
  };
  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl]
    newAnchorElArray[index]=null
    setAnchorEl(newAnchorElArray)
  };

  

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
            
        <Card className="mt-2">
            <CardHeader title="All Orders" />
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Id</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Update</TableCell>
              <TableCell align="left">Delete</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {adminOrder?.orders?.map((item,index) => (
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

                <TableCell align="left">
                {item._id}
                </TableCell>
                <TableCell align="left">{item.totalPrice}</TableCell>    
                <TableCell align="left" >
              <span  className={` px-4 py-2 rounded-full ${item.orderStatus === "PENDING"?"bg-[#ebf0ee] text-black":item.orderStatus === "CONFIRMED"?"bg-[#5252ff] text-white":
                        item.orderStatus === "SHIPPED"?"bg-[orange] text-white":item.orderStatus === "PLACED"?"bg-[yellow]":"bg-[#3cef3c]"
                     }`}>  {item.orderStatus}</span> </TableCell> 
                <TableCell align="left">
                    
                <Button
                   id="basic-button"
                   aria-haspopup="true"
                   onClick={(event)=>handleClick(event,index)}
                   aria-controls={`basic-menu-${item._id}`}
                     aria-expanded={Boolean(anchorEl[index])}
                 >
                STATUS
                 </Button>
                     <Menu
                       id={`basic-menu-${item._id}`}
                         anchorEl={anchorEl[index]}
                         open={Boolean(anchorEl[index])}
                       onClose={()=>handleClose(index)}
                         MenuListProps={{
                        'aria-labelledby': 'basic-button',
                           }}
                             >
                        <MenuItem onClick={()=> handleConfirmedOrder(item._id)}>Order Confirmed</MenuItem>
                        <MenuItem onClick={() => handleShippedOrder(item._id)}>Order Shipped</MenuItem>
                        <MenuItem onClick={()=> handleDeliverOrder(item._id)}>Order Delivered</MenuItem>
                   </Menu>

                </TableCell>
                <TableCell align="left"><Button variant="outlined" color="error" onClick={()=>handleDeleteOrder(item._id)}>Delete</Button></TableCell>

                

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </Card>
   
        </div>
    )
}