import React from 'react';
import {connect} from 'react-redux';
import { editEvents } from '../actions/event';
class Quarks extends React.Component{
    constructor(props){
        super(props);
        this.state={
            type:'Quarks',
            hasRegistered :this.props.event.Quarks
        }
    }
   render(){
    return(
        <div>
            <div>
                <p>Info, update and everything else about this Event</p>
            </div>
            {this.props.event.Quarks ? <button onClick={()=>{
                this.props.dispatch(editEvents({Quarks:false},this.state.type))
                window.location.reload();
                this.setState(()=>({hasRegistered:false}))
            }}>Unregister</button>:
            <button onClick={()=>{
                this.props.dispatch(editEvents({Quarks:true},this.state.type));
                window.location.reload()
                this.setState(()=>({hasRegistered:true}))
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

export default connect(mapStateToProps)(Quarks);