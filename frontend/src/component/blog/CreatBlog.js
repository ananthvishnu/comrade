import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBlog } from "../../actions/BlogAction";
import { Button, TextField, Typography, Box, Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import MetaData from "../../more/Metadata";
import { ToastContainer, toast } from "react-toastify";
import Sidebar from "../Admin/Sidebar";
import AddIcon from '@mui/icons-material/Add';

const CreateBlog = ({ history }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.creatBlog);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createBlog(title, content, images));
    setTitle("");
    setContent("");
    setImages([]);
    setImagesPreview([]);
    history.push("/admin/blogs");
    toast.success("Blog created successfully");
  };
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((prevImages) => [...prevImages, reader.result]);
          setImagesPreview((prevPreviews) => [
            ...prevPreviews,
            URL.createObjectURL(file),
          ]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetaData title="Create Blog" />

      <div className="dashboard">
        <Sidebar />
        <div className="productReviewsContaine" style={{padding:"20px",}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              py: 40,
              padding:"150px",
              width:"750px"
            }}
          >
            <Card sx={{ maxWidth: 800, mt: 4 }}>
              <Link to="admin/blogs">
                <Button variant="contained" style={{background:"#2A4E45",marginTop:"20px",marginLeft:"10px"}}>
                  Back to Blogs
                </Button>
              </Link>

              <Typography
                variant="h5"
                gutterBottom
                style={{ marginTop: "20px", }}
              >
                Create
              </Typography>


              <form onSubmit={handleSubmit}>
                <TextField
                  label="Title"
                  variant="outlined"
                  fullWidth
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  style={{width:"700px",marginLeft:"30px"}}
                />
                <TextField
                  label="Content"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  style={{ marginTop: "10px",width:"700px",marginLeft:"30px" }}
                />
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  style={{padding:"10px",
                  marginLeft:"25px"}}
                />

                {imagesPreview.map((preview, index) => (
                  <img
                    key={index}
                    src={preview}
                    alt="Preview"
                    style={{
                      width: "200px",
                      height: "auto",
                      marginTop: "10px",
                      
                    
                    }}
                  />
                ))}

                <Button
                  type="submit"
                  variant="contained"
                  
                  disabled={loading}
                  style={{ marginTop: "5px",background:"#2A4E45",marginBottom:"10px",marginLeft:"85%" }}
                >
                  Create
                </Button>
              </form>
            </Card>
          </Box>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
};

export default CreateBlog;