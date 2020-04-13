import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import Epidemics from './pages/Epidemics';

export default function Routes() {
    return(
        <BrowserRouter basename="covid19">
          
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/epidemics" component={Epidemics} />
            </Switch>
          
        </BrowserRouter>
    );
}