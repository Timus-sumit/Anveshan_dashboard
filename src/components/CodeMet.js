import React from 'react';
import {connect} from 'react-redux';
import { editEvents } from '../actions/event';
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
            <div>
                <p>Info, update and everything else about this Event</p>
            </div>
            {this.props.event.CodeMet ? <button onClick={()=>{
                this.props.dispatch(editEvents({CodeMet:false},this.state.type))
                window.location.reload();
            }}>Unregister</button>:
            <button onClick={()=>{
                this.props.dispatch(editEvents({CodeMet:true},this.state.type));
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

export default connect(mapStateToProps)(CodeMet);