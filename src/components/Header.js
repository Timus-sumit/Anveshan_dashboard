import React from 'react';
import {startLogout} from '../actions/auth'
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
const Header = ({startLogout})=>{
    return(
        <header>
            <div>
                <NavLink to="/dashboard" exact={true}><h1>Anveshan </h1></NavLink>
                <button onClick={startLogout}>Logout</button>
            </div>
        </header>
    )
}
const mapDispatchToProps=(dispatch)=>{
    return{
        startLogout:()=>dispatch(startLogout())
    }
}

export default connect(undefined,mapDispatchToProps)(Header)