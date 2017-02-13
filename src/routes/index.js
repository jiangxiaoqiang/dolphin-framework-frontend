/**
 * Created by hldev on 17-2-13.
 */
import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Frame from '../layouts/Frame';
import Home from '../views/Home';

const routes = (
    <Router history={hashHistory}>
        <route path="/" component={Frame}>
            <IndexRoute component={Home}></IndexRoute>
        </route>
    </Router>
);

export default routes;

