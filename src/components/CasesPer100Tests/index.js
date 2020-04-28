import React from "react";
import { Container } from 'react-bootstrap';

import CasesPer100TestsChart from './CasesPer100TestsChart';

export default function CasesPer100Tests(props) {
    
    return (
        <div className=" justify-content-center d-flex flex-nowrap">
        <p className="left-label d-none d-lg-block">Cases per 100 tests (average of three days)</p>
        <Container className={props.className} >
            <CasesPer100TestsChart/>

        </Container>
        </div>
    )
  
}