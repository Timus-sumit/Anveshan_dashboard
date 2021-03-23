import React from 'react';
import {connect} from 'react-redux';
import { editEvents } from '../actions/event';
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
            <div>
                <p>Info, update and everything else about this Event</p>
            </div>
            {this.props.event.Literatium? <button onClick={()=>{
                this.props.dispatch(editEvents({Literatium:false},this.state.type))
                this.setState(()=>({hasRegistered:false}))
                window.location.reload();
            }}>Unregister</button>:
            <button onClick={()=>{
                this.props.dispatch(editEvents({Literatium:true},this.state.type));
                this.setState(()=>({hasRegistered:true}))
                window.location.reload();
            }}>Register !</button>
            }
            
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