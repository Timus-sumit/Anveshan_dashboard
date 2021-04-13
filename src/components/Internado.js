import React from 'react';
import {connect} from 'react-redux';
import { editEvents } from '../actions/event';
import {Button,Row,Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap'; 
class Internado extends React.Component{
    constructor(props){
        super(props);
        this.state={
            type:'Internado',
            hasRegistered :this.props.event.Internado
        }
    }
   render(){
    return(
        <div>
            <div className="container-fluid ">
                <h1 className="mb-3 text-center">Internado</h1>
                <div class="jumbotron jumbotron-fluid"  style={{ backgroundImage: `url('images/internado.png')`,backgroundSize:"100% 100%", height:"400px"}}>
                </div>
                <div className="text-center">
                <p><b>Anveshan'21 event Internado aims at providing students with an opportunity to bag
                    their dream internship under esteemed scientists, pioneer industrialists and reverent
                    professors from the finest organizations. The participants will be given problem
                    statements from various industries and research centers and they are expected to
                    propose ingenious solutions for the same. The winner of the particular problem
                    statement will be offered an internship at the concerned research institute or industry.</b></p>
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

export default connect(mapStateToProps)(Internado);