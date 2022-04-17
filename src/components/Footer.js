import React from "react";
import "./Footer.css"

const Footer = () => {
return (
	<div className="Box">
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
	</h1>
	<div className="Container">
		<div className="Row">

		<div className="Column">
			<div className="Heading">Services</div>
			<div className="FooterLink" href="#">Coding</div>
			
		</div>
	
    <div className="Column">
			<div className="Heading">Social Media</div>
			<div className="FooterLink"><a  target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"white"}} href="https://www.facebook.com/people/Jai-Shri-Ram-Nft/100080178372435/">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</a>
			</div>
			<div className="FooterLink"><a target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"white"}}href="https://www.instagram.com/jaishriramnft">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</a>
			</div>
			<div className="FooterLink"><a target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"white"}} href="https://twitter.com/JaiShriRamNFT">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</a>
			</div>
			<div className="FooterLink" ><a  target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"white"}} href="https://www.facebook.com/people/Jai-Shri-Ram-Nft/100080178372435/">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</a>
			</div>
		</div>
		</div>
	</div>
	</div>
);
};
export default Footer;
