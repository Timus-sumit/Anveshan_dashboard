import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { createEvents } from '../actions/event'
import {
  Button,
  Card,
  CardImg,
  CardBody,
  Row,
  Col,
  Container,
} from 'reactstrap'
import EventItem from './EventItem'

class Events extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasPayed: false,
    }
  }
  render() {
    return (
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Guest Lectures</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div
                className="member d-flex align-items-start"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="pic">
                  <img
                    src="/guests/Baldev Raj.jpeg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Dr. Baldev Raj</h4>
                  <span>NIAS, IISC Banglore</span>
                  <p>Lecture on 25/06/21 at 3PM </p>
                  <div className="mt-4">
                    <a href="">Attend Lecture</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div
                className="member d-flex align-items-start"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="pic">
                  <img
                    src="/guests/Baldev Raj.jpeg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Dr. Baldev Raj</h4>
                  <span>NIAS, IISC Banglore</span>
                  <p>Lecture on 25/06/21 at 3PM </p>
                  <div className="mt-4">
                    <a href="">Attend Lecture</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div
                className="member d-flex align-items-start"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="pic">
                  <img
                    src="/guests/Baldev Raj.jpeg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Dr. Baldev Raj</h4>
                  <span>NIAS, IISC Banglore</span>
                  <p>Lecture on 25/06/21 at 3PM </p>
                  <div className="mt-4">
                    <a href="">Attend Lecture</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div
                className="member d-flex align-items-start"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="pic">
                  <img
                    src="/guests/Baldev Raj.jpeg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Dr. Baldev Raj</h4>
                  <span>NIAS, IISC Banglore</span>
                  <p>Lecture on 25/06/21 at 3PM </p>
                  <div className="mt-4">
                    <a href="">Attend Lecture</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    event: state.event,
  }
}

export default connect(mapStateToProps)(Events)
