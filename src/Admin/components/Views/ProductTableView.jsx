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
  } from "@mui/material";
  import { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../../../State/Product/Action";

  
  export default function ProductsTableViews() {
  
    const dispatch = useDispatch();
  
    const { products } = useSelector((store) => store);
   
    useEffect(() => {
      const data = {
        category: "",
        color: [],
        sizes: [],
        minPrice: 0,
        maxPrice: 10000,
        sort: "price_low",
        stock: "",
        pageNumber: 1,
        pageSize: 10,
      };
  
      dispatch(findProducts(data));
    }, [products.deletedProduct]);
  
 
  
    return (
      <div className="">
  
          <div className="mt-2 rounded-3xl border p-4">
              <CardHeader title="Products 🛒" sx={{textAlign:"center"}}/>
              <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quantity</TableCell>
            
  
              </TableRow>
            </TableHead>
            <TableBody sx={{borderRadius:"15px"}}>
              {products?.products?.content?.slice(0,7).map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <Avatar src={item.imageUrl}></Avatar>
                  </TableCell>
  
                  <TableCell component="th" scope="row">
                    {item.title}
                  </TableCell>
  
                  <TableCell align="left">
                    {item.category === null
                      ? "Uncategorized"
                      : item.category.name}
                  </TableCell>
                  <TableCell align="left">{item.price}</TableCell>
                  <TableCell align="left">{item.quantity}</TableCell>
                
  
                  
  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
          </div>
     
      </div>
    );
  }
  