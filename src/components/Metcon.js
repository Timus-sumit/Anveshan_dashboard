import React from 'react';
import {connect} from 'react-redux';
import { editEvents } from '../actions/event';
import {Button,Row,Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap'; 
class Metcon extends React.Component{
    constructor(props){
        super(props);
        this.state={
            type:'Metcon',
            hasRegistered :this.props.event.Metcon
        }
    }
   render(){
    return(
        <div>
        <div className="container-fluid ">
            <h1 className="mb-3 text-center">Metcon</h1>
            <div class="jumbotron jumbotron-fluid"  style={{ backgroundImage: `url('images/metcon.png')`,backgroundSize:"100% 100%", height:"400px"}}>
            </div>
            <div className="text-center">
            <p><b>Anveshan'21 presents it’s event METCON which provides students a perfect juncture to
                    think out-of-the-box solutions to address a litany of challenges faced globally. A council
                    comprising of 20 member nations will discuss burning global disputes in an online meet
                    and form a resolution. Participants will represent delegations from different countries.
                    Grab this opportunity to taste the flairs of Diplomacy and International Relations.
                    Experience the heat of debates and showcase your expertise in the domain of
                    delegacy.</b></p>
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

export default connect(mapStateToProps)(Metcon);