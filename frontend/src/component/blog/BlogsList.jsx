import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs, deleteBlog } from "../../actions/BlogAction";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import moment from "moment";
import { DELETE_BLOG_RESET } from "../../constans/BlogConstans";
import { ToastContainer, toast } from "react-toastify";
import MetaData from "../../more/Metadata";
import Sidebar from "../Admin/Sidebar";
import "./CustomerBlog.css";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const BlogsList = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.AllBlogs);
  const { success: deleteSuccess } = useSelector((state) => state.deletBlog);

  useEffect(() => {
    dispatch(getAllBlogs());
    if (deleteSuccess) {
      dispatch({ type: DELETE_BLOG_RESET });
      toast.success("Blog deleted successfully");
    }
  }, [dispatch, deleteSuccess]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      dispatch(deleteBlog(id));
    }
  };

  return (
    <Fragment>
      <MetaData title="Blogs of Comrade" />
      <div className="dashboard">
        <Sidebar />
        <div className="productReviewsContaine">
        <div>
            <Link to="/create-blog">
             
               <AddCircleIcon style={{color:"#2A4E45",fontSize:"3vmax",marginLeft:"90%",marginTop:"2%"}}/>
          
            </Link>
          </div>
          <div className="projcard-container">
            {blogs.map((blog, index) => (
              <div
                className={`projcard projcard-${
                  index % 3 === 0 ? "blue" : index % 3 === 1 ? "red" : "green"
                }`}
                key={blog._id}
              >
                <div className="projcard-innerbox">
                  {blog.images.length > 0 && (
                    <img
                      src={blog.images[0].url}
                      alt={blog.title}
                      className="projcard-img"
                    />
                  )}
                  <div className="projcard-textbox">
                    <div className="projcard-title">{blog.title}</div>
                    <div className="projcard-subtitle">
                      {moment(blog.createdAt).format("MMMM Do, YYYY")}
                    </div>
                    <div className="projcard-bar"></div>
                    <div className="projcard-description">{blog.content}</div>
                    <div className="projcard-tagbox">
                      <span className="projcard-tag">
                        <Link
                          to={`/edit-blog/${blog._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            variant="contained"
                            
                            sx={{ mr: 2 }}
                            style={{backgroundColor:"#2A4E45",padding:"5px 13px 5px 13px",borderRadius:"20px",color:"#fff"}}
                          >
                            Edit
                          </Button>
                        </Link>
                      </span>
                      <span className="projcard-tag">
                        <Button
                          variant="contained"
                          
                          onClick={() => handleDelete(blog._id)}
                          style={{backgroundColor:"#F06A49",padding:"5px 10px 5px 10px",borderRadius:"20px",color:"#fff"}}
                        >
                          Delete
                        </Button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
            ))}
          </div>
          
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

export default BlogsList;
