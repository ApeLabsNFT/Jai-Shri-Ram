import { Container,Row,Col} from "react-bootstrap"
import { propTypes } from "react-bootstrap/esm/Image"
import tenth from "../assets/10th.png"
import "./mapright.css"
function MapRight(props){
    return(
        <Container fluid className="mainco">
            <Row>
              
                <Col>
                <Container fluid className="textco-r">
                    <Row >
                        <h1 className="digit">#{props.num}</h1>
                    </Row>
                    <Row >
                        <h1 style={{color:"white"}} className="date">{props.title}</h1>
                    </Row>

                    <Row className="w-50">
                        <hr style={{
                            opacity:1,
                            backgroundColor:"#ff6000",
                            height:"2px"
                        }}></hr>
                    </Row>
                    <Row>
                        <span 
                        style={{
                            colorr:"white",fontSize:"1.2vw", color:"white"
                        }}
                        >{props.para}</span>
                    </Row>
                    <Row>
                    <span 
                        style={{
                            width:"50vw",colorr:"white",fontSize:"1vw", color:"white",textAlign:"left"
                        }}
                        >{props.secpara}</span>
                    </Row>
                </Container>
                </Col>
                <Col className="image">
<Container  className="imageco">
<img className="imagebro" src={props.image}></img>
</Container>
                </Col>
            </Row>
        </Container>
    )
}
export default MapRight