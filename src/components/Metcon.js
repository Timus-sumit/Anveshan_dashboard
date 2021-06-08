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
class Metcon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'Metcon',
      hasRegistered: this.props.event.Metcon,
    }
  }
  render() {
    return (
      <div>
        <Card className="bg-secondary shadow">
          <CardImg
            top
            width="100%"
            src="/events/METCON.png"
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
              “For good ideas and true innovation, you need human interaction,
              conflict, argument, debate”. -Margaret Heffernan
              <br />
              <br />
              Anveshan'21 presents it’s event METCON which provides students a
              perfect juncture to think out-of-the-box solutions to address a
              litany of challenges faced globally. A council comprising of 20
              member nations will discuss burning global disputes in an online
              meet and form a resolution. Participants will represent
              delegations from different countries. Grab this opportunity to
              taste the flairs of Diplomacy and International Relations.
              Experience the heat of debates and showcase your expertise in the
              domain of delegacy.
            </p>
            <CardTitle tag="h1">Event Details</CardTitle>
            <ul>
              <li className="eventtext">
                First round is the abstract submission round. The agenda of the
                conference will be rolled out soon. Participants are required to
                submit an abstract depicting the world scenario of the agenda on
                or before the notified date.
              </li>
              <li className="eventtext">
                Shortlisted students for the 2nd round will be notified about
                their country.
              </li>
              <li className="eventtext">
                The 2nd round will be held during Anveshan’21 in the form of an
                online conference. Participants will represent their country and
                showcase their oratory and diplomatic skills in front of the
                Chair and Vice-Chair of METCON.
              </li>
              <li className="eventtext">
                At the end of the conference, the delegates will be submitting a
                comprehensive resolution paper. The resolutions paper with
                maximum support will be adopted in the final draft of the
                conference.
              </li>
              <li className="eventtext">
                The Chair and Vice-Chair will assess and declare the winning
                delegate based on his depth of knowledge, soft skills, and
                authorship of the resolutions paper.
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

            {this.props.event.Metcon ? (
              <p>You have registered to this event !</p>
            ) : (
              <p>Click the Button to register in this event.</p>
            )}

            {this.props.event.Metcon ? (
              <Button
                onClick={() => {
                  this.props.dispatch(
                    editEvents({ Metcon: false }, this.state.type),
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
                    editEvents({ Metcon: true }, this.state.type),
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

export default connect(mapStateToProps)(Metcon)
