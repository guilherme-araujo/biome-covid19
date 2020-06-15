import React from "react";
import { Container } from 'react-bootstrap';

import TotalCasesChart from './TotalCasesChart';

export default function TotalCases(props) {
    
    return (
        <Container className={props.className} >
            <TotalCasesChart date={props.date} />

        </Container>
    )
  
}
