
import React from "react";
import { useState,useEffect } from "react";
import FOUR from "../assets/4.png"
import "./token.css"
import ELEVEN from "../assets/11.png"
import SEVENTEEN from "../assets/17.png"
import "./token.css"
const images = [FOUR, ELEVEN, SEVENTEEN];
export default function SlideShow() {
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
  return (<div class="slide">
           <div class="glitch2">
  <div class="glitch__item"><img src={images[currentIndex]} /></div>
  <div class="glitch__item">  <img src={images[currentIndex]} /></div>
  <div class="glitch__item">  <img src={images[currentIndex]} /></div>
  <div class="glitch__item">  <img src={images[currentIndex]} /></div>
  <div class="glitch__item">  <img src={images[currentIndex]} /></div>
</div>
</div>
  )
}
