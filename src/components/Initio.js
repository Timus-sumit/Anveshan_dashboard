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
class Initio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'Initio',
      hasRegistered: this.props.event.Initio,
    }
  }
  render() {
    return (
      <div>
        <Card className="bg-secondary shadow">
          <CardImg
            top
            width="100%"
            src="/events/INITIO.png"
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
              Anveshan '21 brings you a floor for a synergistic interaction
              between academia and industry. Academic research and industrial
              technologies can collaborate to foster innovations and economic
              growth. The idea behind this collaboration is to conceive a
              logical solution to various challenges faced by the industries and
              research institutes using your knowledge and wisdom. The
              participants are introduced to the challenges faced by modern
              industries across the globe. The event aims to put forth an
              innovative yet sustainable solution to these problems. In the
              event 'INITIO,' as the name suggests, 'initiative' or 'beginning,'
              the solutions should replace or modify the existing technologies
              and initiate unique, practically feasible, and economically viable
              methods.
            </p>
            <CardTitle tag="h1">Event Details</CardTitle>
            <ul>
              <li className="eventtext">
                The problem statement will be provided soon.
              </li>
              <li className="eventtext">
                Each team can contain a said number by the respective industry.
              </li>
              <li className="eventtext">
                First-round will be an abstract submission, and selected
                students will take part in the finals.
              </li>
              <li className="eventtext">
                In the final round, qualified teams are contacted and called
                under a platform and asked to disclose their solutions and ideas
                to all judges'.
              </li>
            </ul>
            <br />
            <CardTitle tag="h1">
              Assessment will be based on the following parameters.
            </CardTitle>
            <ul>
              <li className="eventtext">Address the problem.</li>
              <li className="eventtext">Solution to the problem.</li>
              <li className="eventtext">Feasibility of the solution.</li>
              <li className="eventtext">Economic viability.</li>
              <li className="eventtext">Practical Feasibility.</li>
              <li className="eventtext">Sustainability</li>
              <li className="eventtext">
                Literature survey / Acknowledgement.
              </li>
            </ul>

            <br />
            <br />

            <CardTitle tag="h1">Updates</CardTitle>
            <p className="eventtext">
              <a
                href="https://docs.google.com/document/d/1_XCcv8fJzF8SRWbfb8uCSN7pYjntQxdq13RnATRApiY/edit?usp=sharing
              "
                target="_blank"
                rel="noopener noreferrer"
              >
                Problem Statement #1
              </a>
            </p>
            <p className="eventtext">
              <a
                href="https://docs.google.com/document/d/1EP6i4qOeL_faWSQBYqisVlVnI1J6Ad2IoCO-HaI_mPM/edit?usp=sharing
              "
                target="_blank"
                rel="noopener noreferrer"
              >
                Problem Statement #2
              </a>
            </p>
            {this.props.event.Initio && (
              <p className="eventtext">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdjwcC3Itxrt7BHTlQBLkykcIFifZoKoz9ZKuB2YPcDypHm0g/viewform?usp=sf_link"
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

            {this.props.event.Initio ? (
              <p>You have been registered to this event !</p>
            ) : (
              <p></p>
            )}

            {/*this.props.event.Initio ? (
              <Button
                onClick={() => {
                  this.props.dispatch(
                    editEvents({ Initio: false }, this.state.type),
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
                    editEvents({ Initio: true }, this.state.type),
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

export default connect(mapStateToProps)(Initio)
