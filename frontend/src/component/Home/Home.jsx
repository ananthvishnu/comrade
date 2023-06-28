import React, { useEffect } from "react";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
import bg4 from "../../Assets/a3.png";
import bg from "../../Assets/a1.png";
import bg5 from "../../Assets/a2.png";
import bg6 from "../../Assets/png1.png";
import bg7 from "../../Assets/png2.png";
import bg8 from "../../Assets/tea-64.png";
import bg10 from "../../Assets/greeen2.png";
import bg11 from "../../Assets/Lemon-Tea.png";
import bg12 from "../../Assets/Mint-Tea.png";
import bg13 from "../../Assets/red.png";
import bg14 from "../../Assets/blue.png";




// import blog from "../../Assets/bg2.jpg";
import Cardlist from "./Cardlist";
// import ProductCard from "../Products/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../actions/ProductActions";
import Header from "./Header";
import MetaData from "../../more/Metadata";
import Footer from "../../Footer";
import BottomTab from "../../more/BottomTab";
import Loading from "../../more/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import { Grid } from "@material-ui/core";
// import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Flotter from "./Flotter";
import arrow from "../../Assets/up-arrow1.png";
// import CustomerBlog from "../blog/CustomerBlog"
// import HomeBlog from "../Home/HomeBlog";

const Home = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="COMRADE" />
          <Header />
          {/* Carousel */}

          <div className="banner">
            <Carousel>
              <img src={bg4} className="bgImg" />
              <img src={bg} className="bgImg" />
              <img src={bg5} className="bgImg" />
              <img src={bg6} className="bgImg" />
              <img src={bg7} className="bgImg" />
              <img src={bg10} className="bgImg" />
              <img src={bg11} className="bgImg" />
              <img src={bg12} className="bgImg" />
              <img src={bg13} className="bgImg" />
              <img src={bg14} className="bgImg" />



            </Carousel>
            <div className="home__content">
              <div
                style={{
                  display: "flex",
                  alignItems: "right",
                }}
              >
                <h2
                  style={{
                    fontFamily: "montserrat",
                    fontSize: "3em",
                    fontWeight: "500",
                    color: "black",
                  }}
                >
                  Buy 2 Get 1 Free
                </h2>
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "3.5em",
                    fontFamily: "montserrat",
                    color: "#000",
                  }}
                >
                  The
                </h2>
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "3.1em",
                    fontWeight: "650",
                    fontFamily: "montserrat",
                    color: "#000",
                    lineHeight: ".7",
                    marginBottom: "5px",
                    marginTop: "5PX",
                  }}
                >
                  {" "}
                  Comrade Tea
                </h2>
              </div>
              <div>
                <h2
                  style={{
                    fontWeight: "400",
                    fontFamily: "montserrat",
                    color: "#000",
                    fontSize: "1em",
                    paddingTop: "10px",
                  }}
                >
                  Get Free Shipping on all orders under $10.00
                </h2>
              </div>
              <div>
                <a href="/Products">
                  <button
                    type="submit"
                    style={{
                      width: "160px",
                      height: "50px",
                      border: "none",
                      background: " #F06A49",
                      margin: "20px 0",
                      fontSize: "1vmax",
                      color: "#fff",
                      cursor: "pointer",
                      borderRadius: "25px",
                      boxShadow:
                        "rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0",
                    }}
                    className="Home__button"
                  >
                    SHOP NOW
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="landingcontainer">
            <div className="homeHeading1">
              <img src={bg8} className="productimg" />
              <h2 className="homeHeading"> Comrade Tea</h2>
            </div>

            <div className="container1">
              <div className="grid1">
                <Flotter />
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
            <div>
              <Cardlist />
            </div>

            <div
              className="homecontact"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  marginLeft: "10%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <p style={{ margin: "0px -50px 0px 70px", color: "#fff" }}>
                  &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;
                </p>
                <h3
                  style={{
                    textAlign: "center",
                    margin: "10px 0px 0px 100px",
                    color: "#fff",
                  }}
                >
                  "Indulge in a Symphony of Flavors, Crafted for Tea
                  Connoisseurs"
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1vmax",
                    margin: "10px 0",
                  }}
                >
                  <span>
                    <WhatsAppIcon style={{ color: "#fff" }} />
                  </span>
                  <h4 style={{ marginLeft: "10px", color: "#fff" }}>
                    +94 779 744 881
                  </h4>
                </div>
                <Link to="/Products">
                  <button
                    style={{
                      padding: "10px",
                      backgroundColor: "#F06A49",
                      color: "#fff",
                      borderRadius: "45px",
                      border: "none",
                      padding: "17px 23px",
                      fontSize: "1.3vmax",
                      margin: "10px 0px 7px 75px",
                      boxShadow:
                        "rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0",
                      width: "fit-content",
                      minWidth: "150px",
                    }}
                  >
                    Shop now <img src={arrow} alt="Arrow" />
                  </button>
                </Link>
              </div>
            </div>

            {/* blog */}

            {/* <div className="mainBlog">
              <Grid container spacing={2} columns={16}>
                <Grid xs={8}>
                  <div>
                    <img
                      src={blog}
                      style={{
                        width: "950px",
                        height: "450px",
                        marginLeft: "10%",
                        marginBottom: "5%",
                      }}
                    />
                  </div>
                </Grid>
                <Grid xs={4}>
                  <div className="BlogDiv">
                    <h3>Tea Story</h3>
                    <h4>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum, at.
                    </h4>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Qui, non accusantium veritatis consectetur aperiam libero
                      odio fugit exercitationem suscipit quibusdam?
                    </p>
                    <button>Read More</button>
                  </div>
                </Grid>
              </Grid>
            </div> */}
            {/* team */}

            {/* <div className="team">
              <div className="container3" style={{display:"flex",marginLeft:"50px"}}>
                <div className="content3">
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <div style={{display:"flex"}}>
                        <img src={bg5} style={{width:"150px",height:"150px"}}/>
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      <div style={{display:"flex"}}>
                      <img src={bg6} style={{width:"150px",height:"150px"}}/>
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      <div style={{display:"flex"}}>
                      <img src={bg7} style={{width:"150px",height:"150px"}}/>
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="flap3"></div>
              </div>
            </div> */}
            <Footer/>
          </div>
          <BottomTab/>
        </>
      )}
    </>
  );
};

export default Home;