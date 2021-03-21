import React from 'react';
import {connect} from 'react-redux';
import { editEvents } from '../actions/event';
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