import React from "react";
import Cart from "./Cart";
import "../cart/Cartmodel.css";
import "react-toastify/dist/ReactToastify.css";

// import { ToastContainer, toast } from 'react-toastify';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        {/* <img src={nft} alt='/' />
          <div className='modalRight'>
            
            <div className='content'>
              <p>Do you want a</p>
              <h1>$20 CREDIT</h1>
              <p>for your first tade?</p>
            </div>
            
          {/* </div> */}

        <Cart/>
        <p className="closeBtn" onClick={onClose}>
          X
        </p>
      </div>
    </div>
  );
};

export default Modal;
