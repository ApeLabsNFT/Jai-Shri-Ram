import { Container, Row,Col } from "react-bootstrap"
import Mapleft from "./mapleft"
import MapRight from "./mapright"
import tenth from "../assets/10th.webp"
import sale20 from "../assets/25_ sale.webp"
import sale50 from "../assets/50_ sale.webp"
import sale75 from "../assets/75_ sale.webp"
import game from "../assets/initiate phase 2.webp"
import mint from "../assets/mint goes live.webp"
import "./roadmap.css"
import { Slide } from "react-awesome-reveal"
function Roadmap(){
    return(<Container fluid className="roadbg">
        <Row className="roadmap-out">
            <Col className="roadmap-out">
            <h1 className="roadmap">Roadmap</h1>
            </Col>
        </Row>
        <Row>
        <Slide direction="left">
            <Mapleft num={1} title="10th April 2022" para="Launch of the Jai Shri Ram Project website" image={tenth}/>
            </Slide>
            <Slide direction="right">
            <MapRight num={2} title="17th April 2022 - 23th April 2022" para="The MINT GOES LIVE. Premint is live." image={mint}/>
            </Slide>
            <Slide direction="left">
            <Mapleft num={3} title="25% SALE" para="MANDIR OF QUANT- OUR MONTHLY DATA REPORT" secpara="The first edition of Mandir of Quant goes out to Jai Shri Ram NFT holders to help them make better investments by following the investments of big players in the game." image={sale20}/>
            </Slide>
            <Slide direction="right">
            <MapRight num={4} title="50% SALE" para="RACHAYATA MARKETPLACE GETS LAUNCHED" secpara="All the Jai Shri Ram NFT holders will get a 100% discount on the transaction fee! This is your queue to retain your NFT and not be hasty to sell." image={sale50}/>
<Mapleft num={5} title="75% SALE" para="THE GOODWILL INITIATIVE" secpara="20% of our profit proceedings will be donated for the betterment and preservation of Ram heritage in India fund." image={sale75}/>
</Slide>
<Slide direction="left">
<MapRight num={6} title="Initiate PHASE 2" para="AAA Rated game" secpara="We will launch our very own PC/Mobile game with a twist!
Details will follow soon." image={game}/>
</Slide>
        </Row>

    </Container>)
}
export default Roadmap