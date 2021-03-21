import React from 'react';
import {startLogin} from '../actions/auth';
import {connect} from 'react-redux';

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col
} from "reactstrap";
// <button onClick={startLogin}>Login</button>
const LoginPage = ({startLogin})=>{
    return(
        <div className="box-layout">
                <Card className="bg-secondary shadow border-0 box-layout__login">
                    <CardHeader className="bg-transparent pb-5">
                        <div className="text-center">
                            <img src="/logo.jpg" width="50" />
                        </div>
                        <div className="text-center">
                            <h1 className="fw-bold">Welcome to Anveshan !</h1>
                        </div>
                        <div className="text-muted text-center mt-2 mb-3">
                            <small>Sign in with</small>
                        </div>
                        <div className="btn-wrapper text-center">
                           
                            <Button
                                className="btn-neutral btn-icon"
                                color="default"
                                onClick={startLogin}
                            >
                  <span className="btn-inner--icon">
                    <img
                        alt="..."
                        src={require("../assets/img/icons/common/google.svg").default}
                    />
                  </span>
                                <span className="btn-inner--text">Google</span>
                            </Button>
                        </div>
                    </CardHeader>
                    
                </Card>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return{
        startLogin : ()=>dispatch(startLogin())
    }
}

export default connect(undefined,mapDispatchToProps)(LoginPage);