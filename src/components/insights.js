import Circle from "./circle";
import "./insights.css"
import { Container,Row,Col} from "react-bootstrap";
import supply from "../assets/supply icon.webp"
import dollar from "../assets/dollar icon.webp"
import traits from "../assets/traits icon.webp"
import items from "../assets/items icon.webp"
import { Slide } from "react-awesome-reveal";
function Insights(){
    return(
    <Container fluid className="justify-content-center" style={{paddingTop:"8%",paddingBottom:"6%",marginBottom:"2%",backgroundColor:"#140700"}}>
          <Slide direction="up">
          <Row>
          
          <Col> <h2 class="insighthead">&nbsp;&nbsp;Insights&nbsp;&nbsp;</h2></Col>
             </Row>
             <Row lg={4} xs={2}>
             <Col><Circle image={supply} text="Total Supply" bottomtext="1100" font='4rem' /></Col>
             <Col><Circle image={traits} text="Traits" bottomtext="7" font='4rem' /></Col>
<Col><Circle image={items} text="Items" bottomtext="28" font='4rem'/></Col>
<Col><Circle image={dollar} text="$MANDIRCOIN/USDC" bottomtext="Coming Soon" font='2rem'/></Col>

</Row>
</Slide>
    </Container>
    )
}
export default Insights;