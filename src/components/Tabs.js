import React from "react"
import "./tabs.css"

import NFT93 from "../assets/93.png"
import NFT296 from "../assets/296.png"
import NFT342 from "../assets/342.png"
import NFT396 from "../assets/396.png"
function Tabs(){
  return(<>
  
  <h1 class="addition">LATEST ADDITIONS</h1>
  <ul class="cards">
  
  <li>
    <span class="card">
      <img src={NFT93} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
         
          <div class="card__header-text">
            <h3 class="card__title">Ram Avatar #15</h3>            
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">Attributes:<br></br> <span class="trait">BACKGROUND : SunriseYellow,
        <br></br>BODY: Yudhawas,<br></br>
        JEWELLERY: SadhuElite,<br></br>
        VASTRA: RamVastraVanwas,<br></br>
        BOWS: WOOD,<br></br>
        ARROWS: DSHAPED,<br></br>
        COMPILER: Ape Labs<br></br>
        </span></p>
      </div>
    </span>      
  </li>
  <li>
    <span class="card">
      <img src={NFT296} class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <div class="card__header-text">
            <h3 class="card__title">RAM AVATAR #27</h3>
            <span class="card__status">3 hours ago</span>
          </div>
        </div>
        <p class="card__description">Attributes:<br></br> <span class="trait">BACKGROUND : Purple,
        <br></br>BODY: Yudhawas,<br></br>
        JEWELLERY: SadhuElite,<br></br>
        VASTRA: Attire1,<br></br>
        BOWS: GOLDEN,<br></br>
        ARROWS: Interceptor,<br></br>
        COMPILER: Ape Labs<br></br>
        </span></p>
      </div>
    </span>
  </li>
  <li>
    <span class="card">
      <img src={NFT342} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
         
          <div class="card__header-text">
            <h3 class="card__title">RAM AVATAR #18</h3>
            
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">Attributes:<br></br> <span class="trait">BACKGROUND : MintyGreen,
        <br></br>BODY: Bharmhawas,<br></br>
        JEWELLERY: Manohara,<br></br>
        VASTRA: Attire8,<br></br>
        BOWS: WOOD,<br></br>
        ARROWS: KissOfJolt,<br></br>
        COMPILER: Ape Labs<br></br>
        </span></p>
      </div>
    </span>
  </li>
  <li>
    <span class="card">
      <img src={NFT396} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          
          <div class="card__header-text">
            <h3 class="card__title">RAM AVATAR #9</h3>
            <span class="card__status">3 hours ago</span>
          </div>          
        </div>
        <p class="card__description">Attributes:<br></br> <span class="trait">BACKGROUND : PastelOrange,
        <br></br>BODY: Bharmhawas,<br></br>
        JEWELLERY: SadhuElite,<br></br>
        VASTRA: Attire9,<br></br>
        BOWS: Gandiva,<br></br>
        ARROWS: KissOfJolt,<br></br>
        COMPILER: Ape Labs<br></br>
        </span></p>
      </div>
    </span>
  </li>    
</ul>
</>)};
export default Tabs