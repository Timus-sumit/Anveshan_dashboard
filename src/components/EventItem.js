import React from 'react';
import 'reactstrap'
const EventItem = (props)=>{
    return(
        <div className="mb-4" >
            <img className='img-responsive fit-image' width="300px" src={props.imgURL}/>
        </div>
    )
}

export default EventItem;