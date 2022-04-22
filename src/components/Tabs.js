import React from "react"
import "./tabs.css"

import NFT17 from "../assets/nft17.png"
import NFT22 from "../assets/nft22.png"
import NFT31 from "../assets/nft31.png"
import NFT32  from "../assets/nft32.png"
function Tabs(){
  return(<>
  <noscript>Jai Shri Ram NFT, Jaishriram NFT,jaishriram,Ram mandir, Ram bhagwan NFT</noscript>
  
  <h1 class="addition">LATEST ADDITIONS</h1>
  <ul class="cards">
  
  <li>
    <span class="card">
      <img src={NFT17} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
         
          <div class="card__header-text">
            <h3 class="card__title">Shri Ram Avatar #17</h3>            
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">Attributes:<br></br> <span class="trait">BACKGROUND : Bhagwa,
        <br></br>BODY: Ayodhyawas,<br></br>
        JEWELLERY: Manohara,<br></br>
        VASTRA: Attire8,<br></br>
        BOWS: Paulastya,<br></br>
        ARROWS: KissOfJolt,<br></br>
        COMPILER: Rachayata Technologies<br></br>
        </span></p>
      </div>
    </span>      
  </li>
  <li>
    <span class="card">
      <img src={NFT22} class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <div class="card__header-text">
            <h3 class="card__title">Shri Ram Avatar #22</h3>
            <span class="card__status">3 hours ago</span>
          </div>
        </div>
        <p class="card__description">Attributes:<br></br> <span class="trait">BACKGROUND : Holi,
        <br></br>BODY: Bharmhawas,<br></br>
        JEWELLERY: Manohara,<br></br>
        VASTRA: RamVastraVanwas,<br></br>
        BOWS: WOOD,<br></br>
        ARROWS: KissOfJolt,<br></br>
        COMPILER: Rachayata Technologies<br></br>
        </span></p>
      </div>
    </span>
  </li>
  <li>
    <span class="card">
      <img src={NFT31} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
         
          <div class="card__header-text">
            <h3 class="card__title">Shri Ram Avatar #31</h3>
            
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">Attributes:<br></br> <span class="trait">BACKGROUND : Dusk,
        <br></br>BODY: Ayodhyawas,<br></br>
        JEWELLERY: Deluxe,<br></br>
        VASTRA: RamVastraVanwas,<br></br>
        BOWS: Vayavya,<br></br>
        ARROWS: SQUIGGLY,<br></br>
        COMPILER:Rachayata Technologies<br></br>
        </span></p>
      </div>
    </span>
  </li>
  <li>
    <span class="card">
      <img src={NFT32} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          
          <div class="card__header-text">
            <h3 class="card__title">Shri Ram Avatar #32</h3>
            <span class="card__status">3 hours ago</span>
          </div>          
        </div>
        <p class="card__description">Attributes:<br></br> <span class="trait">BACKGROUND : wala,
        <br></br>BODY: Yudhawas,<br></br>
        JEWELLERY: Manohara,<br></br>
        VASTRA: Attire7,<br></br>
        BOWS: GOLDEN,<br></br>
        ARROWS: EternalFlame,<br></br>
        COMPILER: Rachayata Technologies<br></br>
        </span></p>
      </div>
    </span>
  </li>    
</ul>
</>)};
export default Tabs