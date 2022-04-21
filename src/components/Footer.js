import React from "react";
import "./Footer.css"
import copyright from "../assets/copyright-16.png"
import swastik from "../assets/swastik.png"
import { Link } from "react-router-dom";
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
				<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100080178372435"><img src="https://img.icons8.com/fluency/48/000000/facebook-new.png"/></a>
				<a target="_blank" rel="noopener noreferrer" href="https://instagram.com/jaishriramnft?igshid=YmMyMTA2M2Y="><img src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/></a>
				<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/JaiShriRamNFT?t=qB-JZ5gYPqTcEldaopxG8g&s=09"><img src="https://img.icons8.com/fluency/48/000000/twitter-circled.png"/></a>
				<a  href="https://www.facebook.com/profile.php?id=100080178372435"><img src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png"/></a>
			</div>

			</div>
			</div>
			<div className="right-side">
				<div className="links">
				<a href="#"><Link to="/FAQ">FAQ</Link></a>
				<a href="#"><Link to="/MINT">MINT</Link></a>
				<a href="#"><Link to="/MINT"></Link>Terms & Conditions</a>
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

