import { Grid } from "@mui/material";
import Achievement from "./Achievement";
import MonthlyOverview from "./MonthlyOverview";
import ProductsTable from "./ProductsTable";
import ProductsTableViews from "./Views/ProductTableView";
import Logo from "./Views/logo";
import OrdersTableView from "./Views/OrderTableView";
import CheckoutUtil from "../../Payments/util";
//notify test
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChartComponent from "./Views/ChartComponent";
import CustomersTableView from "./Views/CustomersTableView";
import CustomerChartComponent from "./Views/CustomerChart";
import SalesChartStatic from "./StaticComponents/SalesChartStatic";



export default function AdminDashboard(){
    const notify = () => toast("Wow so easy!");
    return(
        <div className="p-10">
           <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Achievement/>
      
            </Grid>
            <Grid item xs={12} md={8}>
                <MonthlyOverview/>
            </Grid>
            <Grid item xs={12} md={6} className="">
               <SalesChartStatic/>
            </Grid>
            <Grid item xs={12} md={6}>
                <CustomerChartComponent/>
            </Grid>
            <Grid item xs={12} md={6}>
               <OrdersTableView/>
            </Grid>
            <Grid item xs={12} md={6}>
               <ProductsTableViews/>
            </Grid>
           </Grid>

          

           

        </div>
    )
}