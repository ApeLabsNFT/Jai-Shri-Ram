
import React from "react";

import "./para.css";
import { useState,useEffect } from "react";
import { getElementError } from "@testing-library/react";
const para=["Lord Ram is one of the most widely worshiped deities in the world. Such is his omnipresence that we welcome our loved ones with “Ram Ram!” and invoke his name in our last goodbyes.","His tale is mentioned briefly in Mahabharata and at length in Ramayana. His adventures include the slaying of Ravana-the demon which symbolises the victory of good over evil.Lord Ram is considered the ideal son, ruler, brother and husband.","There is no other man like him.In fact, Lord Ram is the perfect personification of one’s pious duties or Dharma.","However, in today’s modern society, learning about our Vedic rules is considered being orthodox. However, our Vedic literature does not ask us to follow it to the T. In fact, Ram Rajya is what we call a truly democratic society where every citizen takes necessary steps to ensure that the world we live in is getting better everyday."
]

export default function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  function Next(){
    if(currentIndex === para.length - 1) {
      setCurrentIndex(0);}
      else{
          setCurrentIndex(currentIndex + 1);

      }
  }
  function Previous(){
    if(currentIndex === 0) {
      setCurrentIndex(3);}
      else{
          setCurrentIndex(currentIndex + -1);

      }
  }
    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === para.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
          
            }
            document.getElementById("pa").classList.add("fade-in")
        }, 6000)
        
        return () => clearInterval(intervalId);
    }, [currentIndex])
  return (<><div className="paraco ">
   <div>
   <button  onClick={Previous} class="slideco"><img src="https://img.icons8.com/ios-filled/50/ffffff/circled-chevron-left.png"/></button>
    
    </div>
  <span id="pa" className="paragraph " >{para[currentIndex]}</span>
  <div className="next" onClick={Next}>
  <button class="slideco"><img class="slideco" src="https://img.icons8.com/ios-filled/50/ffffff/circled-chevron-right.png"/></button>
    </div>
  </div>
</>
  )
}
