import React from 'react';
import { Route } from 'react-router-dom';
import Rarus from './Rarus';
import Word from './Word';
import catchAll from 'admin-on-rest/lib/mui/layout/NotAvailable';

let checkPermission = path => {

    console.log('проверил роуты');
    let services = [];
    services = JSON.parse(localStorage.getItem('services'));
    console.log(services)
    let status = false;
    if (services != null) {
        services.forEach(service => {
            if(service.url === path) {
                status = true;
            }
        })
    }
    else {
        let history = window.history;
        history.pushState(null, null, '/login');
    }
    return status;

}

export default [
    <Route exact path="/1c" component={checkPermission('/1c') ? Rarus : catchAll} />,
    <Route exact path="/word" component={checkPermission('/word') ? Word : catchAll} />,
    <Route exact path="/pp" component={checkPermission('/pp') ? Word : catchAll} />
];