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
import { getAllUsers } from "../../../State/Auth/Action";


  
  export default function CustomersTableView() {
  
    const dispatch = useDispatch();
  
    const { auth } = useSelector((store) => store);

    useEffect(() => {
        dispatch(getAllUsers())
       

    }, []);

    
      
  
    return (
      <div className="p-5">
  
          <Card className="mt-2">
              <CardHeader title="All Users" />
              <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Firstname</TableCell>
                <TableCell align="left">Lastname</TableCell>
                <TableCell align="left">Email</TableCell>
               
              
  
              </TableRow>
            </TableHead>
            <TableBody>
              {auth?.user_data?.slice(0,10).map((user) => (
                <TableRow
                  key={user.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                   {user.firstName}
                  </TableCell>
  
                  <TableCell component="th" scope="row">
                    {user.lastName}
                  </TableCell>
  
                  <TableCell align="left">
                    {user.email}
                  </TableCell>
                 
                 
                
  
                  
  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
          </Card>
     
      </div>
    );
  }
  