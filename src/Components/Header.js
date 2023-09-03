import React from "react";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import './all.css'
// import {Container,Row,Col, NavbarBrand,Navbar} from "react-bootstrap"

const Header=()=>{
    return(
   <Navbar expand="sm" style={{backgroundColor:"#2c2b30",alignItems:"right"}}>
    <Container>
        <Navbar.Brand style={{color:"#ffffff"}}>Cntry</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"#ffffff"}}/>
        <Navbar.Collapse id="basic-navbar-nav" style={{color:"#ffffff"}}>
          <Nav className="justify-content-end gap-4" style={{ width: "100%"}}>
             <Link to='/' className="navitems">Home</Link>
            <Link to="/countries" className="navitems">Countries</Link>
            <Link to="help" className="navitems">Help</Link>
            </Nav>
        </Navbar.Collapse>
      
    </Container>
    
   </Navbar>
/* <Navbar>
    <Container className="mb-3" >
      <NavbarBrand >Notes Taking App</NavbarBrand>
    </Container>
    </Navbar> */

    )
}
export default Header;