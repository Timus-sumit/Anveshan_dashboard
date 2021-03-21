import React from 'react';
import {startLogout} from '../actions/auth'
import {connect} from 'react-redux';
import {NavLink, Link} from 'react-router-dom';
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Form,
    FormGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    InputGroup,
    Navbar,
    Nav,
    Container,
    Media
} from "reactstrap";
// <div>
// <NavLink to="/dashboard" exact={true}><h1>Anveshan </h1></NavLink>
// <button onClick={startLogout}>Logout</button>
// </div>
const Header = ({startLogout})=>{
    return(
        <Nav className="navbar-vertical fixed-left navbar-dark bg-dark">
            <div>
            <Container fluid>
            <Link
                className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
                to="/"
            >
                dashboard
            </Link>
           
            <Nav className="align-items-center d-none d-md-flex" navbar>
                <UncontrolledDropdown nav>
                    <DropdownToggle className="pr-0" nav>
                        <Media className="align-items-center">
            <span className="avatar avatar-sm rounded-circle">
             
            </span>
                            <Media className="ml-2 d-none d-lg-block">
              <span className="mb-0 text-sm font-weight-bold">
                  {}
              </span>
                            </Media>
                        </Media>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                        <DropdownItem className="noti-title" header tag="div">
                            <h6 className="text-overflow m-0">Welcome!</h6>
                        </DropdownItem>
                        <DropdownItem to="/admin/user-profile">
                            <i className="ni ni-single-02"/>
                            <span>My profile</span>
                        </DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem href="#pablo" onClick={startLogout}>
                            <i className="ni ni-user-run"/>
                            <span>Logout</span>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Container>
            </div>
        </Nav>
    )
}
const mapDispatchToProps=(dispatch)=>{
    return{
        startLogout:()=>dispatch(startLogout())
    }
}

export default connect(undefined,mapDispatchToProps)(Header)