import React from 'react';
import 'reactstrap'
// <img className='img-responsive fit-image' width="300px" src={props.imgURL}/>
const EventItem = (props)=>{
    return(
        <div className="mb-4 c-preview" >
           <img className='img-responsive  fit-image' width="300px" src={props.imgURL}/>
        </div>
    )
}

export default EventItem;