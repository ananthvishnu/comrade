import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs, deleteBlog } from "../../actions/BlogAction";
import moment from "moment";
import { DELETE_BLOG_RESET } from "../../constans/BlogConstans";
import MetaData from "../../more/Metadata";
import Header from "../Home/Header";
import Footer from "../../Footer";
import "./CustomerBlog.css";

const CustomerBlog = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.AllBlogs);
  const { success: deleteSuccess } = useSelector((state) => state.deletBlog);

  useEffect(() => {
    dispatch(getAllBlogs());
    if (deleteSuccess) {
      dispatch({ type: DELETE_BLOG_RESET });
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
      <Header />

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
                  <span className="projcard-tag">hello</span>
                  <span className="projcard-tag">comrade</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </Fragment>
  );
};

export default CustomerBlog;
