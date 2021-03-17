import React from 'react';
import logo from './loginPageAssets/images/logo.jpg'
import img from './loginPageAssets/images/login.jpg'
import './loginPageAssets/css/login.css'
import './loginPageAssets/scss/login.scss'
import {startLogin} from '../actions/auth';
import {connect} from 'react-redux';

const LoginPage = ({startLogin})=>{
    return(
        <div className="hammer-background">
            <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div className="container">
        <div className="card login-card">
          <div className="row no-gutters">
            <div className="col-md-5">
              <img
                src={img}
                alt="login"
                className="login-card-img"
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <div className="brand-wrapper">
                  <img src={logo} alt="logo" className="logo" />
                  <p>Anveshan</p>
                </div>
                <p className="login-card-description">Sign into your account</p>
                <button className="btn btn-block login-btn mb-4" onClick={startLogin}>Login</button>             
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </main>
            
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return{
        startLogin : ()=>dispatch(startLogin())
    }
}

export default connect(undefined,mapDispatchToProps)(LoginPage);