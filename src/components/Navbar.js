import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import Avatar from "../assets/swastik.png"
import { Nav } from "react-bootstrap";
import "./Navbar.css"
function ResNavbar(){
    return(
        <Navbar  collapseOnSelect style={{backgroundColor:"rgba(0,0,0,0.4)",
        height:"80px"
        }} variant="dark" sticky="top" expand="lg" className="p-3">
          
            <Navbar.Brand href="/" style={{

              fontSize:"2rem",
              fontWeight:900,
    
          
            }}><Container fluid className="justify-content-center hero" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>&nbsp;Jai Shri Ram<img width="40vw" height="40vh" alt="Jaishriram logo" src={Avatar}></img></Container></Navbar.Brand>
          <Navbar.Toggle
           aria-controls="responsive-navbar"/>
          <Navbar.Collapse style={{
            textAlign:"center"
          }} id="responsive-navbar">
          <Nav style={{
            width:"100%",
            display:"flex",
            justifyContent:"flex-end"

          }} className="me-auto">
        <Nav.Link className=" nav-link"   href="/HOME">HOME</Nav.Link>
        <Nav.Link  className="nav-link " href="/MINT">MINT</Nav.Link>
        <Nav.Link className="nav-link " href="/FAQ">FAQ</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>


    )
}
export default ResNavbar;