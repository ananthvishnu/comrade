import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
// import LocalOffer from "@material-ui/icons/LocalOffer";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import logo from "../../Assets/10.png";
import { margin } from "@mui/system";
import BookIcon from "@mui/icons-material/Book";
import NotesIcon from "@mui/icons-material/Notes";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

const Sidebar = () => {
  const button = () => {
    let items = document.querySelectorAll(".Dashboard__item");
  };

  return (
    <div className="sidebar">
      <Link to="/">
        <img
          src={logo}
          alt="Ecommerce"
          style={{
            height: "220px",
            width: "220px",
            marginLeft: "30px",
            marginTop: "-20px",
            marginBottom: "-45px",
          }}
        />
      </Link>
      <dvi
        className="sidebarbtn"
        style={{
          border: "none",
          boxShadow: "0px 5px 8px 0px #00000081",
          padding: "4px",
          borderRadius: "3px",
          marginBottom: "10px",
        }}
      >
        <Link to="/dashboard">
          <p className="Dashboard__item" onClick={button}>
            <DashboardOutlinedIcon style={{ color: "#fff" }} />
            Dashboard
          </p>
        </Link>
      </dvi>
      <div
        className="sidebarbtn"
        style={{
          border: "none",
          boxShadow: "0px 5px 8px 0px #00000081",
          padding: "4px",
          borderRadius: "3px",
          marginBottom: "10px",
        }}
      >
        <Link to="/admin/products">
          <p className="Dashboard__item">
            <PostAddIcon /> All Products
          </p>
        </Link>
      </div>
      <div
        className="sidebarbtn"
        style={{
          border: "none",
          boxShadow: "0px 5px 8px 0px #00000081",
          padding: "4px",
          borderRadius: "3px",
          marginBottom: "10px",
        }}
      >
        <Link to="/admin/product">
          <p>
            <AddIcon />
            Create Product
          </p>
        </Link>
      </div>
      <div
        className="sidebarbtn"
        style={{
          border: "none",
          boxShadow: "0px 5px 8px 0px #00000081",
          padding: "4px",
          borderRadius: "3px",
          marginBottom: "10px",
        }}
      >
        <Link to="/admin/orders">
          <p>
            <ListAltIcon style={{color:"#fff"}}/>
            Orders
          </p>
        </Link>
      </div>
      <div
        className="sidebarbtn"
        style={{
          border: "none",
          boxShadow: "0px 5px 8px 0px #00000081",
          padding: "4px",
          borderRadius: "3px",
          marginBottom: "10px",
        }}
      >
        <Link to="/admin/users">
          <p>
            <AccountCircleOutlinedIcon style={{ color: "#fff" }} /> Users
          </p>
        </Link>
      </div>
      <div
        className="sidebarbtn"
        style={{
          border: "none",
          boxShadow: "0px 5px 8px 0px #00000081",
          padding: "4px",
          borderRadius: "3px",
          marginBottom: "10px",
        }}
      >
        <Link to="/admin/reviews">
          <p>
            <RateReviewOutlinedIcon style={{ color: "#fff" }} />
            Reviews
          </p>
        </Link>
      </div>
      <div
        className="sidebarbtn"
        style={{
          border: "none",
          boxShadow: "0px 5px 8px 0px #00000081",
          padding: "4px",
          borderRadius: "3px",
          marginBottom: "10px",
        }}
      >
        <Link to="/admin/chats">
          <p>
            <ChatOutlinedIcon style={{ color: "#fff" }} />
            {/* <LocalOffer/> */}
            Chats
          </p>
        </Link>
      </div>
      <div
        className="sidebarbtn"
        style={{
          border: "none",
          boxShadow: "0px 5px 8px 0px #00000081",
          padding: "4px",
          borderRadius: "3px",
          marginBottom: "10px",
        }}
      >
        <Link to="/admin/blogs">
          <p>
            <BookIcon style={{ color: "#fff" }} />
            {/* <LocalOffer/> */}
            Write Blogs
          </p>
        </Link>
      </div>

      <div
        className="sidebarbtn"
        style={{
          border: "none",
          boxShadow: "0px 5px 8px 0px #00000081",
          padding: "4px",
          borderRadius: "3px",
          marginBottom: "10px",
        }}
      >
        <Link to="/admin/notes">
          <p>
            <NotesIcon style={{ color: "#fff" }} />
            {/* <LocalOffer/> */}
            Write Note
          </p>
        </Link>
      </div>
      <div
        className="sidebarbtn"
        style={{
          border: "none",
          boxShadow: "0px 5px 8px 0px #00000081",
          padding: "4px",
          borderRadius: "3px",
          marginBottom: "10px",
        }}
      >
        <Link to="/admin/reports">
          <p>
            <ReportGmailerrorredIcon style={{ color: "#fff" }} />
            {/* <LocalOffer/> */}
            Customer Reports{" "}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
