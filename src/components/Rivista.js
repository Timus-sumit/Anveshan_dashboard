import React from 'react';
import {connect} from 'react-redux';
import { editEvents } from '../actions/event';
class Rivista extends React.Component{
    constructor(props){
        super(props);
        this.state={
            type:'Rivista',
            hasRegistered :this.props.event.Rivista
        }
    }
   render(){
    return(
        <div>
            <div>
                <p>Info, update and everything else about this Event</p>
            </div>
            {this.props.event.Rivista ? <button onClick={()=>{
                this.props.dispatch(editEvents({Rivista:false},this.state.type))
                this.setState(()=>({hasRegistered:false}))
                window.location.reload();
            }}>Unregister</button>:
            <button onClick={()=>{
                this.props.dispatch(editEvents({Rivista:true},this.state.type));
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

export default connect(mapStateToProps)(Rivista);