import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

const Dashboard=({user})=>{
    return(
        <div>
            <h1>Dashboard</h1>
            <p>Welcome {user.name} !</p>
            <NavLink to="/register" exact={true}>Register to Events</NavLink>
        </div>
    );
}

const mapStateToProps=(state)=>{
    return{
        user:state.auth
    }
}

export default connect(mapStateToProps)(Dashboard);