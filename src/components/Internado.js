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

class Internado extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'Internado',
      hasRegistered: this.props.event.Internado,
    }
  }
  render() {
    return (
      <div>
        <Card className="bg-secondary shadow">
          <CardImg
            top
            width="100%"
            src="/events/5A-01.png"
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
              Anveshan'21 event Internado aims at providing students with an
              opportunity to bag their dream internship under esteemed
              scientists, pioneer industrialists and reverent professors from
              the finest organizations. The participants will be given problem
              statements from various industries and research centers and they
              are expected to propose ingenious solutions for the same. The
              winner of the particular problem statement will be offered an
              internship at the concerned research institute or industry.
            </p>
            <CardTitle tag="h1">Event Details</CardTitle>
            <ul>
              <li className="eventtext">
                Problem statements will be released soon along with further
                guidelines.
              </li>
              <li className="eventtext">
                The first round will constitute of abstract submission.
              </li>
              <li className="eventtext">
                {' '}
                In the second round, shortlisted participants will present their
                solutions in front of a panel of judges.
              </li>
              <li className="eventtext">
                The selected students will be offered internships under the
                respective industries and research centers.
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

            {this.props.event.Internado ? (
              <p>You have registered to this event !</p>
            ) : (
              <p>Click the Button to register in this event.</p>
            )}

            {this.props.event.Internado ? (
              <Button
                onClick={() => {
                  this.props.dispatch(
                    editEvents({ Internado: false }, this.state.type),
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
                    editEvents({ Internado: true }, this.state.type),
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

export default connect(mapStateToProps)(Internado)
