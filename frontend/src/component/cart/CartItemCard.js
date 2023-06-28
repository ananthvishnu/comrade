import React from 'react';
import { Link } from 'react-router-dom';
import "./CartItemCard.css";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const CartItemCard = ({item, deleteCartItems}) => {
    return (
        <div className='CartItemCard'>
            <img src={item.image} alt="ssa" />
            <div>
                <Link to={`/product/${item.product}`}>{item.name}</Link>
                <span>{`Price: $ ${item.price}`}</span> 
                <p onClick={() => deleteCartItems(item.product)}><DeleteOutlineOutlinedIcon/></p>
            </div>
        </div>
    ) 
}

export default CartItemCard
