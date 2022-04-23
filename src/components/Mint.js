import React, { useState } from "react";
import "./mint.css"
import Mintscreen from "./Mintscreen";
function Mint(){
    const [show]=useState(true)
    return(<>
        
        <div class="mintco">
        <h1  className="mintcon">"  MINT  "</h1>     
            <div class="mintimage">
            {show && <Mintscreen/>}

            </div>
            
        </div>
</>
    )
}
export default Mint;