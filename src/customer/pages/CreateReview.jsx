import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { findProductsById } from "../../State/Product/Action"
import { useEffect, useState } from "react"
import { Button, Grid, TextField, MenuItem, Select, FormControl, InputLabel } from "@mui/material"
import { createReview } from "../../State/Review/Action"
import { toast, ToastContainer } from "react-toastify"

export default function CreateReview() {
    const { productId } = useParams()
    const dispatch = useDispatch()
    const { products } = useSelector(store => store)

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(findProductsById(productId))
    }, [])

    const [data, setData] = useState({
        review: "",
        rating: "",
        productId: productId,
        createdAt: Date.now()
    })

    const jwt = localStorage.getItem('jwt')

    const handleChange = (e) => {
        const { name, value } = e.target
        setData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createReview(data))
        toast.success("Review added Successfully !")
        
        // Delay the navigation to allow the toast to be displayed
        setTimeout(() => {
            navigate('/')
        }, 3000) // 3 seconds delay
    }

    return (
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
            <Grid className="border p-4 rounded-lg shadow-md" container spacing={2} xs={12} >
                <Grid item xs={12} md={2} className="">
                    <img className="w-[12rem] h-[15rem] object-fit object-top border rounded-md ml-4" src={products?.product?.imageUrl} alt="" />
                    <h2 className="flex flex-col items-center font-semibold">{products?.product?.title}</h2>
                </Grid>
                <Grid item xs={12} md={6}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Write a review"
                            name="review"
                            value={data.review}
                            onChange={handleChange}
                            multiline
                            rows={3}
                            sx={{ marginBottom: "10px" }}
                        />
                        <FormControl fullWidth sx={{ marginBottom: "10px" }}>
                            <InputLabel id="rating-label">Rating</InputLabel>
                            <Select
                                labelId="rating-label"
                                name="rating"
                                value={data.rating}
                                onChange={handleChange}
                                label="Rating"
                            >
                               
                                {[0, 1, 2, 3, 4, 5].map((value) => (
                                    <MenuItem key={value} value={value}>{value}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Button variant="contained" type="submit">Post</Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}
