import { Container,Row,Col} from "react-bootstrap"
import { propTypes } from "react-bootstrap/esm/Image"
import tenth from "../assets/10th.png"
import "./mapleft.css"
function Mapleft(props){
    return(
        <Container fluid className="mainco">
            <Row>
                <Col className="image">
<Container  className="imageco">
<img className="imagebro" src={props.image}></img>
</Container>
                </Col>
                <Col>
                <Container fluid className="textco">
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
                            colorr:"white",fontSize:"1.4vw", color:"white"
                        }}
                        >{props.para}</span>
                    </Row>
                    <Row>
                    <span 
                        style={{
                            width:"50vw",colorr:"white",fontSize:"1vw", color:"white"
                        }}
                        >{props.secpara}</span>
                    </Row>
                </Container>
                </Col>
            </Row>
        </Container>
    )
}
export default Mapleft