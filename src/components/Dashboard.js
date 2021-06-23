import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import { createEvents } from '../actions/event'
import { Button, Row, Col, Card } from 'reactstrap'
import EventItem from './EventItem'

const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {props.user.name} !</p>
      <p>
        <Button
          color="success"
          onClick={() => {
            // props.dispatch(createEvents())
            // window.location.reload()
            window.location.href =
              'https://www.anveshaniitbhu.com/paymentinfo.html'
          }}
          disabled={props.event.hasPayed}
        >
          Make Payment !
        </Button>
      </p>
      {!props.event.hasPayed && (
        <p className="text-bold ">
        Please fill in all the details in the user profile to complete your registration.
        </p>
      )}
      {props.event.hasPayed && (
        <p className="text-bold">
          You can now participate in different events by going to the event
          section.
        </p>
      )}
      <p className="text-bold">
      Workshops and Guest lectures are open to all. You can now attend them by going to their respective sections.
      </p>
      <hr />
      <Card className="bg-secondary shadow">
        <div className="card-header ">
          <div className="align-items-center row">
            <div className="col text-center">
              <h2 className="mb-0">Your Events</h2>
              <br/>
              <p>New Updates: <NavLink to="/workshop">Workshops</NavLink></p>
              {!props.event.hasPayed && (
                <p className="text-muted">
                  Please pay the registration fees in order to register in
                  different events!
                </p>
              )}
            </div>
          </div>
        </div>
        <Row className="py-3">
          {props.event.Literatium && (
            <Col sm="12" md="4" className="text-center">
              <NavLink to="/Literatium" exact={true}>
                <EventItem imgURL={'/events/8.png'} eventName={'Literatium'} />
              </NavLink>
            </Col>
          )}
          {props.event.Internado && (
            <Col sm="12" md="4" className="text-center">
              <NavLink to="/Internado" exact={true}>
                <EventItem imgURL={'/events/2.png'} eventName={'Internado'} />
              </NavLink>
            </Col>
          )}
          {props.event.CodeMet && (
            <Col sm="12" md="4" className="text-center">
              <NavLink to="/CodeMet" exact={true}>
                <EventItem imgURL={'/events/3.png'} eventName={'Codemet'} />
              </NavLink>
            </Col>
          )}
          {props.event.Initio && (
            <Col sm="12" md="4" className="text-center">
              <NavLink to="/Initio" exact={true}>
                <EventItem imgURL={'/events/1.png'} eventName={'Initio'} />
              </NavLink>
            </Col>
          )}
          {props.event.Metcon && (
            <Col sm="12" md="4" className="text-center">
              <NavLink to="/Metcon" exact={true}>
                <EventItem imgURL={'/events/6.jpeg'} eventName={'Metcon'} />
              </NavLink>
            </Col>
          )}
          {props.event.Snapshot && (
            <Col sm="12" md="4" className="text-center">
              <NavLink to="/Snapshot" exact={true}>
                <EventItem imgURL={'/events/7.png'} eventName={'Snapshot'} />
              </NavLink>
            </Col>
          )}
          {props.event.Rivista && (
            <Col sm="12" md="4" className="text-center">
              <NavLink to="/Rivista" exact={true}>
                <EventItem imgURL={'/events/5.png'} eventName={'Rivista'} />
              </NavLink>
            </Col>
          )}
          {props.event.Quarks && (
            <Col sm="12" md="4" className="text-center">
              <NavLink to="/Quarks" exact={true}>
                <EventItem imgURL={'/events/4.png'} eventName={'Quarks'} />
              </NavLink>
            </Col>
          )}
        </Row>
      </Card>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    event: state.event,
  }
}

export default connect(mapStateToProps)(Dashboard)
