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
			<div className="Heading">About Us</div>
			<div className="FooterLink" href="#">Aim</div>
			<div className="FooterLink" href="#">Vision</div>
			<div className="FooterLink" href="#">Testimonials</div>
		</div>
		<div className="Column">
			<div className="Heading">Services</div>
			<div className="FooterLink" href="#">Coding</div>
			
		</div>
		<div className="Column">
			<div className="Heading">Contact Us</div>
			<div className="FooterLink" href="#">Email</div>
      <div className="FooterLink" href="#">Contact No.</div>
      <div className="FooterLink" href="#">Whatsapp</div>
		</div>
    <div className="Column">
			<div className="Heading">Social Media</div>
			<div className="FooterLink" href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</div>
			<div className="FooterLink" href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</div>
			<div className="FooterLink" href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</div>
			<div className="FooterLink" href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</div>
		</div>
		</div>
	</div>
	</div>
);
};
export default Footer;
