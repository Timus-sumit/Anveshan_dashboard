import React from "react";
import {  Link } from "react-router-dom";
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth'

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  NavLink,
  Container,
  Row,
  Col
} from "reactstrap";



class Sidebar extends React.Component {
  state = {
    collapseOpen: false
  };

  // toggles collapse between opened and closed (true/false)
  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  // closes the collapse
  closeCollapse = () => {
    this.setState({
      collapseOpen: false
    });
  };

  render() {
    return (
      <Navbar
        className="navbar-vertical fixed-left navbar-light bg-white"
        expand="md"
        id="sidenav-main"
      >
        <Container fluid>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleCollapse}
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Brand */}
            <NavbarBrand className="pt-0" >
              <Link to="/dashboard"> 
              <img
                className="navbar-brand-img"
                src="/logo.jpg"
              />
              <h1 className="fw-bold">Anveshan</h1>
              </Link> 
            </NavbarBrand>
          {/* User */}
          <Nav className="align-items-center d-md-none">
            <UncontrolledDropdown nav>
              <DropdownToggle nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      src={this.props.user.pic}
                    />
                  </span>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={this.props.startLogout}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* Collapse */}
          <Collapse navbar isOpen={this.state.collapseOpen}>
            {/* Collapse header */}
            <div className="navbar-collapse-header d-md-none">
              <Row>
                  <Col className="collapse-brand" xs="6">
                      <Link to='/dashboard'>
                        <img  src='/logo.jpg' />
                      </Link>
                  </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={this.toggleCollapse}
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            {/* Form */}
            {/* Navigation */}
            <Nav navbar>
                <NavItem>
                        <UncontrolledDropdown nav>
                        <DropdownToggle nav>
                        <Media className="align-items-center">
                            <span className="avatar avatar-sm rounded-circle">
                            <img
                                src={this.props.user.pic}
                            />
                            </span>
                            <Media className="ml-2 d-none d-lg-block">
                            <span className="mb-0 text-sm font-weight-bold">
                                {this.props.user.name}
                            </span>
                             </Media>
                        </Media>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                        <DropdownItem className="noti-title" header tag="div">
                            <h6 className="text-overflow m-0">Welcome!</h6>
                        </DropdownItem>
                        <DropdownItem to="/admin/user-profile" tag={Link}>
                            <i className="ni ni-single-02" />
                            <span>My profile</span>
                        </DropdownItem>
                        <DropdownItem href="#pablo" onClick={this.props.startLogout}>
                            <i className="ni ni-user-run" />
                            <span>Logout</span>
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </NavItem> 
                <NavItem className="pl-4">
                    <Link to="/dashboard">
                        <h3>Dashboard</h3>
                    </Link>
                </NavItem>
            </Nav>
            {/* Divider */}
            <hr className="my-3" />
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        startLogout:()=>dispatch(startLogout())
    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.auth
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);