/**
 * Created by hldev on 17-2-9.
 */
import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Home from '../views/Home'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
    </Router>
);

export default routes;