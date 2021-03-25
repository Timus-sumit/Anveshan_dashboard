import React from 'react';
import {connect} from 'react-redux';
import { editEvents } from '../actions/event';
class Snapshot extends React.Component{
    constructor(props){
        super(props);
        this.state={
            type:'Snapshot',
            hasRegistered :this.props.event.Snapshot
        }
    }
   render(){
    return(
        <div>
            <div>
                <p>Info, update and everything else about this Event</p>
            </div>
            {this.props.event.Snapshot ? <button onClick={()=>{
                this.props.dispatch(editEvents({Snapshot:false},this.state.type))
                this.setState(()=>({hasRegistered:false}))
                window.location.reload();
            }}>Unregister</button>:
            <button onClick={()=>{
                this.props.dispatch(editEvents({Snapshot:true},this.state.type));
                this.setState(()=>({hasRegistered:true}))
                window.location.reload();
            }}  disabled={!this.props.event.hasPayed}>Register !</button>
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

export default connect(mapStateToProps)(Snapshot);