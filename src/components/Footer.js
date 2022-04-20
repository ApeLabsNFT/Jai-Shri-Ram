import React from "react";
import "./Footer.css"
import copyright from "../assets/copyright-16.png"
import swastik from "../assets/swastik.png"
const Footer = () => {
return (
	<footer class="footer-section">
        <div class="footcontainer">
			<div class="logo-details">
			<h2 className="hero glitch layers" data-text="JAI SHRI RAM"><span>JAI SHRI RAM</span></h2>
			
			<img className='swastik-img' src={swastik} width="25px" height = "25px" alt="swastik" style={{paddingLeft:"2px"}}/>
				<span class="logo_para">Bridging the gap between Vedic pedagogy & technological prowess of modern India.</span>

			</div>
			
			<div class="icons">
			<span className="Followus">Follow us on :</span>
			<div className="media-icons">
				<a href="#"><img src="https://img.icons8.com/fluency/48/000000/facebook-new.png"/></a>
				<a href="#"><img src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/></a>
				<a href="#"><img src="https://img.icons8.com/fluency/48/000000/twitter-circled.png"/></a>
				<a href="#"><img src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png"/></a>
			</div>

			</div>
			</div>
			<div className="right-side">
				<div className="links">
				<a href="#">Terms & Conditions</a>
				<a href="#">Privacy Policy</a>
				<a href="#">Copyright clain</a>
				<a href="#">Contact us</a>
			</div>

			<div class="devel"><span>
			<img src={copyright}></img>
				2022 Rachyata Technologies	
				</span>
			</div>
			</div>
			
			
	
    </footer>
);
};
export default Footer;

