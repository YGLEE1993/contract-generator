import React from "react";
import "./Header.css";
import { Navbar} from "react-bootstrap";

export default function Header() {
  return (
    <Navbar className="header" expand="xl">
      <Navbar.Text className="header-text">Hiring Helper</Navbar.Text>
    </Navbar>
  );
}
