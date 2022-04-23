import React, { useState } from "react";
import "./mint.css"
import NFT11 from"../assets/32.png"
import Mintscreen from "./Mintscreen";
function Mint(){
    const [show]=useState(true)
    return(<>
        
        <div class="mintco">
        <h1  className="mintcon">"  MINT  "</h1>     
        <div class="fullco">
        <img class="mintim" src={NFT11}/>
            <div class="mintimage">
                
            <Mintscreen/>


            </div>
            <img class="mintim2" src={NFT11}/>
            </div>
            
        </div>
</>
    )
}
export default Mint;