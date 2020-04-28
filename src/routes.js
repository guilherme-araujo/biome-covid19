import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import Epidemics from './pages/Epidemics';
import Chart from './pages/Chart';
import ScrollToTop from './components/ScrollToTop';

export default function Routes() {
    return(
        <BrowserRouter basename="covid19_test">
            <ScrollToTop />
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/epidemics" component={Epidemics} />
                <Route path="/chart" component={Chart} />
            </Switch>
          
        </BrowserRouter>
    );
}