import React from 'react'
import { connect } from 'react-redux'
import { editEvents } from '../actions/event'
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
  CardImg,
  CardHeader,
  Row,
  Col,
} from 'reactstrap'

class Quarks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'Quarks',
      hasRegistered: this.props.event.Quarks,
    }
  }
  render() {
    return (
      <div>
        <Card className="bg-secondary shadow">
          <CardImg
            top
            width="100%"
            src="/events/QUARKS.png"
            alt="Card image cap"
          />
          <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
              <Col xs="12">
                <h1 className="mb-0 text-center eventTitle">
                  {this.state.type.toLocaleUpperCase()}
                </h1>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <CardTitle tag="h1">Event Description</CardTitle>
            <p className="eventtext">
              "An Investment in knowledge pays the best interest.” - Benjamin
              Franklin
              <br />
              <br />
              Anveshan'21 presents to you it’s exhilarating quizzing competition
              ‘Quarks' which gives you an excellent opportunity to showcase your
              knowledge about materials and metallurgy. No pre-requisites are
              required, except for your zest to know more. So, brush up your
              facts and join us in this brainstorming quiz where you will get to
              compete against many extraordinary minds of the country.
            </p>
            <CardTitle tag="h1">Event Details</CardTitle>
            <ul>
              <li className="eventext">
                The quiz will be conducted online in two rounds: Forged in Fire
                and Conquer the quark.
              </li>
              <li className="eventext">This will be an individual event. </li>
              <li className="eventext">
                The 1st round will consist of 20 single correct type questions
                with 14 min time.{' '}
              </li>
              <li className="eventext">
                The top 40% of participants will qualify for the final round.{' '}
              </li>
              <li className="eventext">
                Details of the final rounds will be informed to selected
                candidates.{' '}
              </li>
              <li className="eventext">
                Participants will be required to turn on their webcam during
                round 2.{' '}
              </li>
            </ul>

            <br />
            <br />

            <CardTitle tag="h1">Updates</CardTitle>
            <p className="eventtext">
              Updates for this event will be shown here.
            </p>
            <br />
            <br />

            {this.props.event.Quarks ? (
              <p>You have registered to this event !</p>
            ) : (
              <p>Click the Button to register in this event.</p>
            )}

            {this.props.event.Quarks ? (
              <Button
                onClick={() => {
                  this.props.dispatch(
                    editEvents({ Quarks: false }, this.state.type),
                  )
                  window.location.reload()
                  this.setState(() => ({ hasRegistered: false }))
                }}
              >
                Unregister
              </Button>
            ) : (
              <Button
                onClick={() => {
                  this.props.dispatch(
                    editEvents({ Quarks: true }, this.state.type),
                  )
                  window.location.reload()
                  this.setState(() => ({ hasRegistered: true }))
                }}
                disabled={!this.props.event.hasPayed}
              >
                Register !
              </Button>
            )}
          </CardBody>
        </Card>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    event: state.event,
  }
}

export default connect(mapStateToProps)(Quarks)
