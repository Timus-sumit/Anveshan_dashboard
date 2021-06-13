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
              <li className="eventtext">The event will comprise two rounds.</li>
              <li className="eventtext">
                For the first round, topics will be released on 17th June, and a
                participant must choose a topic from the list And write an
                article on it, with the word limit being 1000 words.
              </li>
              <li className="eventtext">
                The last date for submission of Round 1 will be on 22rd June.
              </li>
              <li className="eventtext">
                The top 10 contestants of 1st round will move on to the 2nd
                round.
              </li>
              <li className="eventtext">
                The topics for the 2nd round will be provided on 25th June.
                (Word limit : 800 words)
              </li>
              <li className="eventtext">
                The best article will also get a feature on the website and the
                social media page along with prizes.
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
