import React, {Component} from 'react';
import {createBrowserHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';

import './Setup';
import "assets/scss/material-kit-react.css?v=1.1.0";
import "assets/scss/fertig-style.css";
import indexRoutes from "routes/index.jsx";

import Store from './Store';

var hist = createBrowserHistory();

class Main extends Component {
  render() {
    return (
        <I18nextProvider i18n={i18n}>
            <Provider store={Store}>
                <Router history={hist}>
                    <div className='app'>
                        <Switch>
                            {indexRoutes.map((prop, key) => {
                                return <Route path={prop.path} key={key} component={prop.component} />;
                            })}
                        </Switch>
                    </div>
                </Router>
            </Provider>
        </I18nextProvider>
    );
  }
}

export default Main;
