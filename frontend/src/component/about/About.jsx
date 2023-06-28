import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../Footer";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/Metadata";
import "./About.css";
import BottomTab from "../../more/BottomTab";
import logo from "../../Assets/Tea.jpeg";

const About = () => {
  const { loading } = useSelector((state) => state.profile);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="About" />
          <div>
            <Header />
            <div
              style={{
                width: "90%",
                margin: "0px auto",
              }}
            >
              <div className="about__page">
                {/* 1st verse */}
                <div className="row flex">
                  <div className="col__2">
                    <img src={logo} />
                  </div>
                  <div className="col__2">
                    <div className="meta">
                      <span
                        style={{
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "1.2",
                        }}
                      >
                        Welcome to Comrade
                      </span>
                      <p>
                        To those who buy more tea in a month,If the customer
                        sends a request message from the online page to share
                        their problems with the owner, they can chat with the
                        owner, bulk buyers of tea will get a bonus for
                        purchasing more than 2 kg. Selling a quality tea powder
                        at an affordable price to the masses. In other words, 75%
                        of people in Sri Lanka are consuming substandard tea
                        powder due to economic problems.More than that, there
                        are more people who drink tea more than once a day. So a
                        family needs at least 500g of tea powder per month.
                      </p>
                      <p>
                        In view of this, the demand for tea powder is high.So
                        Comrade aim is to sell a quality tea powder at an
                        affordable price.Black pearl use a web application as a
                        business platform for this.One is for the customer's use
                        and the other is for our use of the customer's data The
                        customer's app has a home page that contains all the
                        details about the tea powder.After selecting the price,
                        enter the details of the customer. After that, you can
                        make the online payment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2nd verse */}
                <div className="second">
                  <div className="heading">
                    <h2>What We Provide...</h2>
                  </div>
                  <div className="row flex">
                    <div className="col__3">
                      <div
                        style={{
                          padding: "10px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" 
                          style={{
                            color:"#F06A49",
                          }}/>
                        </div>
                        <span>Best Prices & Offers</span>
                        <p>
                        Discover the best prices and irresistible offers on a wide range of products.
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div
                        style={{
                          padding: "10px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg" />
                        </div>
                        <span>Best For Trust & Quality</span>
                        <p>
                        Experience the assurance of trust and uncompromising 
                        quality with our exceptional products.
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg" />
                        </div>
                        <span>Fast Delivery System</span>
                        <p>
                        Enjoy our efficient and reliable fast delivery system, 
                        ensuring your orders reach you promptly.
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg" />
                        </div>
                        <span>Easy Returns Service</span>
                        <p>
                        Experience hassle-free returns with our easy and convenient returns service.
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg" />
                        </div>
                        <span>100% satisfication</span>
                        <p>
                        Guaranteed 100% satisfaction, ensuring your complete happiness with every purchase.
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg" />
                        </div>
                        <span>Great Daily Deal</span>
                        <p>
                        Discover amazing daily deals that offer great savings and value every day.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <Footer />
          </div>
          <BottomTab />
        </>
      )}
    </>
  );
};

export default About;
