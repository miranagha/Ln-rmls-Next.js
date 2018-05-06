import React from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import FaPhone from "react-icons/lib/fa/phone";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <div className="text-right">
          <a className="phone" href="tel:07484675664">
            <FaPhone />07484675664
          </a>
        </div>
        <Navbar light expand="md">
          <NavbarBrand href="/">
            <img
              src="/static/logo.jpg"
              alt="Top london removals"
              className='logo'
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto navi" navbar>
              <NavItem>
                <NavLink className="aa" href="/">
                  HOME
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  REMOVALS
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/home-removals">Home Removals</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/office-removals">Office Removals</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/international-removals">
                      International Removals
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/man-and-van">MAN AND VAN</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/prices">PRICES</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/get-a-quote">GET A QUOTE</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
