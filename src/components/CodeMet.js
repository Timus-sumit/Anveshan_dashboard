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
class CodeMet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'CodeMet',
    }
  }
  render() {
    return (
      <div>
        <Card className="bg-secondary shadow">
          <CardImg
            top
            width="100%"
            src="/events/CODEMET.png"
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
              The disruptive digital technology and sustaining materials’
              innovation have merged to lutionize the dynamics of material
              science study. Anveshan’21 brings CODEMET – an opportunity to
              amalgamate programming and practical processes to immerse you in
              the realm of computation. This event's aim is to create the most
              efficient code that gives the best solution to the problem by
              applying fundamental programming and simulation tools
              <br />
              <br />
            </p>
            <CardTitle tag="h1">Event Details</CardTitle>
            <ul>
              <li className="eventtext">
                CODEMET will be conducted on our partner’s website.
              </li>
              <li className="eventtext">
                It is an online event, and the problems will be uploaded during
                March/April.
              </li>
              <li className="eventtext">
                There will be four problems, and each question will have
                different points according to their difficulty level.
              </li>
              <li className="eventtext">
                Participants will be evaluated based on the efficiency of their
                program.
              </li>
              <li className="eventtext">
                There will be prizes for the top three winners for each problem
                statement.
              </li>
              <li className="eventtext">
                The final 3 participants in the points tally would be the
                overall winners of CODEMET.
              </li>
              <li className="eventtext">
                {' '}
                The problems will be based on industrial computational
                challenges faced in real life{' '}
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

            {this.props.event.CodeMet ? (
              <p>You have registered to this event !</p>
            ) : (
              <p>Click the Button to register in this event.</p>
            )}

            {this.props.event.CodeMet ? (
              <Button
                onClick={() => {
                  this.props.dispatch(
                    editEvents({ CodeMet: false }, this.state.type),
                  )
                  window.location.reload()
                }}
              >
                Unregister
              </Button>
            ) : (
              <Button
                onClick={() => {
                  this.props.dispatch(
                    editEvents({ CodeMet: true }, this.state.type),
                  )
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

export default connect(mapStateToProps)(CodeMet)
