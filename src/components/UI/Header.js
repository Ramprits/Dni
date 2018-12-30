import React, { Component } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import logo from "../../assets/img/logo";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

export default class Header extends Component {
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
        <Navbar color="primary" dark expand="xs">
          <div className="container">
            <img src={logo} height={40} alt="logo" />
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <RouterLink
                    style={{ color: "white", marginRight: "1rem" }}
                    activeClassName="active"
                    to="/"
                  >
                    Home
                  </RouterLink>
                </NavItem>
                <NavItem>
                  <RouterLink
                    activeClassName="active"
                    to="https://github.com/Ramprits/dni"
                  >
                    GitHub
                  </RouterLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
