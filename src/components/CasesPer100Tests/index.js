import React from "react";
import { Container } from 'react-bootstrap';

import CasesPer100TestsChart from './CasesPer100TestsChart';

export default function CasesPer100Tests(props) {
    
    return (
        <Container className={props.className} >
            <CasesPer100TestsChart/>

        </Container>
    )
  
}