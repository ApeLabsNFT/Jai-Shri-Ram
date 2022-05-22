
import "./parrallax.css"
import { Card } from "react-bootstrap";
  import nft22 from "../assets/nft32.webp"
  import solana from "../assets/solanaLogo.png"
  import { Link } from "react-router-dom";
  
function Parrallax(){
 return(
//     <noscript>Jai Shri Ram NFT, Jaishriram NFT,jaishriram,Ram mandir, Ram bhagwan NFT</noscript>
//     <div class="containerp " >
//       <div class="stuff ">
//     <div class="texts">
//       <h1 class='rellaxh' data-rellax-speed='8'>Jai Shri Ram</h1>
//       <p class='rellaxp ' data-rellax-speed='5'>An embodiment of chivalry and virtue,<br></br> Ramachandra or Lord Rama is the seventh<br></br>incarnation of Vishnu- the protector of the universe.
// </p>
//     </div>
   
//     </div>
//     <div class="heartbeat">
//     <Link to="/MINT"><button className="button-85">
 
//   <span class="butthead">Mint now</span>
//   <svg class="rocket" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
// </button></Link>
//   </div>

//   </div>
  
//   </>)
<div className="landing">
  <div className="texts">
  <h1 class='landhead'>Jai Shri Ram</h1>
  <p class='landp '>An embodiment of chivalry and virtue,<br></br> Ramachandra or Lord Rama is the seventh<br></br>incarnation of Vishnu- the protector of the universe.
</p>
  </div>
  <div className="landcard">
  <Card className="bootcard">
  <Card.Img variant="top" className="landimage" src={nft22}/>
  <Card.Body>
    <Card.Title className="landcardtext" 
    
    >
      Jai Shri Ram
      </Card.Title>
    <Card.Text >
      <p className="landtext"
        >by Rachayata Tech</p>
      <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}>
      <Link to="/HOME" className="landbut" >Mint Now</Link>
      </div>
      <span style={{
    backgroundColor:"transparent",color:"black",display:"flex",alignItems:"center",justifyContent:"center",
  }}>   
  <span style={{
  borderRadius:"200px",padding:"1%",
  }}>
  Powered By <img alt="jaishriram nft" className="sol" src={solana}></img>
  </span>
  </span>
    </Card.Text>
    
  </Card.Body>

</Card>

  </div>
</div>
)
}
export default Parrallax;