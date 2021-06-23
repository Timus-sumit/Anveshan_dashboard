import React from 'react'

class TechTalk extends React.Component {
  render() {
    return (
      <section
        class="why-us section-bg"
        data-aos="fade-up"
        date-aos-delay="200"
      >
        <div className="section-title">
          <h2>Tech Talk</h2>
        </div>
        <div class="container mb-4">
          <div class="row">
            <div class="col-lg-6 video-box">
              <img src="/workshop/tech talk.png" class="img-fluid" alt="" />
            </div>

            <div class="col-lg-6 d-flex flex-column justify-content-center">
              <div class="icon-box">
                <h4 className="title">
                  {' '}
                  Document oriented databases in production: Introduction to
                  Elasticsearch
                </h4>
                <br />
                <br />
                <h4 class="title">Harsh Paliwal</h4>
                <h2 className="affiliation">SWE at Cisco</h2>
                <p class="description">
                  <br />
                  <span>Program Highlights:</span>
                  <ul>
                    <li>Basics of Documents oriented database</li>
                    <li>Introduction to Elastic Search</li>
                    <li>
                      {' '}
                      Why all the companies are shifting to this new technology
                    </li>
                    <li>
                      Importance of related technology in the perspective of the
                      campus placement
                    </li>
                  </ul>
                  <br />
                  <span>Date | Time | Platform:</span>
                  <br />
                  27 June | 10:30 AM (IST) | Microsoft Teams
                  <div className="mt-4">
                    <p className="eventtext">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSciYdA7qQTGENAo73H6jZoV2IziroaKxDySyp63ljaqWxHvRg/viewform?usp=sf_link
                  "
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Register Here!
                      </a>
                    </p>
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

export default TechTalk
