import React from "react"
import "./tabs.css"
import { Slide } from "react-awesome-reveal"
import NFT17 from "../assets/nft17.png"
import NFT22 from "../assets/nft22.png"
import NFT31 from "../assets/nft31.png"
import NFT32  from "../assets/nft92.png"
import { Container,Row,Col } from "react-bootstrap"
function Tabs(){
  return(
    
  < div class="latest">
  <noscript>Jai Shri Ram NFT, Jaishriram NFT,jaishriram,Ram mandir, Ram bhagwan NFT</noscript>
  
  <h1 class="addition">LATEST ADDITIONS</h1>
  
  <Container fluid >

  <Slide direction="right">
    <Row xs={1} md={2} lg={4}>
  <Col>
    <span class="nftcard">
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
  </Col>
  <Col>
    <span class="nftcard">
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
  </Col>
  <Col>
    <span class="nftcard">
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
  </Col>
  <Col>
    <span class="nftcard">
      <img src={NFT32} class="card__image" alt="" />
      <div class="card__overlay">
        <div  class="card__header">
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
  </Col> 
  </Row>
  </Slide>   
  
</Container>
</div>)};
export default Tabs