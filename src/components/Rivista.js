import React from 'react';
import {connect} from 'react-redux';
import { editEvents } from '../actions/event';
import {Button,Row,Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap'; 
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
        <div className="container-fluid ">
            <h1 className="mb-3 text-center">Rivista</h1>
            <div class="jumbotron jumbotron-fluid"  style={{ backgroundImage: `url('images/rivista.png')`,backgroundSize:"100% 100%", height:"400px"}}>
            </div>
            <div className="text-center">
            <p><b>Anveshan’21 presents a captivating and unique online platform to emblazon one’s
                    research skill culminating in the form of a paper and poster presentation contest RIVISTA. This event gives an opportunity to display your work in the field of metallurgy
                    interactively to a group of scholars of eminent repute and also receive feedback from
                    the interested audience. It corroborates to discuss the emerging technologies in this
                    field and ideas in one’s domain of interest with a variety of probable perspective,
                    outlook, and solution by the panel of judges. So, Gear up and reveal your technical and
                    presentation skills by chipping in at our engaging platform by demonstrating them as
                    paper and/or poster.</b></p>
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

export default connect(mapStateToProps)(Rivista);