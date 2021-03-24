import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import { createEvents } from '../actions/event';
import {Button,Card,CardBody,Row,Col} from 'reactstrap'; 
import EventItem from './EventItem';

class Events extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hasPayed:false
        }
    }
    render(){
    return(
        <div>
            <h1>Events</h1>
            
            <hr/>
            <Card>
            <Row className="py-3">
            { <Col sm='12' md='4' className="text-center"><NavLink to="/Literatium" exact={true}><EventItem imgURL={'/events/8.png'} eventName={'Literatium'}/></NavLink></Col>}
            {<Col sm='12' md='4' className="text-center"><NavLink to="/Internado" exact={true}><EventItem imgURL={'/events/2.png'} eventName={'Internado'}/></NavLink></Col>}
            {<Col sm='12' md='4' className="text-center"><NavLink to="/CodeMet" exact={true}><EventItem imgURL={'/events/3.png'} eventName={'Codemet'}/></NavLink></Col>}
            {<Col sm='12' md='4' className="text-center"><NavLink to="/Initio" exact={true}><EventItem imgURL={'/events/1.png'} eventName={'Initio'}/></NavLink></Col>}
            {<Col sm='12' md='4' className="text-center"><NavLink to="/Metcon" exact={true}><EventItem imgURL={'/events/6.jpeg'} eventName={'Metcon'}/></NavLink></Col>}
            {<Col sm='12' md='4' className="text-center"><NavLink to="/Snapshot" exact={true}><EventItem imgURL={'/events/7.png'} eventName={'Snapshot'}/></NavLink></Col>}
            {<Col sm='12' md='4' className="text-center"><NavLink to="/Rivista" exact={true}><EventItem imgURL={'/events/5.png'} eventName={'Rivista'}/></NavLink></Col>}
            {<Col sm='12' md='4' className="text-center"><NavLink to="/Quarks" exact={true}><EventItem imgURL={'/events/4.png'} eventName={'Quarks'}/></NavLink></Col> } 
            </Row>
            </Card>             
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

export default connect(mapStateToProps)(Events);