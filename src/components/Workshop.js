import React from 'react'
import { Card, CardImg } from 'reactstrap'

class Workshop extends React.Component {
  render() {
    return (
      <section
        class="why-us section-bg"
        data-aos="fade-up"
        date-aos-delay="200"
      >
        <div className="section-title">
          <h2>Workshops</h2>
        </div>
        <div class="container mb-4">
          <div class="row">
            <div class="col-lg-6 video-box">
              <img src="/workshop/Abhishek.jpg" class="img-fluid" alt="" />
            </div>

            <div class="col-lg-6 d-flex flex-column justify-content-center">
              <div class="icon-box">
                <h4 class="title">Abhishek Kumar Thakur</h4>
                <h2 className="affiliation">
                  Ph.D., The University of Arizona, United States
                </h2>
                <p class="description">
                  <span>Topic:</span> Application of machine learning in
                  materials science using python
                  <br />
                  <br />
                  <span>Program Highlights:</span> Induce a notion of the
                  Potential of Machine Learning,
                  <br />
                  How ML can be Benificial to Metallurgical & Material Science
                  Community
                  <br />
                  <br />
                  <span>Date | Time | Platform:</span>
                  <br />
                  25th June 2021 | 18:00 (IST) or 6PM |Microsoft Teams
                  <div className="mt-4">
                    <a href="">Attend Workshop</a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container mb-4">
          <div class="row">
            <div class="col-lg-6 video-box">
              <img src="/workshop/Dharmveer.jpg" class="img-fluid" alt="" />
            </div>

            <div class="col-lg-6 d-flex flex-column justify-content-center">
              <div class="icon-box">
                <h4 class="title">Dharmveer Yadav</h4>
                <h2 className="affiliation">
                  Centre for Research in Nanotechnology and Science, India
                  Institute of Technology Bombay, Mumbai, India
                </h2>
                <p class="description">
                  <span>Topic:</span> Carbon composit materials for organic
                  contaminant removal
                  <br />
                  <br />
                  <span>Program Highlights:</span> Sources of organic
                  pollutants,
                  <br />
                  Impact of Pollutants on Humans & Environment,
                  <br />
                  Need For removal of Pollutants, <br />
                  Method for Removal of Organic Pollutants
                  <br />
                  <br />
                  <span>Date | Time | Platform:</span>
                  <br />
                  26th June 2021 | 18:00 (IST) or 6PM |Microsoft Teams
                  <div className="mt-4">
                    <a href="">Attend Workshop</a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container mb-4">
          <div class="row">
            <div class="col-lg-6 video-box">
              <img src="/workshop/Sweta.jpg" class="img-fluid" alt="" />
            </div>

            <div class="col-lg-6 d-flex flex-column justify-content-center">
              <div class="icon-box">
                <h4 class="title">Sweta Rani</h4>
                <h2 className="affiliation">
                  Research Scholar at IITB-Monash Research Academy, Indian
                  Institute of Technology Bombay, Mumbai, India
                </h2>
                <p class="description">
                  <span>Topic:</span> Introduction to Fabrication and Modeling
                  of Photonic Devices
                  <br />
                  <br />
                  <span>Program Highlights:</span> Significance of photonic
                  devices,
                  <br />
                  Existing techniques for fabricating photonic
                  micro/nanostructures,
                  <br />
                  Two-photon lithography and its advantagess, <br />
                  Modeling of a photonic micro/nanostructure using COMSOL
                  <br />
                  <br />
                  <span>Date | Time | Platform:</span>
                  <br />
                  27th June 2021 | 18:00 (IST) or 6PM |Microsoft Teams
                  <div className="mt-4">
                    <a href="">Attend Workshop</a>
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

export default Workshop
