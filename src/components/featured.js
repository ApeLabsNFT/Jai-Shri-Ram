import React from "react";
import NFT93 from "../assets/93.png"
import NFT296 from "../assets/296.png"
import NFT342 from "../assets/342.png"
import MID from "../assets/mid.png"
import SAGA from "../assets/saga.png"
import "./featured.css"
function Featured(){

    return(

        <div class="feat">
            <h1 class="addition">FEATURED</h1>
            <div class="mid-day">
            <a  target="_blank" rel="noopener noreferrer" href="https://www.mid-day.com/brand-media/article/nfts-in-india-will-now-represent-jai-shri-ram-23223399">   <img class="news" src={MID}/></a>
                <a  target="_blank" rel="noopener noreferrer" href="https://theindiasaga.com/saga-corner/lifetsyle/going-digital-with-nft-of-the-lord-ram/"> <img class="news" src={SAGA} /></a>
            </div>

        </div>
    )
    }
export default Featured
