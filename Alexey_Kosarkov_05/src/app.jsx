import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Redirect, IndexRoute, browserHistory} from 'react-router';

import PageLayout from './app/layouts/PageLayout';
import Index from './app/pages/Index';
import Users from './app/pages/Users';
import Comments from './app/pages/Comments';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history = {browserHistory}>
        <Route path="/" component={PageLayout}>
            <IndexRoute component={Index}/>
            <Route path="users" component={Users}/>
            <Route path="comments" component={Comments}/>
            <Route path="blog" component={Index}/>
        </Route>
    </Router>
,app);