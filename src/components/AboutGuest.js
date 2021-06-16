import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class AboutGuests extends React.Component {
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
          <h2>About the Speakers</h2>
        </div>
        <div class="container mb-4">
          <div class="row">
            <div class="col-lg-6 video-box">
              <img src="/guests/Bhadesh.png" class="img-fluid" alt="" />
            </div>

            <div class="col-lg-6 d-flex flex-column justify-content-center">
              <div class="icon-box">
                <br />
                <h4 class="title">Professor Sir H. K. D. Harry Bhadeshia</h4>
                <p class="description">
                  <br />
                  Professor Sir H. K. D. H. Bhadeshia is the Tata Steel
                  Professor of Metallurgy at the University of Cambridge, UK .
                  His work on solid-state phase transformations has contributed
                  to the invention of new alloys and towards the better
                  processing of existing alloys to achieve unusual properties.
                  His mathematical methods can be used to reduce the vast number
                  of parameters that have to be controlled during the creation
                  and manufacture of new alloys. He is the author or co-author
                  of more than 650 research papers and six books on the subject.
                  He is a Fellow of the Royal Society, Fellow of the Royal
                  Academy of Engineering, the National Academy of Engineering
                  (India) and the American Welding Society. In 2015, he was
                  appointed a Knight Bachelor in the Queen's 2015 Birthday
                  Honours for services to Science and Technology.
                </p>
                <div className="my-4">
                  <Link to="/guestlectures">back</Link>
                </div>
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
                <h4 class="title">Dr. Pradeep K. Rohatgi</h4>
                <p class="description">
                  <br />
                  Professor (Dr.) Pradeep Rohatgi received undergraduate degree
                  from Indian Institute of Technology - Banaras Hindu University
                  in 1961, and Doctorate in science from MIT in 1964. He served
                  as a professor at Indian Institute of Science, Bangalore and
                  Indian Institute of Technology, Kanpur after working in
                  industry for many years. He then served as the Founder,
                  Director of two National Laboratories in India – National
                  Institute of Interdisciplinary Science and Technology,
                  Trivandrum and Advanced Materials Research and Processing
                  Institute, Bhopal. He serves as a Distinguished Professor and
                  Director of the UWM Centers for Composites and Advanced
                  Materials Manufacture at the University of Wisconsin,
                  Milwaukee. He has co-authored twelve books and over 400
                  scientific papers and has 20 U.S. Patents. His initial
                  research on Cast Metal Composites has been listed as a major
                  landmark in the 11000 year history of Metal Casting and TMS
                  organized a Rohatgi Honorary symposium on Cast Composites. He
                  has developed new lightweight composite materials to reduce
                  energy consumption and reduce emissions. He has served on
                  committees of Governments of the United States and India in
                  the areas of materials and energy; currently he serves as the
                  node leader for DOE Remade Institute in the US to reduce
                  embodied energy in materials and promote a circular economy.
                  He is also recipient of numerous awards for excellence in
                  research from all over the world including. Hall Heroult and
                  Scientific Merit Awards by American Foundrymen’s Society ,
                  Honorary Medal from Motor Transport Institute, Poland , ASME
                  Research Award in Tribology , Chalmers Award for Materials
                  Processing from TMS , IAAM Scientist Award from Sweden. He is
                  a fellow of ASM International (USA); Institute of
                  Materials(London), American Association for Advancement of
                  Arts and Sciences, Third World Academy of Science(Italy);
                  American Society of Mechanical Engineers (USA), Society of
                  Automotive Engineers (USA), Society of Manufacturing Engineers
                  (SME),The Minerals, Metals and Materials Society (TMS),Society
                  of Automotive Engineers(USA), Materials Research Society
                  (USA). National Academy of Inventors (NAI).
                </p>
                <div className="my-4">
                  <Link to="/guestlectures">back</Link>
                </div>
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
                <br />
                <h4 class="title">Professor Pulickel Ajayan</h4>
                <p class="description">
                  <br />
                  Professor Ajayan is one of the pioneers in the field of carbon
                  nanotubes and has demonstrated several possibilities for using
                  these quasi–one–dimensional structures as templates and molds
                  for fabricating nanowires, composites, and novel ceramic
                  fibres. He earned his B.Tech in metallurgical engineering from
                  the Indian Institute of Technology, Banaras Hindu University
                  in 1985 and Ph.D. in materials science and engineering from
                  Northwestern University in 1989. After three years of
                  postdoctoral experience at NEC Corporation in Japan, he spent
                  two years as a research scientist at the Laboratoire de
                  Physique des Solides, Orsay in France and nearly a year and a
                  half as an Alexander von Humboldt fellow at the
                  Max-Planck-Institut fur Metallforschung, Stuttgart in Germany.
                  He has published a book and 1000 journal papers with nearly
                  95,000 citations and an h-index of 150. His awards include the
                  Spiers Memorial Award by the Royal Society of Chemistry (UK),
                  Senior Humboldt Prize, MRS Medal, Scientific American 50
                  recognition in 2006, RPI Senior Research Award, the Burton
                  Award from the Microscopic Society of America and the Hadfield
                  Medal for the Outstanding Metallurgist in India. He is on the
                  advisory editorial board of several materials science and
                  nanotechnology journals and on the boards of several nanotech
                  companies.
                </p>
                <div className="my-4">
                  <Link to="/guestlectures">back</Link>
                </div>
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

export default connect(mapStateToProps)(AboutGuests)
