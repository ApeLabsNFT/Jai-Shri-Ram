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
    return(<><div class="containerp slide-in-blurred-top" >
      <div class="seta slide-in-top"></div>
    <div class="texts">
      <h1 class='rellaxh' data-rellax-speed='8'>Naman Kare Praja Sari<br></br>Ab hai Shri Ram ki baari</h1>
      <p class='rellaxp ' data-rellax-speed='5'>An embodiment of chivalry and virtue, Ramachandra or Lord Rama is the seventh incarnation of Vishnu- the protector of the universe.
<br></br><br></br>Lord Ram is one of the most widely worshiped deities in the world. Such is his omnipresence that we welcome our loved ones with “Ram Ram!” and invoke his name in our last goodbyes.
<br></br><br></br>His tale is mentioned briefly in Mahabharata and at length in Ramayana. His adventures include the slaying of Ravana-the demon which symbolises the victory of good over evil.  <br></br><br></br>
Lord Ram is considered the ideal son, ruler, brother and husband.
There is no other man like him.
In fact, Lord Ram is the perfect personification of one’s pious duties or Dharma.<br></br><br></br>

However, in today’s modern society, learning about our Vedic rules is considered being orthodox. However, our Vedic literature does not ask us to follow it to the T. 
In fact, Ram Rajya is what we call a truly democratic society where every citizen takes necessary steps to ensure that the world we live in is getting better everyday.

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