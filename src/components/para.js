
import React from "react";

import "./para.css";
import { useState,useEffect } from "react";
const para=["Lord Ram is one of the most widely worshiped deities in the world. Such is his omnipresence that we welcome our loved ones with “Ram Ram!” and invoke his name in our last goodbyes.","His tale is mentioned briefly in Mahabharata and at length in Ramayana. His adventures include the slaying of Ravana-the demon which symbolises the victory of good over evil.Lord Ram is considered the ideal son, ruler, brother and husband.","There is no other man like him.In fact, Lord Ram is the perfect personification of one’s pious duties or Dharma.","However, in today’s modern society, learning about our Vedic rules is considered being orthodox. However, our Vedic literature does not ask us to follow it to the T. In fact, Ram Rajya is what we call a truly democratic society where every citizen takes necessary steps to ensure that the world we live in is getting better everyday."
]

export default function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === para.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
            }
        }, 4000)
        
        return () => clearInterval(intervalId);
    }, [currentIndex])
  return (<><div className="paraco">
  <span className="paragraph" >{para[currentIndex]}</span>
  </div>
</>
  )
}