import React from "react";
// import Link from 'next/link'

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
          <a className="phone" href="tel:07490531699">
            <FaPhone /> 02080000000
          </a>
        </div>
        <Navbar light expand="md">
          <NavbarBrand href="/">
            <img
              src="/static/logo.png"
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
                {/* <Link href='/' passHref>
                                    <a>HOME</a>
                                </Link> */}
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  REMOVALS
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    {/* <Link href='/home-removals' passHref>
                                            <a>Home Removals</a>
                                        </Link> */}
                    <NavLink href="/home-removals">Home Removals</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />

                  <DropdownItem>
                    {/* <Link href='/office-removals' passHref>
                                            <a>Office Removals</a>
                                        </Link> */}
                    <NavLink href="/office-removals">Office Removals</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    {/* <Link href='/international-removals' passHref>
                                            <a>International Removals</a>
                                        </Link> */}
                    <NavLink href="/international-removals">
                      International Removals
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                {/* <Link href='/man-and-van' passHref >
                                    <a>MAN AND VAN</a>
                                </Link> */}
                <NavLink href="/man-and-van">MAN AND VAN</NavLink>
              </NavItem>
              <NavItem>
                {/* <Link href='/prices' passHref >
                                    <a>PRICES</a>
                                </Link> */}
                <NavLink href="/prices">PRICES</NavLink>
              </NavItem>
              <NavItem>
                {/* <Link href='/get-a-quote' passHref>
                                    <a>GET A QUOTE</a>
                                </Link> */}
                <NavLink href="/get-a-quote">GET A QUOTE</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
