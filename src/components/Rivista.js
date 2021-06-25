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

class Rivista extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'Rivista',
      hasRegistered: this.props.event.Rivista,
    }
  }
  render() {
    return (
      <div>
        <Card className="bg-secondary shadow">
          <CardImg
            top
            width="100%"
            src="/events/rivista.png"
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
              Anveshan '21 presents a captivating and unique online platform to
              emblazon one's research skill culminating in the form of a paper
              and poster presentation contest- RIVISTA. This event gives an
              opportunity to display your work in the field of metallurgy
              interactively to a group of scholars of eminent repute and receive
              feedback from the interested audience. It corroborates to
              discussion of the emerging technologies in this field and ideas in
              one's domain of interest with various probable perspectives,
              outlooks, and solutions by the panel of judges. So, Gear up and
              reveal your technical and presentation skills by chipping in at
              our engaging platform by demonstrating them as ppt presentation.
            </p>
            <CardTitle tag="h1">Event Details</CardTitle>
            <ul>
              <li className="eventtext">
                The first round is the abstract submission round. Qualifying
                teams will move to the next round.
              </li>
              <li className="eventtext">
                The deadline for the first round will be 22nd June 2021, 11:59
                PM.
              </li>
              <li className="eventtext">
                The second round will be a presentation round held during
                Anveshan ’21 in which teams will have to deliver a presentation
                in front of a panel of judges.
              </li>
              <li className="eventtext">
                The contestant has to pick one of the following topics and give
                a presentation in front of the jury consisting of professors.
                The presentation will be regarding an ongoing
                research/experiment in the mentioned fields.
              </li>
            </ul>

            <CardTitle tag="h1">Categories</CardTitle>
            <ul>
              <li className="eventtext">Physical Metallurgy </li>
              <li className="eventtext">Extractive Metallurgy </li>
              <li className="eventtext">Mechanical Metallurgy </li>
              <li className="eventtext">Computational Metallurgy</li>
              <li className="eventtext">Advanced Materials</li>
            </ul>

            <br />
            <br />

            <CardTitle tag="h1">Updates</CardTitle>
            {!this.props.event.Rivista && (
              <p className="eventtext">
                Updates for this event will be shown here.
              </p>
            )}
            {this.props.event.Rivista && (
              <p className="eventtext">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfbeaOzdXUg63oAguDDOD1qSItTh6vpHZeIRS5OnJW7sQbDIQ/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Submit Your Abstract
                </a>
              </p>
            )}
            <p className="eventtext">Registration Closed</p>
            <br />
            <br />

            {this.props.event.Rivista ? (
              <p>You have been registered to this event !</p>
            ) : (
              <p></p>
            )}

            {/*this.props.event.Rivista ? (
              <Button
                onClick={() => {
                  this.props.dispatch(
                    editEvents({ Rivista: false }, this.state.type),
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
                    editEvents({ Rivista: true }, this.state.type),
                  )
                  this.setState(() => ({ hasRegistered: true }))
                  window.location.reload()
                }}
                disabled={!this.props.event.hasPayed}
              >
                Register !
              </Button>
              )*/}
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

export default connect(mapStateToProps)(Rivista)
