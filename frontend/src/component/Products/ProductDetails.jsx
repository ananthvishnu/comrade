import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../../actions/ProductActions";
import Footer from "../../Footer";
import MetaData from "../../more/Metadata";
import Header from "../Home/Header";
import "./Productdetails.css";
import { Rating } from "@material-ui/lab";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addItemsToCart } from "../../actions/CartAction";
import { addFavouriteItemsToCart } from "../../actions/FavouriteAction";
import ReviewCard from "./ReviewCard.jsx";
import { NEW_REVIEW_RESET } from "../../constans/ProductConstans";
import BottomTab from "../../more/BottomTab";
import Loading from "../../more/Loader";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// import { Link } from "react-router-dom";
// import Cart from "../cart/Cart";
// import Modal from "../cart/Cartmodel";

const ProductDetails = ({ match, history }) => {
  const [openModal, setOpenModal] = useState(false);
  // popup model//

  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const { isAuthenticated } = useSelector((state) => state.user);

  const reviewSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", match.params.id);

    {
      isAuthenticated !== true ? history.push(`/login?redirect=/`) : <></>;
    }

    dispatch(newReview(myForm));

    {
      comment.length === 0
        ? toast.error("Please fill the comment box")
        : toast.success("Review done successfully reload for watch it");
    }
    dispatch({ type: NEW_REVIEW_RESET });
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert]);

  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const [benefitsExpanded, setBenefitsExpanded] = useState(false);

  // Increase quantity
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return toast.error("Product stock limited");
    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    if (product.Stock > 0) {
      dispatch(addItemsToCart(match.params.id, quantity));
      toast.success("Product Added to cart");
    } else {
      toast.error("Product stock limited");
    }
  };

  const addToFavouriteHandler = () => {
    dispatch(addFavouriteItemsToCart(match.params.id, quantity));
    toast.success("Product Added to Favourites");
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="bgimageproductdetails">
          <MetaData title={`${product.name}`} />
          <Header />
          <div className="ProductDetails">
            <div className="first__varse">
              <div
                className="wishlist"
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  padding: "10px 5px",
                  marginRight: "2%",
                  color: "#ffff",
                  marginTop: "-10%",
                  marginLeft: " 8%",
                }}
                onClick={addToFavouriteHandler}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                </svg>
                <span
                  className="cartBtn"
                  style={{ opacity: 0.7, padding: "0px 5px" }}
                >
                  {" "}
                </span>
              </div>
              <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>
            <div className="varse__2">
              <div className="proboxbg" style={{ marginLeft: "24%",padding:"10%" }}>
                <div className="detailsBlock-1">
                  <h1 style={{ color: "#025250", marginLeft: "1%" }}>
                    {product.name}
                  </h1>{" "}
                  <br />
                </div>
                <div className="detailsBlock-2">
                  {""}
                  <br />
                  <Rating {...options} />
                  <span>({product.numOfReviews} Reviews)</span>
                </div>
                <div className="detailsBlock">
                  <div
                    style={{
                      display: "flex",
                      marginTop: "3px",
                    }}
                  >
                    <h1 className="discountPrice">
                      {product.offerPrice > 0 ? `$${product.offerPrice}` : ""}
                    </h1>
                    <h1>{`$${product.price}`}</h1> <br />
                  </div>
                  <div className="detailsBlock-3-1">
                    <span className="quantity" style={{ marginLeft: "1%" }}>
                      Quantity
                    </span>
                    <div className="detailsBlock-3-1-1">
                      <button onClick={decreaseQuantity}>-</button>
                      <input type="number" readOnly value={quantity} />
                      <button onClick={increaseQuantity}>+</button>
                    </div>{" "}
                  </div>
                  <p
                    className="stock__meta"
                    style={{ paddingBottom: ".5vmax" }}
                  >
                    <b
                      className={product.Stock < 1 ? "redColor" : "greenColor"}
                    >
                      {product.Stock < 1 ? "OutOfStock" : "InStock"}
                    </b>
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottum: "1%",
                      marginTop: "1.5%",
                    }}
                  >
                    <div
                      className="pointer flex"
                      style={{
                        padding: "8px 15px 8px 15px",
                        alignItems: "center",
                        backgroundColor: "#2A4E45",
                        color: "#fff",
                        fontSize: "1vmax",
                        marginRight: "5px",
                        borderRadius: "25px",
                      }}
                      onClick={addToCartHandler}
                    >
                      <AddShoppingCartOutlinedIcon />
                      <button
                        className="cartBtn"
                        style={{
                          padding: "2px 10px 2px 10px",
                          border: "none",
                          cursor: "pointer",
                          background: "none",
                          color: "#fff",
                          fontSize: "1vmax",
                          borderRadius: "5px",
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                    <Link to="/cart">
                      <button
                        style={{
                          display: "flex",
                          padding: "10px 18px 10px 18px",
                          backgroundColor: "#F06A49",
                          color: "#ffff",
                          border: "none",
                          borderRadius: "25px",
                          fontSize: "1vmax",
                          marginRight: "15px",
                        }}
                      >
                        {" "}
                        <ShoppingBasketOutlinedIcon
                          style={{ marginTop: "-4px" }}
                        />
                        Buy Now
                      </button>
                    </Link>
                    
                  </div>
                  <br />
                </div>
                <div
                  className="Description"
                  style={{
                    marginBottom: "20px",
                    width: "250px",
                    background: "#F0F8FF",
                  }}
                >
                  <Accordion
                    expanded={descriptionExpanded}
                    onChange={() =>
                      setDescriptionExpanded(!descriptionExpanded)
                    }
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <span>Description:</span>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p>{product.description}</p>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div
                  className="Benifites"
                  style={{
                    marginBottom: "20px",
                    width: "250px",
                    background: "#F0F8FF",
                  }}
                >
                  <Accordion
                    expanded={benefitsExpanded}
                    onChange={() => setBenefitsExpanded(!benefitsExpanded)}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <span>Benefits:</span>
                    </AccordionSummary>
                    <br />
                    <AccordionDetails>
                      <p>{product.benifites}</p>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
       



           {/* <div>
            <div className="reviews__heading">
              <h2
                style={{
                  padding: "5px 30px",
                  opacity: 1,
                  borderBottom: "1px solid #999",
                  fontFamily: "montserrat",
                }}
              >
                Reviews
              </h2>
            </div>
            <div>
              <div  style={{ marginLeft: "30%", marginTop: "5%" }}>
                <div style={{}}>
                  {product.reviews && product.reviews[0] ? (
                    <div className="review__option">
                      {product.reviews &&
                        product.reviews.map((review) => (
                          <ReviewCard review={review} />
                        ))}
                    </div>
                  ) : (
                    <p
                      className="noReviews"
                      style={{
                        fontFamily: "montserrat",
                      }}
                    >
                      No Reviews Yet *
                    </p>
                  )}
                </div>
              </div>
          
              <div>
                <div style={{ marginLeft: "40%", background: "#ffff" }}>
                  <div
                    style={{
                      padding: "0px ",
                     
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.2vmax",
                        fontWeight: "500",
                        lineHeight: 1,
                        letterSpacing: "-.0125em",
                        color: "#222",
                        fontFamily: "montserrat",
                      }}
                    >
                      Add a Review
                    </span>
                    <div
                      style={{
                        margin: "1vmax 0",
                       
                      }}
                    >
                      <div>
                        <span
                          style={{
                            color: "#222",
                            fontFamily: "montserrat",
                            padding: "1vmax 0",
                          }}
                        >
                          Your Rating*
                        </span>
                        <Rating
                          onChange={(e) => setRating(e.target.value)}
                          value={rating}
                          size="large"
                        />
                        <div
                          style={{
                          
                            flexDirection: "column",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <textarea
                    cols="30"
                    rows="6"
                    placeholder="Comment *"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    style={{
                      maxWidth: "100%",
                      color: "#111",
                      borderColor: "#e1e1e1",
                      background: "#fff",
                      borderRadius: "0.3rem",
                      outline: "none",
                      padding: "5px",
                      fontSize: "1.2vmax",
                      lineHeight: "1.5",
                      resize: "none",
                      display: "block",
                    }}
                  ></textarea>
                  <button
                    type="submit"
                    style={{
                      width: "12vmax",
                      margin: "1vmax 0px",
                      fontFamily: "montserrat",
                      padding: "10px 15px",
                      background: "#F06A49",
                      border: "none",
                      cursor: "pointer",
                      color: "#fff",
                    }}
                    onClick={reviewSubmitHandler}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div> 
                  </div> */}
<div>
  <div className="reviews__heading">
    <h2
      style={{
        padding: "5px 30px",
        opacity: 1,
        borderBottom: "1px solid #999",
        fontFamily: "montserrat",
      }}
    >
      Reviews
    </h2>
  </div>
  <div style={{ display: "flex", flexDirection: "column" }}>
    <div style={{ marginLeft:"10%",marginTop:"2%" }}>
      <div style={{marginRight:"20%"}}>
        {product.reviews && product.reviews[0] ? (
          <div className="review__option">
            {product.reviews &&
              product.reviews.map((review) => (
                <ReviewCard review={review} />
              ))}
          </div>
        ) : (
          <p
            className="noReviews"
            style={{
              fontFamily: "montserrat",
              textAlign: "center",
            }}
          >
            No Reviews Yet *
          </p>
        )}
      </div>
    </div>

    <div style={{ marginLeft:"50%", background: "#ffff",backgroundSize:"30%",width:"30%",padding:"10px",marginTop:"" }}>
      <div
        style={{
          padding: "0px",
          maxWidth: "80%",
          margin: "0 auto",
        }}
      >
        <span
          style={{
            fontSize: "1.2vmax",
            fontWeight: "500",
            lineHeight: 1,
            letterSpacing: "-.0125em",
            color: "#222",
            fontFamily: "montserrat",
          }}
        >
          Add a Review
        </span>
        <div
          style={{
            margin: "1vmax 0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div>
            <span
              style={{
                color: "#222",
                fontFamily: "montserrat",
                padding: "1vmax 0",
              }}
            >
              Your Rating*
            </span>
            <Rating
              onChange={(e) => setRating(e.target.value)}
              value={rating}
              size="large"
            />
            <div
              style={{
                flexDirection: "column",
              }}
            ></div>
          </div>
        </div>
      </div>
      <textarea
        cols="30"
        rows="6"
        placeholder="Comment *"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={{
          maxWidth: "100%",
          color: "#111",
          borderColor: "#e1e1e1",
          background: "#fff",
          borderRadius: "0.3rem",
          outline: "none",
          padding: "5px",
          fontSize: "1.2vmax",
          lineHeight: "1.5",
          resize: "none",
          display: "block",
          margin: "0 auto",
        }}
      ></textarea>
      <button
        type="submit"
        style={{
          width: "12vmax",
          marginLeft:"49%",
          marginTop:"2%",
          fontFamily: "montserrat",
          padding: "10px 15px",
          background: "#F06A49",
          border: "none",
          cursor: "pointer",
          color: "#fff",
          display: "block",
        }}
        onClick={reviewSubmitHandler}
      >
        Submit
      </button>
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
          <Footer />
          <BottomTab />
        </div>
      )}
    </>
  );
};

export default ProductDetails;
