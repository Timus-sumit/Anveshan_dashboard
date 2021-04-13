import React from 'react';
import {connect} from 'react-redux';
import { editEvents } from '../actions/event';
import {Button,Row,Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap'; 
class CodeMet extends React.Component{
    constructor(props){
        super(props);
        this.state={
            type:'CodeMet',
        }
    }
   render(){
    return(
        <div>
            <div className="container-fluid ">
                <h1 className="mb-3 text-center">Codemet</h1>
                <div class="jumbotron jumbotron-fluid"  style={{ backgroundImage: `url('images/codemet.png')`,backgroundSize:"100% 100%", height:"400px"}}>
                </div>
                <div className="text-center">
                    <p><b>The disruptive digital technology and sustaining materials’ innovation have merged to
                        revolutionize the dynamics of material science study. Anveshan’21 brings CODEMET –
                        an opportunity to amalgamate programming and practical processes to immerse you in
                        the realm of computation. This event's aim is to create the most efficient code that
                        gives the best solution to the problem by applying fundamental programming and
                        simulation tools.</b></p>
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

export default connect(mapStateToProps)(CodeMet);