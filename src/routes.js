import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DataVisualization from './pages/DataVisualization';
import DataPreview from './components/Content/DataVisualizationPlotPreviews';
import DataPreviewTemp from './components/Content/DataVisualizationPlotPreviewsTemp';
import Epidemics from './pages/Epidemics';
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
                <Route path="/data-preview" component={DataPreview} />
                <Route path="/data-preview-temp" component={DataPreviewTemp} />
                <Route path="/epidemics" component={Epidemics} />
                <Route path="/design-primers" component={DesignPimers} />
            </Switch>
          
        </BrowserRouter>
    );
}