import React from "react";  
import "../Home/HomeBlog.css"
import bg8 from "../../Assets/tea-64.png";
import { Link } from "react-router-dom";



const HomeBlog = () => {
  return (
    <div>
      <div className="homeHeading1">
              <img src={bg8} className="productimg1"  />
              <h2 className="homeHeading2" > Our Blogs</h2>{" "}
            </div>
      <div className="wrapper">
        <figure className="card3">
          <img
            src="https://media.istockphoto.com/id/937746056/photo/coffee-spilling-out-of-a-coffee-cup-on-white-background.jpg?s=612x612&w=0&k=20&c=JKY9YOu_dSvi7IuYWiNM8uskoMVvFbXkR16SaSV2Suw="
            width="640"
            height="640"
            alt=""
          />
          <figcaption>
            <blockquote>
              We shape our tools and then the tools shape us.
            </blockquote>
            <cite>
              Attributed to Winston Churchill, Marshall McLuhan, and John Culkin.
            </cite> 
           
            <p className="credit">
             
            </p>
            <div >
              <Link to= "/blogs">
              <button style={{padding:"15px 25px 15px 25px",background:"#F5A764",borderRadius:"25px",border:"none",boxShadow:
                        "rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0",marginLeft:"100px",fontSize:"1vmax"}}> See More </button>
              </Link>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default HomeBlog;


