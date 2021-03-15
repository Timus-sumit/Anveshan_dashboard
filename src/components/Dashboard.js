import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import { createEvents } from '../actions/event';


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
            <h1>Dashboard</h1>
            <p>Welcome {this.props.user.name} !</p>
            <p><button onClick={()=>{
                this.props.dispatch(createEvents());
                this.setState(()=>{
                    return{
                        hasPayed:true
                    }
                })
            }}  disabled={this.state.hasPayed} >Make Payment !</button></p>
            <p><NavLink to="/Literatium" exact={true}>Literatium</NavLink></p>
            <p><NavLink to="/Internado" exact={true}>Internado</NavLink></p>
            <p><NavLink to="/CodeMet" exact={true}>CodeMet</NavLink></p>
            <p><NavLink to="/Initio" exact={true}>Initio</NavLink></p>
            <p><NavLink to="/Microskopia" exact={true}>Microskopia</NavLink></p>
            <p><NavLink to="/Quitation" exact={true}>Quitation</NavLink></p>
            <p><NavLink to="/Rivista" exact={true}>Rivista</NavLink></p>
            <p><NavLink to="/Quarks" exact={true}>Quarks</NavLink></p>            
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