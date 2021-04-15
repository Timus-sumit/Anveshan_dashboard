import React from 'react';
import {connect} from 'react-redux';

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col
} from "reactstrap";

class UserProfile extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>User Profile</h1>
                <hr/>
                <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">My account</h3>
                                    </Col>
                                    <Col className="text-right" xs="4" >
                                        <Button >
                                            Edit Profile
                                        </Button>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <h6 className="heading-small text-muted mb-4">
                                        User information 
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        Username
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        Value={this.props.user.name}
                                                        id="input-username"
                                                        placeholder="Username"
                                                        type="text"
                                                        disabled
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-email"
                                                    >
                                                        Email address
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-email"
                                                        Value={this.props.user.email}
                                                        type="email"
                                                        disabled
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        {/*<Row>*/}
                                        {/*    <Col lg="6">*/}
                                        {/*        <FormGroup>*/}
                                        {/*            <label*/}
                                        {/*                className="form-control-label"*/}
                                        {/*                htmlFor="input-first-name"*/}
                                        {/*            >*/}
                                        {/*                First name*/}
                                        {/*            </label>*/}
                                        {/*            <Input*/}
                                        {/*                className="form-control-alternative"*/}
                                        {/*                defaultValue="Lucky"*/}
                                        {/*                id="input-first-name"*/}
                                        {/*                placeholder="First name"*/}
                                        {/*                type="text"*/}
                                        {/*            />*/}
                                        {/*        </FormGroup>*/}
                                        {/*    </Col>*/}
                                        {/*    <Col lg="6">*/}
                                        {/*        <FormGroup>*/}
                                        {/*            <label*/}
                                        {/*                className="form-control-label"*/}
                                        {/*                htmlFor="input-last-name"*/}
                                        {/*            >*/}
                                        {/*                Last name*/}
                                        {/*            </label>*/}
                                        {/*            <Input*/}
                                        {/*                className="form-control-alternative"*/}
                                        {/*                defaultValue="Jesse"*/}
                                        {/*                id="input-last-name"*/}
                                        {/*                placeholder="Last name"*/}
                                        {/*                type="text"*/}
                                        {/*            />*/}
                                        {/*        </FormGroup>*/}
                                        {/*    </Col>*/}
                                        {/*</Row>*/}
                                    </div>
                                    <hr className="my-4"/>
                                    {/* Address */}
                                    <h6 className="heading-small text-muted mb-4">
                                        Contact information 
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        Address
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue={this.props.event.address}
                                                        id="input-address"
                                                        placeholder="Home Address"
                                                        type="text"
                                                        disabled
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-city"
                                                    >
                                                        City
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue={this.props.event.city}
                                                        id="input-city"
                                                        placeholder="City"
                                                        type="text"
                                                        disabled
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-country"
                                                    >
                                                        Country
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue={this.props.event.country}
                                                        id="input-country"
                                                        placeholder="Country"
                                                        type="text"
                                                        disabled
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-country"
                                                    >
                                                        Postal code
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue={this.props.event.postcode}
                                                        id="input-postal-code"
                                                        placeholder="Postal code"
                                                        type="number"
                                                        disabled
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-phonenumber"
                                                    >
                                                        Phone Number
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue={this.props.event.phonenumber}
                                                        id="input-phonenumber"
                                                        placeholder="phonenumber"
                                                        type="text"
                                                        disabled
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                    <hr className="my-4"/>
                                    {/* Description */}
                                    <h6 className="heading-small text-muted mb-4">Merch  </h6>
                                    <div className="pl-lg-4">
                                        <FormGroup>
                                            <label>Colour</label>
                                            <Input
                                                className="form-control-alternative"
                                                placeholder="A few words about you ..."
                                                rows="4"
                                                defaultValue={this.props.event.merch}
                                                type="text"
                                                disabled
                                            />
                                        </FormGroup>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        user:state.auth,
        event:state.event
    }
}

export default connect(mapStateToProps)(UserProfile);