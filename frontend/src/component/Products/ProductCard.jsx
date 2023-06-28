import React from "react";
// import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <>
      {/* <Link classNameName="ProductCard" to={`/product/${product._id}`}>
            <img
            style={{
              maxWidth:"1000px",
              width:"250px",
              height:"250px",
              alignContent:"center",
              margin:"auto",
              padding:"auto",
              
            }}
              src={product.images[0].url}
              alt={product.name}
              classNameName="ProductImg"
            />
            <p classNameName="productName"
            style={{
              marginLeft:"60px"
            }}>{product.name}</p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div classNameName="offerPriceBox">
                <h1
                  classNameName="discountPrice"
                  style={{
                    paddingLeft: "2.5vmax",
                    fontSize: ".9vmax",
                    paddingBottom: "0",
                    marginright:"60px"
                  }}
                >
                  {product.offerPrice > 0 ? `$${product.offerPrice}` : ""}
                </h1>
                <span classNameName="p__Price"
                style={{
                  marginLeft:"90px"
                }}>{`$${product.price}`}
                
                </span>
            <div style={{
              marginLeft:"35px"
            }}>
            <Rating {...options} />
              <span>({product.numOfReviews} Reviews)</span>
            </div>
    
                <button
                    onClick={ProductCard}
                    style={
                      {
                      marginTop:"15px",
                      marginLeft:"60px",
                      marginBottom:"10px",
                      color:"white",
                      fontFamily:"montserrat",
                      fontSize:"17px",
                      backgroundColor:"#FBA04B",
                      padding:"10px",
                      border:"none",
                      borderRadius:"10px"                
                      }
                    }
                  >
                   View Product
                  </button>
              </div>
            </div>
          </Link> */}
      <div className="container1">
        <div className="card1">
          <div className="imgBx1">
            <img src={product.images[0].url} alt={product.name} />
          </div>

          <div className="contentBx1">
            <p >{product.name}</p>

            <div className="size1">
              <div className="offerPriceBox">
                <div>
                  <h1 className="discountPrice" style={{marginTop:"10%",marginBottom:"-5%"}}>
                    {product.offerPrice > 0 ? `$${product.offerPrice}` : ""}
                  </h1>
                  <span
                    style={{ marginLeft: "44%",fontSize:"30px"}}
                  >{`$${product.price}`}</span>
                </div>
                
              </div>
            </div>

            <div>
              
              <button
           onClick={() => {
            window.location.href = `/product/${product._id}`;
          }}
                style={{
                  marginTop: "22px",
                  color: "white",
                  fontFamily: "montserrat",
                  fontSize: "17px",
                  backgroundColor: "#F06A49",
                  padding: "10px 15px 10px 15px",
                  border: "none",
                  borderRadius: "20px",
                  boxShadow:"rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0"
                }}
              >
                View Product
              </button>
            
            </div>
            <div style={{ display: "flex",marginTop:"5%",marginLeft:"34%",fontSize:"2vmax"}}>
                  <Rating {...options}/>
                  {/* <span
                    style={{
                      display: "flex",
                      marginLeft: "45%",
                      marginTop:"-1px",
                      paddingLeft: "2%",
                      fontSize:"15px"
                    }}
                  >
                    ({product.numOfReviews})
                  </span> */}
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
