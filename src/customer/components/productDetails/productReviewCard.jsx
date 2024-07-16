import { Avatar, Box,Rating } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Grid } from '@mui/material';


export default function ProductReviewCard({review}){

const dateString = review.createdAt;
const date = new Date(dateString);

const year = date.getFullYear();
const month = date.getMonth() + 1; // Months are zero-indexed in JavaScript
const day = date.getDate();

    return(
        <div className="border p-5 rounded-2xl">

            <Grid container spacing={2} gap={3} >

                <Grid item xs={1} sx={{marginRight:"8px"}}>
                    <Box>
                        <Avatar className=" bg-white " sx={{width:56,height:56, backgroundColor:'red'}}>{review.user.firstName[0]}</Avatar>
                    </Box>
                </Grid>

                <Grid items xs={9} className="ml-4">
                    <div className="space-y-2 mb-2">
                        <div>
                            <p className=" font-semibold text-lg mt-2 ">{review.user.firstName+" "+review.user.lastName}</p>
                            <p className="opacity-40">{day+"/"+month+"/"+year}</p>
                        </div>
                    </div>
                    <Rating value={review.rating} name='half-rating' readOnly precision={0.5}/>
                    <p>{review.review}</p>
                </Grid>
            </Grid>



        </div>
    )
}