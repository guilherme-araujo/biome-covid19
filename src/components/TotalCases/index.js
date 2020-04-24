import React from "react";
import { Container } from 'react-bootstrap';

import TotalCasesChart from './TotalCasesChart';

export default function ChartTest(props) {
    
    return (
        <Container className={props.className} >
            <TotalCasesChart/>

        </Container>
    )
  
}