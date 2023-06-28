import React from "react";
import "./Cardlist.css"
import img from "../../Assets/img1.jpeg"
import  img1 from"../../Assets/img2.jpeg"
import img2 from "../../Assets/img3.jpeg"
import img3 from "../../Assets/325508.jpg"
import bg8 from "../../Assets/tea-64.png"
import '@fontsource/montserrat'
import { Typography } from "@material-ui/core";


const Cardlist = () => {
    return(
       <div>
        <Typography to={Typography}>

        <div id="header" style={{borderBottom: "1px solid rgba(21, 21, 21, 0.5)", width:" 20vmax", padding: "1vmax",
  fontSize:" 1.4vmax",
  margin:" 0.5vmax auto"}}>
    <div>
    <img src={bg8} className="productimg" style={{marginLeft:"43%"}}/>
      </div>
<h2 style={{color:"#2A4E45"}}>Flavoured Tea</h2>
<p></p>
  </div>
<div class="container">
<div class="card">
  <div class="card-image">
    <img src={img}/>
  </div>
  <div class="card-text">
    <p class="card-meal-type"></p>
    <h4 class="card-title">Ginger Tea</h4>
    <p class="card-body">Ginger tea is a flavorful and aromatic beverage made by infusing hot water with ginger root.</p>
  </div>
  <div class="card-price"></div>
</div>
  <div class="card">
  <div class="card-image">
    <img src={img1}/>
  </div>
  <div class="card-text">
    <p class="card-meal-type"></p>
    <h2 class="card-title">Lemon Tea</h2>
    <p class="card-body">ALemon tea is a refreshing and zesty beverage made by steeping tea leaves in hot water and adding a squeeze of fresh lemon juice.</p>
  </div>
  <div class="card-price"></div>
</div>
  <div class="card">
  <div class="card-image">
    <img src={img2}/>
  </div>
  <div class="card-text">
    <p class="card-meal-type"></p>
    <h2 class="card-title">Mint Tea</h2>
    <p class="card-body">The natural menthol present in mint leaves provides a calming effect on the senses, making it a popular choice for relaxation and digestion.</p>
  </div>
  <div class="card-price"></div>
</div>
  <div class="card">
  <div class="card-image">
    <img src={img3}/>
  </div>
  <div class="card-text">
    <p class="card-meal-type"></p>
    <h2 class="card-title">Jasmine Tea</h2>
    <p class="card-body">Jasmine tea is an exquisite and fragrant brew crafted by combining green or white tea leaves with delicate jasmine blossoms.</p>
  </div>
  <div class="card-price"></div>
</div>

</div>
</Typography>
       </div>
    )
}

export default Cardlist;