import React from 'react';
import {connect} from 'react-redux';
import { editEvents } from '../actions/event';
class CodeMet extends React.Component{
    constructor(props){
        super(props);
        this.state={
            type:'CodeMet',
            hasRegistered :this.props.event.CodeMet
        }
    }
   render(){
    return(
        <div>
            <div>
                <p>Info, update and everything else about this Event</p>
            </div>
            {this.state.hasRegistered ? <button onClick={()=>{
                this.props.dispatch(editEvents({CodeMet:false},this.state.type))
                this.setState(()=>({hasRegistered:false}))
            }}>Unregister</button>:
            <button onClick={()=>{
                this.props.dispatch(editEvents({CodeMet:true},this.state.type));
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

export default connect(mapStateToProps)(CodeMet);