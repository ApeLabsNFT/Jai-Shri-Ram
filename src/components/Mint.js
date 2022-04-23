import "./mint.css"
import NFT11 from"../assets/32.png"

import Connect from "../connect";
function Mint(){
    return(<>
        
        <div class="mintco">
        <h1  className="mintcon">"  MINT  "</h1>     
        <div class="fullco">
        <img class="mintim" src={NFT11} alt="jaishriram"/>
            <div class="mintimage">
                
            <Connect/>


            </div>
            <img class="mintim2" src={NFT11}  alt="jaishriram"/>
            </div>
            
        </div>
</>
    )
}
export default Mint;