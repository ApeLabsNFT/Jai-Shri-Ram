import React from "react"
import "./tabs.css"
import NFT9 from "../assets/9.png"
import NFT15 from "../assets/15.png"
import NFT18 from "../assets/18.png"
import NFT27 from "../assets/27.png"
function Tabs(){
  return(<>
  <h1 class="addition">LATEST ADDITIONS</h1>
  <ul class="cards">
  <li>
    <span class="card">
      <img src={NFT27} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
         
          <div class="card__header-text">
            <h3 class="card__title">RAM JI</h3>            
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </span>      
  </li>
  <li>
    <span class="card">
      <img src={NFT15} class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <div class="card__header-text">
            <h3 class="card__title">RAM JI</h3>
            <span class="card__status">3 hours ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </span>
  </li>
  <li>
    <span class="card">
      <img src={NFT18} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
         
          <div class="card__header-text">
            <h3 class="card__title">RAM JI</h3>
            
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </span>
  </li>
  <li>
    <span class="card">
      <img src={NFT9} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          
          <div class="card__header-text">
            <h3 class="card__title">RAM JI</h3>
            <span class="card__status">3 hours ago</span>
          </div>          
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </span>
  </li>    
</ul>
</>)};
export default Tabs