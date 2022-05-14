
import { Carousel, Container} from "react-bootstrap";
import "./para.css";
import left from "../assets/left arrow.webp"
import right from "../assets/right arrow.webp"
const para=["Lord Ram is one of the most widely worshiped deities in the world. Such is his omnipresence that we welcome our loved ones with “Ram Ram!” and invoke his name in our last goodbyes.","His tale is mentioned briefly in Mahabharata and at length in Ramayana. His adventures include the slaying of Ravana-the demon which symbolises the victory of good over evil.Lord Ram is considered the ideal son, ruler, brother and husband.","There is no other man like him.In fact, Lord Ram is the perfect personification of one’s pious duties or Dharma.","However, in today’s modern society, learning about our Vedic rules is considered being orthodox. However, our Vedic literature does not ask us to follow it to the T. In fact, Ram Rajya is what we call a truly democratic society where every citizen takes necessary steps to ensure that the world we live in is getting better everyday."
]

console.log(para.length)
const previousIcon=<span ><img className="arrows" alt="jaishriram slideshow arrows" src={left}></img></span>
const NextIcon=<span ><img className="arrows" alt="jaishriram slideshow arrows" src={right}></img></span>
export default function SlideShow() {

  return(
    <Container fluid >
    <Carousel className="  caraco justify-content-center text-center" touch 
    prevIcon={previousIcon} nextIcon={NextIcon}
    >
      
  <Carousel.Item >
<Container className="carapara">
      <span style={{fontSize:"2vw",color:"white"}}>{para[0]}</span>
      </Container>
  </Carousel.Item>
  <Carousel.Item >
<Container className="carapara">
      <span style={{fontSize:"2vw",color:"white"}}>{para[1]}</span>
      </Container>
  </Carousel.Item>
  <Carousel.Item >
<Container className="carapara">
      <span style={{fontSize:"2vw",color:"white"}}>{para[2]}</span>
      </Container>
  </Carousel.Item>
  <Carousel.Item >
<Container className="carapara">
      <span style={{fontSize:"2vw",color:"white"}}>{para[3]}</span>
      </Container>
  </Carousel.Item>
</Carousel>
</Container>

  )
}
