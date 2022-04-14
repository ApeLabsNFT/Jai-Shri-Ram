import React from "react";
import "./parrallax.css"
import RAMMODEL from "../assets/Asset 53.png"
function Parrallax(){
    return(<><div class="containerp">
    <div class="texts">
      <h1 class='rellaxh' data-rellax-speed='8'>Hum Sabme Base hai Shri Ram</h1>
      <p class='rellaxp' data-rellax-speed='5'>Rāma is a Vedic Sanskrit word with two contextual meanings. In one context as found in Atharva Veda, as stated by Monier Monier-Williams, means "dark, dark-colored, black" and is related to the term ratri which means night. In another context as found in other Vedic texts, the word means "pleasing, delightful, charming, beautiful, lovely".</p>
    </div>
    <div class="imgp">
      <img class='rellax' data-rellax-speed='-2' src={RAMMODEL} alt=""/>
    </div>
  </div>
  </>)
}
export default Parrallax;