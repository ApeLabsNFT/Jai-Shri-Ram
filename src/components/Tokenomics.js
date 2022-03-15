import React from "react";
import "./token.css"
import ram from "../assets/ram.png"
function Token(){
    return(<div class="tokenomics">
        <h1>TOKENOMICS</h1>
        <div class="animate">
            <div class="rotating">
        <img src={ram}/>
        </div></div>
        </div>
    )
}
export default Token;