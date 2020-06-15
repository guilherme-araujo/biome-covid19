import React from "react";
import { Container } from 'react-bootstrap';

import TotalNewCasesChart from './TotalNewCasesChart';

export default function TotalNewCases(props) {
    
    return (
        <Container className={props.className} >
            <TotalNewCasesChart date={props.date} />

        </Container>
    )
  
}