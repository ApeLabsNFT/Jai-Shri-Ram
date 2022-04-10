import React from 'react';
import './cards.css';

function Cards() {
  return (
    <div class="row">
    <div class="column">
      <div class="card2">
        <h1>Total Supply</h1>
        <br></br>
      <p>1000</p>
      <br></br>
      </div>
    </div>
    <div class="column">
      <div class="card2"> 
      <h1>Holders</h1>
      <br></br>
      <p>$0.01</p>
      <br></br>
    </div>
    </div>
    <div class="column">

      <div class="card2">
      <h1 >Volume</h1>
      <br></br>
      <p>$0.01</p>
      <br></br>
      </div>
    </div>
    <div class="column">
      <div class="card2"> <h1>$COIN/USDC</h1>
      <br></br>
      <p>$0.01</p>
      <br></br>
      </div>
    </div>
  </div> 
  );
}

export default Cards;
