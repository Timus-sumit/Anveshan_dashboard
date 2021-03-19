import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './dashboardAssets/css/styles.css';
import logo from './dashboardAssets/images/logo.jpg';
import { createEvents } from '../actions/event';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasPayed: false,
    };
  }
  render() {
    return (
      <div>
        {/* fsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf */}
        <div className='nav-btn'>Menu</div>
        <div className='container'>
          <div className='sidebar'>
            <nav>
              <a href='#' style={{ textDecoration: 'none' }}>
                <img
                  src={logo}
                  alt='logo'
                  className='logo'
                  height='100px'
                  width='100px'
                />
                <p>Anveshan</p>
              </a>
              <ul>
                <li className='active'>
                  <a href='#'>Dashboard</a>
                </li>
                <li>
                  <a href='#'>Events</a>
                </li>
                <li>
                  <a href='#'>Contact</a>
                </li>
              </ul>
              <div
                style={{
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                }}
              >
                <button
                  className='btn-success'
                  onClick={() => {
                    this.props.dispatch(createEvents());
                    this.setState(() => {
                      return {
                        hasPayed: true,
                      };
                    });
                  }}
                  disabled={this.state.hasPayed}
                >
                  Make Payment !
                </button>
                <button className='btn-danger'>Log Out</button>
              </div>
            </nav>
          </div>

          <div className='main-content'>
            <h1>Dashboard</h1>
            <p>Welcome {this.props.user.name} !</p>
            <div className='panel-wrapper'>
              <div className='panel-head'>News</div>
              <div className='panel-body'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                fugiat culpa quia possimus molestiae id sapiente ad eveniet,
                aliquid, eum sint fuga eius, ratione suscipit ut minus
                voluptates dicta nesciunt.
              </div>
            </div>
            <div className='panel-wrapper'>
              <div className='panel-head'>News</div>
              <div className='panel-body'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                fugiat culpa quia possimus molestiae id sapiente ad eveniet,
                aliquid, eum sint fuga eius, ratione suscipit ut minus
                voluptates dicta nesciunt.
              </div>
            </div>
            <div className='panel-wrapper'>
              <div className='panel-head'>News</div>
              <div className='panel-body'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                fugiat culpa quia possimus molestiae id sapiente ad eveniet,
                aliquid, eum sint fuga eius, ratione suscipit ut minus
                voluptates dicta nesciunt. Totam fugiat culpa quia possimus
                molestiae id sapiente ad eveniet, aliquid, eum sint fuga eius,
                ratione suscipit ut minus voluptates dicta nesciunt.
              </div>
            </div>
          </div>
        </div>
      </div>

      // {/* jjbdjkasckascnklascnksacka */}
      //     <p>
      //       <NavLink to='/Literatium' exact={true}>
      //         Literatium
      //       </NavLink>
      //     </p>
      //     <p>
      //       <NavLink to='/Internado' exact={true}>
      //         Internado
      //       </NavLink>
      //     </p>
      //     <p>
      //       <NavLink to='/CodeMet' exact={true}>
      //         CodeMet
      //       </NavLink>
      //     </p>
      //     <p>
      //       <NavLink to='/Initio' exact={true}>
      //         Initio
      //       </NavLink>
      //     </p>
      //     <p>
      //       <NavLink to='/Microskopia' exact={true}>
      //         Microskopia
      //       </NavLink>
      //     </p>
      //     <p>
      //       <NavLink to='/Quitation' exact={true}>
      //         Quitation
      //       </NavLink>
      //     </p>
      //     <p>
      //       <NavLink to='/Rivista' exact={true}>
      //         Rivista
      //       </NavLink>
      //     </p>
      //     <p>
      //       <NavLink to='/Quarks' exact={true}>
      //         Quarks
      //       </NavLink>
      //     </p>
      //   </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    event: state.event,
  };
};

export default connect(mapStateToProps)(Dashboard);
