import React from 'react';
import {connect} from 'react-redux';
import { editEvents } from '../actions/event';
import {Card, CardBody, CardTitle, CardText, CardSubtitle, Button, CardImg, CardHeader, Row,Col} from 'reactstrap';

class Quarks extends React.Component{
    constructor(props){
        super(props);
        this.state={
            type:'Quarks',
            hasRegistered :this.props.event.Quarks
        }
    }
   render(){
    return(
        <div>

        <Card className="bg-secondary shadow">
        <CardImg top width="100%" src="/events/QUARKS.png" alt="Card image cap" />
        <CardHeader className="bg-white border-0">
                        <Row className="align-items-center">
                            <Col xs="12" >
                                <h1 className="mb-0 text-center eventTitle">{this.state.type.toLocaleUpperCase()}</h1>
                            </Col>
                        </Row>
                    </CardHeader>
        <CardBody>
        <CardTitle tag="h1">Event Description</CardTitle>
        <p className='eventtext'>"An Investment in knowledge pays the best interest.” - Benjamin Franklin
        <br/><br/>
        Anveshan'21 presents to you it’s exhilarating quizzing competition ‘Quarks' which gives you an excellent opportunity to showcase your knowledge about materials and metallurgy. No pre-requisites are required, except for your zest to know more. So, brush up your facts and join us in this brainstorming quiz where you will get to compete against many extraordinary minds of the country.
        </p>
        <CardTitle tag="h1">Event Details</CardTitle>
        <ul>
            <li className="eventext">The quiz will be conducted online in two rounds: Preliminary and final round.</li>
            <li className="eventext">A maximum of two participants per team are allowed. </li>
            <li className="eventext">The prelims consists of 20 general questions. </li>
            <li className="eventext">Top 6 teams will qualify for the final round. </li>
            <li className="eventext">There will be four rounds in the finals. </li>
            <li className="eventext">Quizmaster will elaborate on the minutes of every round during the quiz event. </li>
            <li className="eventext"> Decision made by the quizmaster will be final. </li>
        </ul>
        
            
        <br/>
        <br/>

        <CardTitle tag="h1">Updates</CardTitle>
        <p className="eventtext">Updates for this event will be shown here.</p>
        <br/>
        <br/>

        {this.props.event.Quarks ? <p>You have registered to this event !</p> : <p>Click the Button to register in this event.</p>}
        
        {this.props.event.Quarks ? <Button onClick={()=>{
            this.props.dispatch(editEvents({Quarks:false},this.state.type))
            window.location.reload();
            this.setState(()=>({hasRegistered:false}))
        }}>Unregister</Button>:
        <Button onClick={()=>{
            this.props.dispatch(editEvents({Quarks:true},this.state.type));
            window.location.reload()
            this.setState(()=>({hasRegistered:true}))
        }}  disabled={!this.props.event.hasPayed}>Register !</Button>
        }
        
        </CardBody>
    </Card> 
        </div>
    )
}
}
const mapStateToProps=(state)=>{
    return{
        event:state.event
    }
}

export default connect(mapStateToProps)(Quarks);