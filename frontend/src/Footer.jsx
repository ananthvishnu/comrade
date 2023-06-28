import React from "react";
// import { Link } from "react-router-dom";
import logo from "./Assets/Black Pearl Logo/10.png"
import "./footer.css"
import SupportEngine from "./SupportEngine";

const Footer = () => {
  return (

    
  
<footer className="footer-distributed">
<div>
<SupportEngine/>
</div>

			<div className="footer-left">

				<div><img src={logo} alt=""  style={{width:"180px",height:"180px",marginLeft:"22%",marginTop:"-5%",marginBottom:"-5%"}}/></div>

				<p className="footer-links">
					<a href="#" className="link">Home</a>
					
					<a href="#">Blog</a>
				
					<a href="#">About</a>
					
					<a href="#">Contact</a>
				</p>

				
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+94 0779 744 881</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:misterpearl@gmail.com" style={{color:"#2A4E45"}}>comrade125@gmail.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the comrade</span>
					The tea company specializes in sourcing and blending premium loose-leaf teas from around the world.</p>

				<div className="footer-icons">

					<a href="#"><i className="fab fa-facebook-f"/></a>
					<a href="#"><i className="fab fa-instagram"></i></a>
					<a href="#"><i className="fab fa-tiktok"></i></a>
					<a href="#"><i className="fab fa-youtube"></i></a>

				</div>
			</div>
<div className="bottom-details">
       <div className="bottom_text">
         <span className="copyright_text">Copyright © May 2023 <a href="/" style={{color:"#2A4E45"}}>Comrade.</a>All rights reserved</span>
         <span className="policy_terms">
           <a href="/" style={{color:"#2A4E45"}}>Privacy policy  </a>
           <a href="/" style={{color:"#2A4E45"}}>Terms & condition</a>
         </span>
       </div>
     
     </div>
    

		</footer>
  
  )
}
   

export default Footer;
