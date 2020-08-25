import React from "react";
import "./Footer.css";
import { Navbar } from "react-bootstrap";
import logo from "../../Assets/harmonize_logo.png";

export default function Footer() {
  return (
    <Navbar fixed="bottom" className="footer" expand="xl">
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Brand 
            href="https://www.harmonizehq.com">
            <img src={logo} alt="harmonize_logo" width="45.3" height="37" style={{marginBottom:"10px"}}/>
        </Navbar.Brand>
        <Navbar.Text className="footer-text">Powered by Harmonizehq</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    // <div fixed="bottom" className="justify-content-end">
    //   <img src={logo} alt="harmonize_logo" width="45.3" height="37" style={{marginBottom:"10px"}}/>
    //   <Navbar.Text className="footer-text">Powered by Harmonizehq</Navbar.Text>
    // </div>
  );
}
