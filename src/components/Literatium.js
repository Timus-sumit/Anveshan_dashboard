import React from 'react';
import {connect} from 'react-redux';
import { editEvents } from '../actions/event';
import {Button,Row,Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap'; 
class Literatium extends React.Component{
    constructor(props){
        super(props);
        this.state={
            type:'Literatium',
            hasRegistered :this.props.event.Literatium
        }
    }
   render(){
    return(
        <div>
            <div className="container-fluid ">
                <h1 className="mb-3 text-center">Literatium</h1>
                <div class="jumbotron jumbotron-fluid"  style={{ backgroundImage: `url('images/literatium.png')`,backgroundSize:"100% 100%", height:"400px"}}>
                </div>
                <div className="text-center">
                <p><b>Anveshan’21 presents Literatium ,an article writing competition which aims to inspire
                students to show their writing skills in Materials and Metallurgical domain. Participants
                will have to write an article on one of the topics from the list that are given along with
                instruction</b></p>
                </div>
            </div>
          
            <Row className="justify-content-center mt-4">
            
            {this.props.event.CodeMet ? <Button className="btn btn-danger" onClick={()=>{
                this.props.dispatch(editEvents({CodeMet:false},this.state.type))
                window.location.reload();
            }}>Unregister</Button>:
            <Button className="btn btn-success" onClick={()=>{
                this.props.dispatch(editEvents({CodeMet:true},this.state.type));
                window.location.reload();
            }} disabled={!this.props.event.hasPayed}>Register !</Button>
            }
            </Row>
            
        </div>
    )
}
}
const mapStateToProps=(state)=>{
    return{
        event:state.event
    }
}

export default connect(mapStateToProps)(Literatium);