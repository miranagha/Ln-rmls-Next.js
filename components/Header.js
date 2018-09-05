import React from "react";
import Link from 'next/link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { FaPhone, FaMobile } from "react-icons/lib/fa";

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
          <a className='phone' href="tel:02036336151"><FaPhone />02036336151</a>
        </div>
        <Navbar light expand="md">
          <Link href='/'>
            <a>
              <img
                src="/static/top-london-removals.jpg"
                alt="Top london removals"
                className='logo'
              />
            </a>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto navi" navbar>
              <NavItem>
                <Link href='/' passHref><a className='a-nav' >HOME</a></Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  REMOVALS
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link href='/home-removals' passHref><a className='a-nav'>HOME REMOVALS</a></Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link href='/office-removals' passHref><a className='a-nav'>OFFICE REMOVALS</a></Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link href='/international-removals' passHref><a className='a-nav'>INTERNATIONAL REMOVALS</a></Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link href='/man-and-van' passHref><a className='a-nav'>MAN AND VAN</a></Link>
              </NavItem>
              <NavItem>
                <Link href='/prices' passHref><a className='a-nav'>PRICES</a></Link>
              </NavItem>
              <NavItem>
                <Link href='/get-a-quote' passHref><a className='a-nav'>GET A QUOTE</a></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}