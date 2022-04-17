import React, { useEffect, useState } from "react";
import "./parrallax.css"
import "./Navbar.js"
import RAMMODEL from "../assets/Asset 53.png"
import "./timeline.css"
import FOUR from "../assets/4.png"
import "./token.css"
import ELEVEN from "../assets/11.png"
import SEVENTEEN from "../assets/17.png"
import "./token.css"
const images = [FOUR, ELEVEN, SEVENTEEN];
  
function Parrallax(){
  const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
            }
        }, 5000)
        
        return () => clearInterval(intervalId);
    }, [currentIndex])
    return(<>
    <div class="containerp slide-in-blurred-top" >
      <div class="seta slide-in-top"></div>
    <div class="texts">
      <h1 class='rellaxh' data-rellax-speed='8'>Naman Kare Praja Sari<br></br>Ab hai Shri Ram ki baari</h1>
      <p class='rellaxp ' data-rellax-speed='5'>An embodiment of chivalry and virtue, Ramachandra or Lord Rama is the seventh incarnation of Vishnu- the protector of the universe.
</p>
    </div>
    <div class="slide">
    <div class="glitch2">
  <div class="glitch__item"><img style={{opacity:1}} src={images[currentIndex]} /></div>
  <div class="glitch__item">  <img style={{opacity:0.3}}src={images[currentIndex]} /></div>
  <div class="glitch__item">  <img  style={{opacity:0.5}} src={images[currentIndex]} /></div>
  <div class="glitch__item">  <img style={{opacity:0.8}} src={images[currentIndex]} /></div>
  <div class="glitch__item">  <img style={{opacity:0.9}} src={images[currentIndex]} /></div>
</div>
    </div>
  </div>
  </>)
}
export default Parrallax;