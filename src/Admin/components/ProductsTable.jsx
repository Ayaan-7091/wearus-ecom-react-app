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
import { deleteProduct, findProducts } from "../../State/Product/Action";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ProductsTable() {

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const { products } = useSelector((store) => store);
  console.log("---->", products);
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
      pageSize: 100,
    };

    dispatch(findProducts(data));
  }, [products.deletedProduct]);

  const handleProductDelete = (productId) =>{
    dispatch(deleteProduct(productId))
    toast.error("Product deleted !")

  }

  return (
    <div className="p-5">
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
            <CardHeader title="All Products" />
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Quantity</TableCell>
              <TableCell align="left">Update</TableCell>
              <TableCell align="left">Delete</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {products?.products?.content?.map((item) => (
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
                <TableCell align="left"><Button variant="contained"  sx={{ borderRadius: '18px', backgroundColor: '#43BE31', }} onClick={()=>navigate(`/admin/products/${item._id}/update`) }>Update</Button></TableCell>

                <TableCell align="left"><Button variant="contained" sx={{ borderRadius: '18px',backgroundColor: '#EC4849',   }} onClick={()=>handleProductDelete(item._id)}>Delete</Button></TableCell>

                

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </Card>
   
    </div>
  );
}
