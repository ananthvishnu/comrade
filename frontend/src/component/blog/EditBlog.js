import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBlogById,
  updateBlog,
  getAllBlogs,
  clearErrors,
} from "../../actions/BlogAction";
import { Button, TextField, Typography, Card, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import MetaData from "../../more/Metadata";
import { ToastContainer, toast } from "react-toastify";
import Sidebar from "../Admin/Sidebar";

const EditBlog = ({ match, history }) => {
  const dispatch = useDispatch();
  const {
    loading,
    blog,
    success: updateSuccess,
  } = useSelector((state) => state.BlogById);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  useEffect(() => {
    if (updateSuccess) {
      dispatch(getAllBlogs()); // Refresh blogs
      history.push("/blogs");
    } else {
      dispatch(getBlogById(match.params.id));
    }
  }, [dispatch, match.params.id, updateSuccess, history]);

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setOldImages(blog.images);
    }
  }, [blog]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImagesPreview([]);
    setImages([]);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((prevImagesPreview) => [
            ...prevImagesPreview,
            reader.result,
          ]);
          setImages((prevImages) => [...prevImages, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleImageRemove = (index) => {
    const newImages = [...images];
    const newImagesPreview = [...imagesPreview];
    newImages.splice(index, 1);
    newImagesPreview.splice(index, 1);
    setImages(newImages);
    setImagesPreview(newImagesPreview);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateBlog(match.params.id, title, content, images));
    setTitle("");
    setContent("");
    setImages([]);
    setImagesPreview([]);

    // Navigate to the blog page after successful update
    history.push("/admin/blogs");
    toast.success("Blog updated successfully");
  };

  return (
    <Fragment>
      <MetaData title="Edit Blog" />
      <div className="dashboard" >
        <Sidebar />
        <div className="productReviewsContaine" style={{padding:"20%"}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              py: 40,
            
            }}
            style={{padding:"50px",marginTop:"30px"}}
          >
            <Card sx={{ maxWidth: 1900, mt: 4 }}>
              <Link to="/admin/blogs">
                <Button variant="contained" style={{marginTop:"5%",marginLeft:"5%"}}>
                  Back to Blogs
                </Button>
              </Link>

              <Typography
                variant="h5"
                gutterBottom
                style={{ marginTop: "20px" }}
              >
                Edit Blog
              </Typography>

              {loading ? (
                <Typography variant="body1">Loading...</Typography>
              ) : (
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
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
                    style={{marginTop: "10px"}}
                  />
                  <div>
                    <label>Images:</label>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                    />
                    {imagesPreview.map((image, index) => (
                      <div key={index}>
                        <img
                          src={image}
                          alt="Preview"
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                          }}
                        />
                        <button onClick={() => handleImageRemove(index)}>
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loading}
                    style={{ marginTop: "10px",background:"#2A4E45",borderRadius:"20px" ,marginLeft:"75%"}}
                    >
                    Update
                  </Button>
                </form>
              )}
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

export default EditBlog;