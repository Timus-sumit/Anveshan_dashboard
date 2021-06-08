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
class Literatium extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'Literatium',
      hasRegistered: this.props.event.Literatium,
    }
  }
  render() {
    return (
      <div>
        <Card className="bg-secondary shadow">
          <CardImg
            top
            width="100%"
            src="/events/LITERATIUM.png"
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
              {' '}
              "Good writing is clear thinking made visible" - William Wheeler,
              journalist and author
              <br />
              <br />
              Do you want to tell the l about your knowledge of materials?
              <br />
              Do you want to flaunt your writing skills?
              <br />
              Well here's your chance
              <br />
              <br />
              Anveshan’21 presents Literatium ,an article writing competition
              which aims to inspire students to show their writing skills in
              Materials and Metallurgical domain. Participants will have to
              write an article on one of the topics from the list given below.
            </p>

            <CardTitle tag="h1">Event Details</CardTitle>
            <ul>
              <li className="eventtext">
                A list of 10 topics is being given along with instructions.
              </li>
              <li className="eventtext">
                A participant must choose a topic from that list and write an
                article on it.
              </li>
              <li className="eventtext">
                {' '}
                The word limit for the articles is xxxx words and submission
                will be taken via google forms.
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

            {this.props.event.Literatium ? (
              <p>You have registered to this event !</p>
            ) : (
              <p>Click the Button to register in this event.</p>
            )}

            {this.props.event.Literatium ? (
              <Button
                onClick={() => {
                  this.props.dispatch(
                    editEvents({ Literatium: false }, this.state.type),
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
                    editEvents({ Literatium: true }, this.state.type),
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

export default connect(mapStateToProps)(Literatium)
