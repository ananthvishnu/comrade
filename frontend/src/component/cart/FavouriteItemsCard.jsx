import React,{useState,useEffect} from 'react';
import { Link} from 'react-router-dom';
import "./FavouriteItemsCard.css";
import { useSelector,useDispatch } from "react-redux";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const FavouriteItemsCard = ({item, deleteFavouriteItems}) => {
    const dispatch = useDispatch();
    const { product} = useSelector(
        (state) => state.productDetails
      );

    return (    
        <div className='FavouriteItemsCard'>
        <div>
        <img src={item.image} alt="ssa" />
       
        <Link to={`/product/${item.product}`} style={{
            fontSize:"300 0.9vmax",
            fontFamily:"montserrat",
        }}>{item.name}</Link>
         <p onClick={() => deleteFavouriteItems(item.product)}><DeleteOutlineIcon/></p>
        </div>

        <div>
            <span>{`$ ${item.price}`}</span> 
        </div>

        <div>
        <p style={{ paddingBottom: ".5vmax" }}>
              <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                {product.Stock < 1 ? "OutOfStock" : "InStock"}
              </b>
            </p>
        </div>
        
        <div>
          <Link to={`/product/${item.product}`}>
           <button className='favouritesButton' onClick={() => deleteFavouriteItems(item.product)}>Add To Cart</button>
           </Link>
        </div>
       
    </div>
   
    )
}

export default FavouriteItemsCard
