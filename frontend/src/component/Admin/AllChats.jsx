import React from "react";
import SupportAdmin from "../../SupportAdmin";
import Sidebar from "./Sidebar";

const Allchats = () => {
 return (
  <div className="dashboard">  
  <Sidebar/>
  <div className="productListContainer">
  <SupportAdmin/>
  </div>
   </div>
   
 )
}

export default Allchats;