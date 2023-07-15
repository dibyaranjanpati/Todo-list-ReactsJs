import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { NavLink} from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

function Header(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="primary" light>
        <NavbarBrand className="me-auto text-light">
          <NavLink to={'/'} style={{textDecoration:'none',color:"black"}}>
          {props.title}
          </NavLink>  
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
                <NavLink to={'/'} my-3 style={{textDecoration:'none'}}>
                  <p className="text-dark">Home</p>
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={'/about'} my-3 style={{textDecoration:'none'}}>
                  <p className="text-dark">About</p>
                </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

