import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import { createEvents } from '../actions/event';
import Header from './Header';

import {
    Button,
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


class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hasPayed:false
        }
    }
    render(){
    return(
        <div>
            <Container fluid className="pt-5">
                <h1>Dashboard</h1>
                <p>Welcome {this.props.user.name} !</p>
                <p><Button color="success" onClick={()=>{
                    this.props.dispatch(createEvents());
                    this.setState(()=>{
                        return{
                            hasPayed:true
                        }
                    })
                }}  disabled={this.state.hasPayed} >Make Payment !</Button></p>
                <p><NavLink to="/Literatium" exact={true}>Literatium</NavLink></p>
                <p><NavLink to="/Internado" exact={true}>Internado</NavLink></p>
                <p><NavLink to="/CodeMet" exact={true}>CodeMet</NavLink></p>
                <p><NavLink to="/Initio" exact={true}>Initio</NavLink></p>
                <p><NavLink to="/Microskopia" exact={true}>Microskopia</NavLink></p>
                <p><NavLink to="/Quitation" exact={true}>Quitation</NavLink></p>
                <p><NavLink to="/Rivista" exact={true}>Rivista</NavLink></p>
                <p><NavLink to="/Quarks" exact={true}>Quarks</NavLink></p>
            </Container>            
        </div>
    );
}
}

const mapStateToProps=(state)=>{
    return{
        user:state.auth,
        event:state.event
    }
}

export default connect(mapStateToProps)(Dashboard);