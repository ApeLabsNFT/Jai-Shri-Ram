import React from "react";
import MID from "../assets/mid.png"
import SAGA from "../assets/saga.png"
import "./featured.css"
function Featured(){

    return(

        <div class="feat">
            <h1 class="featured">Featured</h1>
            <hr style={{    
                verticalAlign: 'top',
                            marginBottom:"2%",
                            marginLeft:"15%",
                            width:"80%",
                            opacity:1,
                            backgroundColor:"white",
                            height:"4px",
                            verticalAlign:"top"
                        }}></hr>
            <div class="mid-day">
            <a  target="_blank" rel="noopener noreferrer" href="https://www.mid-day.com/brand-media/article/nfts-in-india-will-now-represent-jai-shri-ram-23223399">   <img class="news" src={MID} alt="jaishriram mid-day article"/></a>
                <a  target="_blank" rel="noopener noreferrer" href="https://theindiasaga.com/saga-corner/lifetsyle/going-digital-with-nft-of-the-lord-ram/"> <img class="news" src={SAGA} alt="jaishriram theindiansaga article"/></a>
            </div>

        </div>
    )
    }
export default Featured
