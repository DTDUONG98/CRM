import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Router, browserHistory } from 'react-router';

import './index.css';
import App from './App';
import Island from './Island';
import Rank from './Rank';
import Lienhe from './Lienhe';
import Tintuc from './Tintuc';
import Island1 from './Island1';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <Route exact path="/" component={App} />
        <Route exact path="/Island/:id" component={Island} />
        <Route exact path="/Rank/:id" component={Rank} />
        <Route exact path="/Lienhe/:id" component={Lienhe} />
        <Route exact path="/Tintuc/:id" component={Tintuc} />
        <Route exact path="/Island1/:id" component={Island1} />
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
