import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/Dashboard';
import LoginPage from '../components/LoginPage';
import RegisterEvent from '../components/RegisterEvents';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute'
import Literatium from '../components/Literatium';
import Internado from '../components/Internado';
import CodeMet from '../components/CodeMet';
import Initio from '../components/Initio';
import Microskopia from '../components/Microskopia';
import Quitation from '../components/Quitation';
import Rivista from '../components/Rivista';
import Quarks from '../components/Quarks';

export const history = createHistory();

const AppRoute=()=>{
    return(
        <Router history={history} >
            <div>
                <Switch>
                    <PublicRoute path="/" component={LoginPage} exact={true}/>
                    <PrivateRoute path="/dashboard" component={Dashboard}/>
                    <PrivateRoute path="/Literatium" component={Literatium}/>
                    <PrivateRoute path="/Internado" component={Internado}/>
                    <PrivateRoute path="/CodeMet" component={CodeMet}/>
                    <PrivateRoute path="/Initio" component={Initio}/>
                    <PrivateRoute path="/Microskopia" component={Microskopia}/>
                    <PrivateRoute path="/Quitation" component={Quitation}/>
                    <PrivateRoute path="/Rivista" component={Rivista}/>
                    <PrivateRoute path="/Quarks" component={Quarks}/>
                </Switch>
            </div>
        </Router>
    );
}

export default AppRoute;