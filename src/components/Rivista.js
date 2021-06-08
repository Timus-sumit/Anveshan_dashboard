import React from 'react';
import {connect} from 'react-redux';
import { editEvents } from '../actions/event';
import {Card, CardBody, CardTitle, CardText, CardSubtitle, Button, CardImg, CardHeader, Row,Col} from 'reactstrap';

class Rivista extends React.Component{
    constructor(props){
        super(props);
        this.state={
            type:'Rivista',
            hasRegistered :this.props.event.Rivista
        }
    }
   render(){
    return(
        <div>

        <Card className="bg-secondary shadow">
        <CardImg top width="100%" src="/events/RIVISTA.png" alt="Card image cap" />
        <CardHeader className="bg-white border-0">
                        <Row className="align-items-center">
                            <Col xs="12" >
                                <h1 className="mb-0 text-center eventTitle">{this.state.type.toLocaleUpperCase()}</h1>
                            </Col>
                        </Row>
                    </CardHeader>
        <CardBody>
        <CardTitle tag="h1">Event Description</CardTitle>
        <p className='eventtext'>Anveshan’21 presents a captivating and unique online platform to emblazon one’s research skill culminating in the form of a paper and poster presentation contest- RIVISTA. This event gives an opportunity to display your work in the field of metallurgy interactively to a group of scholars of eminent repute and also receive feedback from the interested audience. It corroborates to discuss the emerging technologies in this field and ideas in one’s domain of interest with a variety of probable perspective, outlook, and solution by the panel of judges. So, Gear up and reveal your technical and presentation skills by chipping in at our engaging platform by demonstrating them as paper and/or poster.
        </p>
        <CardTitle tag="h1">Event Details</CardTitle>
        <ul>
        <li className="eventtext">
             PAPER PRESENTATION
        </li>
            <ul>
                <li>The first round is the abstract submission round. Qualifying teams will move to the next round. </li>
                <li>The second round will be a presentation round held during Anveshan’21 in which teams will have to deliver a presentation in front of a panel of judges. </li>
            </ul>
        <li className="eventtext">
            POSTER PRESENTATION
       </li>
           <ul>
                <li>An original poster fulfilling the guidelines has to be presented during Anveshan’21. </li>
                <li> First round will be abstract submission round. Participants from each year will be separately evaluated. Qualified team will move to next round.  </li>
                <li> Second round will be presentation round held during the Anveshan’21 in which teams will have to deliver their presentation in front of a panel of judges. </li>
           </ul>
        </ul>
        
        <CardTitle tag="h1">Categories</CardTitle>
        <ul>
            <li className="eventtext">Physical Metallurgy </li>
            <li className="eventtext">Extractive Metallurgy </li>
            <li className="eventtext">Mechanical Metallurgy </li>
            <li className="eventtext">Computational Metallurgy</li>
            <li className="eventtext">Advanced Materials</li>
        </ul>
        
            
        <br/>
        <br/>

        <CardTitle tag="h1">Updates</CardTitle>
        <p className="eventtext">Updates for this event will be shown here.</p>
        <br/>
        <br/>

        {this.props.event.Rivista ? <p>You have registered to this event !</p> : <p>Click the Button to register in this event.</p>}
        
        {this.props.event.Rivista ? <Button onClick={()=>{
            this.props.dispatch(editEvents({Rivista:false},this.state.type))
            this.setState(()=>({hasRegistered:false}))
            window.location.reload();
        }}>Unregister</Button>:
        <Button onClick={()=>{
            this.props.dispatch(editEvents({Rivista:true},this.state.type));
            this.setState(()=>({hasRegistered:true}))
            window.location.reload();
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

export default connect(mapStateToProps)(Rivista);