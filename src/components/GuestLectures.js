import React from 'react'
import { connect } from 'react-redux'

class Events extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasPayed: false,
    }
  }
  render() {
    return (
      <section
        class="why-us section-bg"
        data-aos="fade-up"
        date-aos-delay="200"
      >
        <div className="section-title">
          <h2>Guest Lectures</h2>
        </div>
        <div class="container mb-4">
          <div class="row">
            <div class="col-lg-6 video-box">
              <img src="/guests/Bhadesh.png" class="img-fluid" alt="" />
            </div>

            <div class="col-lg-6 d-flex flex-column justify-content-center">
              <div class="icon-box">
                <br />
                <h4 class="title">Breaking paradigms in steel technologies.</h4>
                <br />
                <h4 class="title">Professor Sir H. K. D. Harry Bhadeshia</h4>
                <h2 className="affiliation">
                  FREng, FRS, FNAE,
                  <br />
                  Tata Steel Professor of Metallurgy,
                  <br />
                  University of Cambridge, U.K.
                </h2>
                <p class="description">
                  <br />
                  <span>Program Highlights:</span>
                  <ul>
                    <li>
                      Why other materials fail to dent the success of steel
                    </li>
                    <li>
                      Need to use less steel in order to cope with the carbon
                      dioxide release associated with the manufacturing process
                    </li>
                    <li>Radical new ways of making better use of less steel</li>
                  </ul>
                  <br />
                  <span>Date | Time | Platform:</span>
                  <br />
                  25th June | 3:30 PM to 5:00 PM (IST) | Microsoft Teams
                  <div className="mt-4">
                    <a href="">Attend Lecture</a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container mb-4">
          <div class="row">
            <div class="col-lg-6 video-box">
              <img src="/guests/Rohatgi1.png" class="img-fluid" alt="" />
            </div>

            <div class="col-lg-6 d-flex flex-column justify-content-center">
              <div class="icon-box">
                <br />
                <h4 className="title">
                  Metal Matrix Composites over last 50 years and future
                  opportunities in India
                </h4>
                <br />
                <h4 class="title">Dr. Pradeep K. Rohatgi</h4>
                <h2 className="affiliation">
                  ScD (MIT),
                  <br />
                  State of Wisconsin and UWM Distinguished Professor
                  <br />
                  Director of UWM Centers for Composites and Advanced Materials
                  Manufacture
                  <br />
                  University of Wisconsin-Milwaukee, USA
                </h2>
                <p class="description">
                  <br />
                  <span>Program Highlights:</span>
                  <ul>
                    <li>
                      Discovery and property motivation to use Cast Metal Matrix
                      Composites (MMC)
                    </li>
                    <li>Global market and recent trends in MMC</li>
                    <li> Scientific issues, research imperatives</li>
                    <li>
                      {' '}
                      Metal Matrix Composites Currently used; potential in India
                    </li>
                  </ul>
                  <br />
                  <span>Date | Time | Platform:</span>
                  <b />
                  26th June | 7:00 PM to 8:30 PM (IST) | Microsoft Teams
                  <div className="mt-4">
                    <a href="">Attend Lecture</a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container mb-4">
          <div class="row">
            <div class="col-lg-6 video-box">
              <img src="/guests/ajayan.jpg" class="img-fluid" alt="" />
            </div>

            <div class="col-lg-6 d-flex flex-column justify-content-center">
              <div class="icon-box">
                <h4 className="title">NanoEngineered Materials</h4>
                <br />
                <br />
                <h4 class="title">Professor Pulickel Ajayan</h4>
                <h2 className="affiliation">
                  Benjamin M. and Mary Greenwood Anderson Professor of
                  Engineering,
                  <br />
                  Department of Materials Science and NanoEngineering,
                  <br />
                  Rice University, USA.
                </h2>
                <p class="description">
                  <br />
                  <br />
                  <span>Date | Time | Platform:</span>
                  <br />
                  27th June | 7:30 PM to 8:30 PM (IST) | Microsoft Teams
                  <div className="mt-4">
                    <a href="">Attend Lecture</a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    event: state.event,
  }
}

export default connect(mapStateToProps)(Events)
