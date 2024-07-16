
import { CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/Inbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import GroupsIcon from '@mui/icons-material/Groups';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dashboard from "./AdminDashboard";
import CreateProductForm from "./CreateProductForm";
import ProductsTable from "./ProductsTable";
import OrdersTable from "./OrdersTable";
import CustomersTable from "./CustomersTable";
import AdminDashboard from "./AdminDashboard";
import ViewCarouselOutlinedIcon from '@mui/icons-material/ViewCarouselOutlined';
import Banner from "./Banner";
import AddBannerImage from "./AddBannerImage";
import UpdateProduct from "./UpdateProduct";

export default function Admin(){

    const menu = [
        {name:"Dashboard",path:"/admin",icon:<DashboardIcon/>},
        {name:"Products",path:"/admin/products",icon:<LocalMallIcon/>},
        {name:"Customers",path:"/admin/customers",icon:<GroupsIcon/>},
        {name:"Orders",path:"/admin/orders",icon:<ShoppingCartIcon/>},
        {name:"AddProduct",path:"/admin/product/create",icon:<AddCircleOutlineIcon/>},
        {name:"Banner",path:"/admin/banner/image",icon:<ViewCarouselOutlinedIcon/>},
        {name:"Change Banner",path:"/admin/banner/addImage",icon:<ViewCarouselOutlinedIcon/>}



    ]

    const theme = useTheme()
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'))
    const [sideBarVisible,setSideBarVisible] = useState(false)
    const navigate = useNavigate()

    const drawer = (
        <Box sx={{
            overflow:"auto",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            height:"100%"
        }}>


        {/* {isLargeScreen && <Toolbar/>} */}
        <List>
            {(menu.map((item,index)=> <ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
        <ListItemButton>
            <ListItemIcon>
                {item.icon}
            </ListItemIcon>
            <ListItemText>
                {item.name}
            </ListItemText>
        </ListItemButton>
            </ListItem>))}
        </List>

        <List>
        <ListItem disablePadding >
        <ListItemButton>
            <ListItemIcon>
                <AccountCircleIcon/>
            </ListItemIcon>
            <ListItemText>
               Account
            </ListItemText>
        </ListItemButton>
            </ListItem>
        </List>
        </Box>
    )

    return(
       
            <div className="relative flex h-[100vh]">
            <CssBaseline />

            <div className="w-[15%] border border-r-gray-300 h-full fixed top-0">
                {drawer}
            </div>
           <div className="w-[85%] h-full ml-[15%]">
                <Routes>
                    <Route path="/" element={<AdminDashboard/>}> </Route>
                    <Route path="/product/create" element={<CreateProductForm/>}> </Route>
                    <Route path="/products" element={<ProductsTable/>}> </Route>
                    <Route path="/products/:productId/update" element={<UpdateProduct/>}> </Route>

                    <Route path="/Orders" element={<OrdersTable/>}> </Route>
                    <Route path="/Customers" element={<CustomersTable/>}> </Route>
                    <Route path="/banner/image" element={<Banner/>}> </Route>
                    <Route path="/banner/addImage" element={<AddBannerImage/>}> </Route>



                </Routes>
                </div>
            </div>
    
    )
}