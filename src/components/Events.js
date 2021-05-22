import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import { createEvents } from '../actions/event';
import {Button,Card,CardBody,Row,Col} from 'reactstrap'; 
import EventItem from './EventItem';

// <h1>Events</h1>
            
//             <hr/>
//             <Card className="bg-secondary shadow">
//             <Row className="py-3">
//             { <Col sm='12' md='4' className="text-center"><NavLink to="/Literatium" exact={true}><EventItem imgURL={'/events/8.png'} eventName={'Literatium'}/></NavLink></Col>}
//             {<Col sm='12' md='4' className="text-center"><NavLink to="/Internado" exact={true}><EventItem imgURL={'/events/2.png'} eventName={'Internado'}/></NavLink></Col>}
//             {<Col sm='12' md='4' className="text-center"><NavLink to="/CodeMet" exact={true}><EventItem imgURL={'/events/3.png'} eventName={'Codemet'}/></NavLink></Col>}
//             {<Col sm='12' md='4' className="text-center"><NavLink to="/Initio" exact={true}><EventItem imgURL={'/events/1.png'} eventName={'Initio'}/></NavLink></Col>}
//             {<Col sm='12' md='4' className="text-center"><NavLink to="/Metcon" exact={true}><EventItem imgURL={'/events/6.jpeg'} eventName={'Metcon'}/></NavLink></Col>}
//             {<Col sm='12' md='4' className="text-center"><NavLink to="/Snapshot" exact={true}><EventItem imgURL={'/events/7.png'} eventName={'Snapshot'}/></NavLink></Col>}
//             {<Col sm='12' md='4' className="text-center"><NavLink to="/Rivista" exact={true}><EventItem imgURL={'/events/5.png'} eventName={'Rivista'}/></NavLink></Col>}
//             {<Col sm='12' md='4' className="text-center"><NavLink to="/Quarks" exact={true}><EventItem imgURL={'/events/4.png'} eventName={'Quarks'}/></NavLink></Col> } 
//             </Row>
//             </Card>  

class Events extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hasPayed:false
        }
    }
    render(){
    return(
        <section id="portfolio" class="portfolio">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Events</h2>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
        {<Col sm='12' md='4' className="text-center"><NavLink to="/Literatium" exact={true}><EventItem imgURL={'/events/8.png'} eventName={'Literatium'}/></NavLink></Col>}
        {<Col sm='12' md='4' className="text-center"><NavLink to="/Internado" exact={true}><EventItem imgURL={'/events/2.png'} eventName={'Internado'}/></NavLink></Col>}
        {<Col sm='12' md='4' className="text-center"><NavLink to="/CodeMet" exact={true}><EventItem imgURL={'/events/3.png'} eventName={'Codemet'}/></NavLink></Col>}
        {<Col sm='12' md='4' className="text-center"><NavLink to="/Initio" exact={true}><EventItem imgURL={'/events/1.png'} eventName={'Initio'}/></NavLink></Col>}
        {<Col sm='12' md='4' className="text-center"><NavLink to="/Metcon" exact={true}><EventItem imgURL={'/events/6.jpeg'} eventName={'Metcon'}/></NavLink></Col>}
        {<Col sm='12' md='4' className="text-center"><NavLink to="/Snapshot" exact={true}><EventItem imgURL={'/events/7.png'} eventName={'Snapshot'}/></NavLink></Col>}
        {<Col sm='12' md='4' className="text-center"><NavLink to="/Rivista" exact={true}><EventItem imgURL={'/events/5.png'} eventName={'Rivista'}/></NavLink></Col>}
        {<Col sm='12' md='4' className="text-center"><NavLink to="/Quarks" exact={true}><EventItem imgURL={'/events/4.png'} eventName={'Quarks'}/></NavLink></Col> } 
        </div>

      </div>
    </section>
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