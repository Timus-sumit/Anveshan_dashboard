import React from 'react';
import {connect} from 'react-redux';
import { editEvents } from '../actions/event';
import {Button,Row,Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap'; 
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
        <div className="container-fluid ">
            <h1 className="mb-3 text-center">Initio</h1>
            <div class="jumbotron jumbotron-fluid"  style={{ backgroundImage: `url('images/initio.png')`,backgroundSize:"100% 100%", height:"400px"}}>
            </div>
            <div className="text-center">
            <p><b>Anveshan’21 brings you a floor for a synergistic interaction between academia and
            industry. Academic research and industrial technologies can collaborate to foster
            innovations and economic growth. The idea behind this collaboration is to conceive a
            logical solution to various challenges faced by the industries and research institutes
            using your knowledge and wisdom. The participants are introduced to the challenges
            faced by modern industries across the globe. The event aims to put forth an innovative
            yet sustainable solution to these problems. In the event ‘INITIO’, as the name suggests,
            ‘ initiative ’ or ‘beginning’, the solutions should replace or modify the existing
            technologies and initiate unique, practically feasible, and economically viable methods.</b></p>
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

export default connect(mapStateToProps)(Initio);