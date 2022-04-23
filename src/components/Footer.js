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
			<h2 className="hero " data-text="JAI SHRI RAM"><span>JAI SHRI RAM</span></h2>
			
			<img className='swastik-img' alt="swastik logo" src={swastik} width="25px" height = "25px" style={{paddingLeft:"2px"}}/>
				<span class="logo_para">Bridging the gap between Vedic pedagogy & technological prowess of modern India.</span>

			</div>
			
			<div class="icons">
			<span className="Followus">Follow us on :</span>
			<div className="media-icons">
				<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100080178372435"><img alt="JaiShriRam Facebook" src="https://img.icons8.com/fluency/48/000000/facebook-new.png"/></a>
				<a target="_blank" rel="noopener noreferrer" href="https://instagram.com/jaishriramnft?igshid=YmMyMTA2M2Y="><img alt="JaiShriRam Instagram" src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/></a>
				<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/JaiShriRamNFT?t=qB-JZ5gYPqTcEldaopxG8g&s=09"><img alt="JaiShriRam Twitter" src="https://img.icons8.com/fluency/48/000000/twitter-circled.png"/></a>
				<a  href="https://www.facebook.com/profile.php?id=100080178372435"><img src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png" alt="JaiShriRam Linkedin"/></a>
			</div>

			</div>
			</div>
			<div className="right-side">
				<div className="links">
				<Link to="/FAQ">FAQ</Link>
				<Link to="/MINT">MINT</Link>
				<Link to="/MINT">Terms & Conditions</Link>
				<Link to="/Contact">Contact us</Link>
			</div>

			<div class="devel"><span>
			<img alt="JaiShriRam copyright" src={copyright}></img>
				2022 Rachyata Technologies	
				</span>
			</div>
			</div>
			
			
	
    </footer>
);
};
export default Footer;

