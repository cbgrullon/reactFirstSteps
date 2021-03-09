import React, { useState } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse,NavItem } from "reactstrap";
import {NavLink} from 'react-router-dom';
function TopMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand>
          <NavbarToggler onClick={toggle}></NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto" navbar>
                  <NavItem>
                    <NavLink exact to="/posts" className="nav-link" activeClassName="active">
                      Posts
                    </NavLink>
                  </NavItem>
              </Nav>
          </Collapse>
        </NavbarBrand>
      </Navbar>
    </div>
  );
}
export default TopMenu;
