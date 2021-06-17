import React from 'react'
import { connect } from 'react-redux'
import { editEvents } from '../actions/event'
import {
  Card,
  CardBody,
  CardTitle,
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
            src="/events/SNAPSHOT.png"
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
                This edition of snapshot will have the following three themes:
                Fractura, Rusty treasure, Weld the icon.
              </li>
              <li className="eventtext">
                Participants shall choose one of the three themes.
              </li>
              <li className="eventtext">
                In each theme, three subcategories are there: Title( less than 5
                words), The Snap, Short story behind the snap (40-50 words).
              </li>
              <li className="eventtext">
                The participant should submit, title, snap, and the story behind
                the snap through form link provided in the Events section of the
                Dashboard portal.
              </li>
            </ul>
            <br />
            <CardTitle tag="h1">Description of themes</CardTitle>
            <p className="eventtext">Fractura----pics based on: </p>
            <ul>
              <li className="eventtext">
                Various fractures or failures. (e.g-brittle fracture of graphite
                pencil nib while writing).
              </li>
              <li className="eventtext">
                Materials showing Fatigue or Creep behavior. (e.g-connecting
                rods of tyres in 4 wheelers showing fatigue behaviour).
              </li>
              <li className="eventtext">
                Plastic deformation. (e.g-deformation of vehicle's mask due to
                heavy collision).
              </li>
              <li className="eventtext">
                Any macroscopic defects. (e.g-visible cracks on any surface).
              </li>
              <li className="eventtext">
                Defective formed parts (e.g-defective utensils that are used for
                cooking).
              </li>
            </ul>
            <p className="eventtext">Rusty treasure---pics based on: </p>
            <ul>
              <li className="eventtext">
                General types of corrosion (e.g-rust).
              </li>
              <li className="eventtext">
                Special or rare corrosion phenomena's (e.g-pitting corrosion).
              </li>
              <li className="eventtext">
                Preventing Corrosion creatively (e.g-Galvanization).
              </li>
            </ul>
            <p className="eventtext">Weld the icon---pics based on: </p>
            <ul>
              <li className="eventtext">
                Machines used for welding (e.g.- Mig welding).
              </li>
              <li className="eventtext">
                General welded joint (e.g.- Tee joint, Butt joint).
              </li>
              <li className="eventtext">
                Defects in welding (e.g.- hot cracking, undercut).
              </li>
            </ul>
            <p className="eventtext">Guidelines: </p>
            <ul>
              <li className="eventtext">
                Higher priority will be given to the creativity of snap while
                evaluation.
              </li>
              <li className="eventtext">
                The snap must be your original creation. It shouldn’t match with
                materials on the internet.
              </li>
            </ul>
            <br />

            <CardTitle tag="h1">Updates</CardTitle>
            {!this.props.event.Snapshot && <p className="eventtext">
              Updates for this event will be shown here.
            </p>}
            {this.props.event.Snapshot && <p className="eventtext">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdoPXlnwl94qTpTyJwxT3ZUgw9o4wbtXztA-C1reJBaW3YrTg/viewform?usp=sf_link" 
            target="_blank" rel="noopener noreferrer">Submit Your Snaps</a>
          </p>}
            <br />
            <br />

            {this.props.event.Snapshot ? (
              <p>You have been registered to this event !</p>
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
