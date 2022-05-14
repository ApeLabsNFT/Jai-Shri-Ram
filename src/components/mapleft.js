
import "./mapleft.css"
function Mapleft(props){
    return(
//         <Container fluid className="mainco">
//             <Row>
//                 <Col className="image">
// <Container  className="imageco">
// <img className="imagebro" src={props.image}></img>
// </Container>
//                 </Col>
//                 <Col>
//                 <Container fluid className="textco">
//                     <Row >
//                         <h1 className="digit">#{props.num}</h1>
//                     </Row>
//                     <Row >
//                         <h1 style={{color:"white"}} className="date">{props.title}</h1>
//                     </Row>

//                     <Row className="w-50">
//                         <hr style={{
//                             opacity:1,
//                             backgroundColor:"#ff6000",
//                             height:"2px"
//                         }}></hr>
//                     </Row>
//                     <Row>
//                         <span 
//                         style={{
//                             colorr:"white",fontSize:"1.4vw", color:"white"
//                         }}
//                         >{props.para}</span>
//                     </Row>
//                     <Row>
//                     <span 
//                         style={{
//                             width:"50vw",colorr:"white",fontSize:"1vw", color:"white"
//                         }}
//                         >{props.secpara}</span>
//                     </Row>
//                 </Container>
//                 </Col>
//             </Row>
//         </Container>
<div className="roadleft">
    <div className="imageleftco1">
    <div className="imageleftco">
 <img className="imagebro" alt="jaishriramnft nft jai shri ram nft insights money" src={props.image}></img>
 </div>
 </div>
 <div className="roadrightco">
 <h1 className="digitright">#{props.num}</h1>
 <h1 style={{color:"white"}} className="date">{props.title}</h1>
 <hr className="lineright" style={{
                             opacity:1,
                             backgroundColor:"#ff6000",
                             height:"3px",
                             width:"60%"
                         }}></hr>
                            <span 
                         style={{
                             colorr:"white",fontSize:"1.4vw", color:"white",alignSelf:"flex-end"
                         }}
                         >{props.para}</span>
                           <span 
                         style={{
                             width:"50vw",colorr:"white",fontSize:"1.1vw", color:"white",alignSelf:"flex-end"
                         }}
                         >{props.secpara}</span>

 </div>

</div>
    )
}
export default Mapleft