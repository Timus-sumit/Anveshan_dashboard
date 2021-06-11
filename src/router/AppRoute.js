import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Dashboard from '../components/Dashboard'
import LoginPage from '../components/LoginPage'
import RegisterEvent from '../components/RegisterEvents'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Literatium from '../components/Literatium'
import Internado from '../components/Internado'
import CodeMet from '../components/CodeMet'
import Initio from '../components/Initio'
import Metcon from '../components/Metcon'
import Snapshot from '../components/Snapshot'
import Rivista from '../components/Rivista'
import Quarks from '../components/Quarks'
import Events from '../components/Events'
import UserProfile from '../components/UserProfile'
import EditProfile from '../components/EditProfile'
import Guestlectures from '../components/GuestLectures'
import Workshop from '../components/Workshop'

export const history = createHistory()

const AppRoute = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path="/" component={LoginPage} exact={true} />
          <PrivateRoute path="/userprofile" component={UserProfile} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/events" component={Events} />
          <PrivateRoute path="/Literatium" component={Literatium} />
          <PrivateRoute path="/Internado" component={Internado} />
          <PrivateRoute path="/CodeMet" component={CodeMet} />
          <PrivateRoute path="/Initio" component={Initio} />
          <PrivateRoute path="/Metcon" component={Metcon} />
          <PrivateRoute path="/Snapshot" component={Snapshot} />
          <PrivateRoute path="/Rivista" component={Rivista} />
          <PrivateRoute path="/Quarks" component={Quarks} />
          <PrivateRoute path="/guestlectures" component={Guestlectures} />
          <PrivateRoute path="/workshop" component={Workshop} />
          <PrivateRoute path="/editprofile" component={EditProfile} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRoute
