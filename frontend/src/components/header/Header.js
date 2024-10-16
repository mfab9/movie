import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";

const Header = () => {
 
return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color":'gold',"fontSize":"28px"}}>
                {/* <FontAwesomeIcon icon ={faVideoSlash}/> */}
                <img
                src={`${process.env.PUBLIC_URL}/Luffy.png`} 
                alt="MovieVault Logo" 
                style={{ 
                    width: '70px',
                    height: '70px',   
                    borderRadius: '50%', 
                    objectFit: 'cover' 
                }}
                />
                MovieVault
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                    <NavLink className ="nav-link" to="/">Home</NavLink>
                    <NavLink className ="nav-link" to="/watchList">Watch List</NavLink>      
                </Nav>
                <Button variant="outline-info" className="me-2">Login</Button>
                <Button variant="outline-info">Register</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header