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

class Snapshot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'Snapshot',
      hasRegistered: this.props.event.Snapshot,
    }
  }
  render() {
    return (
      <div>
        <Card className="bg-secondary shadow">
          <CardImg
            top
            width="100%"
            src="/events/2A-01.png"
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
              Snapshot is a virtual event that encourages aspiring photographers
              to showcase their creativity and perceive photogenic beauty. The
              event's concept is to capture the fascinating idea behind every
              click in materials and metallurgical domains.
            </p>
            <CardTitle tag="h1">Event Details</CardTitle>
            <ul>
              <li className="eventtext">
                All materials-related snapshots with a justifying tagline will
                be considered.
              </li>
              <li className="eventtext">
                These snapshots have to be mailed at the official mail id of
                Anveshan’21.
              </li>
              <li className="eventtext">
                The commencement of the event will be notified on the official
                website of Anveshan’21.
              </li>
              <li className="eventtext">
                All the eye-catching snapshots will be posted on the official
                Facebook page of Anveshan’21 daily.
              </li>
              <li className="eventtext">
                The winner among these best snapshots will be declared on the
                final day of the fest.
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

            {this.props.event.Snapshot ? (
              <p>You have registered to this event !</p>
            ) : (
              <p>Click the Button to register in this event.</p>
            )}

            {this.props.event.Snapshot ? (
              <Button
                onClick={() => {
                  this.props.dispatch(
                    editEvents({ Snapshot: false }, this.state.type),
                  )
                  this.setState(() => ({ hasRegistered: false }))
                  window.location.reload()
                }}
              >
                Unregister
              </Button>
            ) : (
              <Button
                onClick={() => {
                  this.props.dispatch(
                    editEvents({ Snapshot: true }, this.state.type),
                  )
                  this.setState(() => ({ hasRegistered: true }))
                  window.location.reload()
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

export default connect(mapStateToProps)(Snapshot)
