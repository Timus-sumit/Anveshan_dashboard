import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/Dashboard';
import LoginPage from '../components/LoginPage';
import RegisterEvent from '../components/RegisterEvents';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute'

export const history = createHistory();

const AppRoute=()=>{
    return(
        <Router history={history} >
            <div>
                <Switch>
                    <PublicRoute path="/" component={LoginPage} exact={true}/>
                    <PrivateRoute path="/dashboard" component={Dashboard}/>
                    <PrivateRoute path="/register" component={RegisterEvent}/>
                </Switch>
            </div>
        </Router>
    );
}

export default AppRoute;