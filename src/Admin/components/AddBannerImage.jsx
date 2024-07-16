import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBannerImage } from "../../State/Banner/Action";
import { toast, ToastContainer } from "react-toastify";

export default function AddBannerImage() {
    const dispatch = useDispatch();

    const [image, setImage] = useState({
       image: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Assuming you have defined the AddBannerImage action correctly in your actions file
        dispatch(addBannerImage(image));
        console.log(image);
        toast.success("Banner Added")
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setImage((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="m-6 border p-5 rounded-lg">
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
            <form onSubmit={handleSubmit} className="">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Image URL"
                            name="image"
                            value={image.image}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <div className=" flex flex-col items-center">

                        <Button variant="contained" type="submit">Add Image to Banner</Button>
                        </div>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}
