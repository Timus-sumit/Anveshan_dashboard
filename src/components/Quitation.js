import React from 'react';
import {connect} from 'react-redux';
import { editEvents } from '../actions/event';
import{
    Container
} from 'reactstrap';
class Quitation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            type:'Quitation',
            hasRegistered :this.props.event.Quitation
        }
    }
   render(){
    return(
        <Container fluid className="pt-5">
            <div>
                <p>Info, update and everything else about this Event</p>
            </div>
            {this.state.hasRegistered ? <button onClick={()=>{
                this.props.dispatch(editEvents({Quitation:false},this.state.type))
                this.setState(()=>({hasRegistered:false}))
            }}>Unregister</button>:
            <button onClick={()=>{
                this.props.dispatch(editEvents({Quitation:true},this.state.type));
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

export default connect(mapStateToProps)(Quitation);