import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  Row,
  Col,
} from 'reactstrap'
import { editName } from '../actions/auth'
import { editEvents } from '../actions/event'

class EditProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.user.name,
      email: this.props.user.email,
      address: this.props.event.address,
      city: this.props.event.city,
      country: this.props.event.country,
      postcode: this.props.event.postcode,
      phonenumber: this.props.event.phonenumber,
      merch: this.props.event.merch,
      college: this.props.event.college,
      branch: this.props.event.branch,
      specs: this.props.event.specs,
      error: '',
    }
  }
  onNameChange = (e) => {
    const name = e.target.value
    this.setState(() => {
      return {
        name,
      }
    })
  }
  onCollegeChange = (e) => {
    const college = e.target.value
    this.setState(() => {
      return {
        college,
      }
    })
  }
  onBranchChange = (e) => {
    const branch = e.target.value
    this.setState(() => {
      return {
        branch,
      }
    })
  }
  onSpecsChange = (e) => {
    const specs = e.target.value
    this.setState(() => {
      return {
        specs,
      }
    })
  }
  onAddressChange = (e) => {
    const address = e.target.value
    this.setState(() => {
      return {
        address,
      }
    })
  }
  onCityChange = (e) => {
    const city = e.target.value
    this.setState(() => {
      return {
        city,
      }
    })
  }
  onCountryChange = (e) => {
    const country = e.target.value
    this.setState(() => {
      return {
        country,
      }
    })
  }
  onPostChange = (e) => {
    const postcode = e.target.value
    this.setState(() => {
      return {
        postcode,
      }
    })
  }
  onNumberChange = (e) => {
    const phonenumber = e.target.value
    this.setState(() => {
      return {
        phonenumber,
      }
    })
  }
  onMerchChange = (e) => {
    const merch = e.target.value
    this.setState(() => {
      return {
        merch,
      }
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    if (
      !this.state.name ||
      !this.state.address ||
      !this.state.city ||
      !this.state.country ||
      !this.state.phonenumber ||
      !this.state.postcode ||
      !this.state.merch ||
      !this.state.college ||
      !this.state.branch ||
      !this.state.specs
    ) {
      this.setState(() => {
        return {
          error: 'Please make sure that all options are filled !',
        }
      })
    } else {
      this.setState(() => {
        return {
          error: '',
        }
      })

      const user = {
        name: this.state.name,
        email: this.state.email,
        address: this.state.address,
        city: this.state.city,
        country: this.state.country,
        postcode: this.state.postcode,
        phonenumber: this.state.phonenumber,
        merch: this.state.merch,
        college: this.state.college,
        branch: this.state.branch,
        specs: this.state.specs,
      }

      this.props.dispatch(editEvents(user, 'USER'))
      window.location.reload()
    }
  }

  onNameSubmit = (e) => {
    e.preventDefault()
    if (
      !this.state.name ||
      !this.state.address ||
      !this.state.city ||
      !this.state.country ||
      !this.state.phonenumber ||
      !this.state.postcode ||
      !this.state.merch ||
      !this.state.college ||
      !this.state.branch ||
      !this.state.specs
    ) {
      this.setState(() => {
        return {
          error: 'Please make sure that all options are filled !',
        }
      })
    } else {
      this.setState(() => {
        return {
          error: '',
        }
      })

      const user = { name: this.state.name }

      this.props.dispatch(editName(user, 'USER_NAME'))
      window.location.reload()
    }
  }

  render() {
    return (
      <div>
        <h1>Edit Your Profile</h1>
        <hr />
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">My account</h3>
              </Col>
              <Col className="text-right" xs="4">
                <NavLink to="/userprofile">Back</NavLink>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            {this.state.error && <p>{this.state.error}</p>}
            <h6 className="heading-small text-muted mb-4">User information</h6>
            <div className="pl-lg-4">
              <form onSubmit={this.onSubmit}>
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
                        value={this.state.name}
                        id="input-username"
                        placeholder="Username"
                        type="text"
                        onChange={this.onNameChange}
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
                        Value={this.state.email}
                        type="email"
                        placeholder="Email"
                        disabled
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        College
                      </label>
                      <Input
                        className="form-control-alternative"
                        Value={this.props.event.college}
                        id="input-username"
                        placeholder="College"
                        type="text"
                        onChange={this.onCollegeChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Course/Branch
                      </label>
                      <Input
                        className="form-control-alternative"
                        Value={this.props.event.branch}
                        id="input-username"
                        placeholder="Branch"
                        type="text"
                        onChange={this.onBranchChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Year of Study
                      </label>
                      <Input
                        className="form-control-alternative"
                        Value={this.props.event.specs}
                        id="input-username"
                        placeholder="Specialization"
                        type="text"
                        onChange={this.onSpecsChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="12">
                    <button className="btn btn-primary">Save</button>
                  </Col>
                </Row>
              </form>
            </div>
            <hr className="my-4" />
            {/* Address */}
            <h6 className="heading-small text-muted mb-4">
              Contact information
            </h6>
            <div className="pl-lg-4">
              <form onSubmit={this.onSubmit}>
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
                        value={this.state.address}
                        id="input-address"
                        placeholder="Home Address"
                        type="text"
                        onChange={this.onAddressChange}
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
                        value={this.state.city}
                        id="input-city"
                        placeholder="City"
                        type="text"
                        onChange={this.onCityChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-country"
                      >
                        State
                      </label>
                      <Input
                        className="form-control-alternative"
                        value={this.state.country}
                        id="input-country"
                        placeholder="State"
                        type="text"
                        onChange={this.onCountryChange}
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
                        value={this.state.postcode}
                        id="input-postal-code"
                        placeholder="Postal code"
                        type="text"
                        onChange={this.onPostChange}
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
                        value={this.state.phonenumber}
                        id="input-phonenumber"
                        placeholder="phonenumber"
                        type="text"
                        onChange={this.onNumberChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="12">
                    <button className="btn btn-primary">Save</button>
                  </Col>
                </Row>
              </form>
            </div>
            <hr className="my-4" />
            {/* Description */}
            {
              // <h6 className="heading-small text-muted mb-4">Merch  </h6>
              // <div className="pl-lg-4">
              //     <form onSubmit={this.onSubmit}>
              //         <label>Colour</label>
              //         <Input
              //             className="form-control-alternative"
              //             placeholder="A few words about you ..."
              //             rows="4"
              //             value={this.state.merch}
              //             type="text"
              //             onChange={this.onMerchChange}
              //         />
              //         <br/>
              //         <button className="btn btn-primary">Save</button>
              //     </form>
              // </div>
            }
          </CardBody>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    event: state.event,
  }
}

export default connect(mapStateToProps)(EditProfile)
