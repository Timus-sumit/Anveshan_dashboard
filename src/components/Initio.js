import React from 'react';
import {connect} from 'react-redux';
import { editEvents } from '../actions/event';
import{
    Container
} from 'reactstrap';
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
        <Container fluid className="pt-5">
            <div>
                <p>Info, update and everything else about this Event</p>
            </div>
            {this.state.hasRegistered ? <button onClick={()=>{
                this.props.dispatch(editEvents({Initio:false},this.state.type))
                this.setState(()=>({hasRegistered:false}))
            }}>Unregister</button>:
            <button onClick={()=>{
                this.props.dispatch(editEvents({Initio:true},this.state.type));
                this.setState(()=>({hasRegistered:true}))
            }}>Register !</button>
            }
            
        </Container>
    )
}
}
const mapStateToProps=(state)=>{
    return{
        event:state.event
    }
}

export default connect(mapStateToProps)(Initio);