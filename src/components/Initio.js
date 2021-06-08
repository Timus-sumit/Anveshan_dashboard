import React from 'react';
import {connect} from 'react-redux';
import { editEvents } from '../actions/event';
import {Card, CardBody, CardTitle, CardText, CardSubtitle, Button, CardImg, CardHeader, Row,Col} from 'reactstrap';
class Initio extends React.Component{
    constructor(props){
        super(props);
        this.state={
            type:'Initio',
            hasRegistered :this.props.event.Initio
        }
    }
   render(){
    return(
        <div>
           
            <Card className="bg-secondary shadow">
                <CardImg top width="100%" src="/events/INITIO.png" alt="Card image cap" />
                <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="12" >
                                        <h1 className="mb-0 text-center eventTitle">{this.state.type.toLocaleUpperCase()}</h1>
                                    </Col>
                                </Row>
                            </CardHeader>
                <CardBody>
                <CardTitle tag="h1">Event Description</CardTitle>
                <p className='eventtext'>Team Anveshan is overwhelmed to present yet another electrifying event of this edition.<br/><br/>
                Initio intends to create a synergistic interaction between academic research and industrial technologies. The participants will be needed to tackle industry-defined problems in metallurgy and propose innovative, out-of-the-box solutions by assimilating their knowledge and critical thinking skills.<br/><br/>
                Initio aims at taking the academicians from class room to industries by acquainting them with the real life problems faced therein. You will be given real-life problems which are being faced presently by various industries across the country. The objective of this event is to put forth innovative and feasible solutions to confront these problems which are hindering production in the industries. As the name ‘INITIO’ suggests ‘initiative’ or ‘beginning’, your solutions should be able to replace the existing technologies and initiate new methods which are practically feasible and economically viable.
                </p>
                <CardTitle tag="h1">Event Details</CardTitle>
                <ul>
                    <li className='eventtext'>The first round is the abstract submission round. The problem statement will be rolled out a month prior to the main event. Participating teams will have to submit an abstract.
                     Qualifying teams will move to the next round.</li>
                    <li className='eventtext'>The second round will be a Presentation round held during the meet. The shortlisted teams will have to deliver a presentation showcasing their solution to the problem.</li>
                </ul>
                    <br/>
                    <p className='eventtext' > With industrial giants presenting problems and handsome monetary rewards, this is the event to boast your monitoring and retorting skills.</p>

                <br/>
                <br/>

                <CardTitle tag="h1">Updates</CardTitle>
                <p className="eventtext">Updates for this event will be shown here.</p>
                <br/>
                <br/>

                {this.props.event.Initio ? <p>You have registered to this event !</p> : <p>Click the Button to register in this event.</p>}
                
                {this.props.event.Initio ? <Button onClick={()=>{
                    this.props.dispatch(editEvents({Initio:false},this.state.type))
                    this.setState(()=>({hasRegistered:false}))
                    window.location.reload();
                }}>Unregister</Button>:
                <Button onClick={()=>{
                    this.props.dispatch(editEvents({Initio:true},this.state.type));
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

export default connect(mapStateToProps)(Initio);