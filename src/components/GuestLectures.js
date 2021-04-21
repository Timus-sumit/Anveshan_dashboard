import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createEvents } from '../actions/event';
import { Button, Card, CardBody, Row, Col, Container } from 'reactstrap';
import EventItem from './EventItem';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasPayed: false,
    };
  }
  render() {
    return (
      <div>
        <h1>Events</h1>

        <hr />
        <Container fluid>
          <h1>Coming Soon</h1>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    event: state.event,
  };
};

export default connect(mapStateToProps)(Events);
