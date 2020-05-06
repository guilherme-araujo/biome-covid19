import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DataVisualization from './pages/DataVisualization';
import Epidemics from './pages/Epidemics';
import Chart from './pages/Chart';
import DesignPimers from './pages/DesignPrimers';
import Landing from './pages/Landing';
import ScrollToTop from './components/ScrollToTop';

export default function Routes() {
    return(
        <BrowserRouter basename="covid19">
            <ScrollToTop />
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/data-visualization" component={DataVisualization} />
                <Route path="/epidemics" component={Epidemics} />
                <Route path="/chart" component={Chart} />
                <Route path="/design-primers" component={DesignPimers} />
            </Switch>
          
        </BrowserRouter>
    );
}