import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createEvents } from '../actions/event';
import { Button, Card,CardImg, CardBody, Row, Col, Container } from 'reactstrap';
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
      <div>
          <Card className="bg-secondary shadow">
              <CardImg top width="100%" src="/coming-soon.jpg" alt="Card image cap" />
          </Card>
      </div>
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
