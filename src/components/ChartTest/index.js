import React from "react";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import TotalCasesChart from './TotalCasesChart';

export default function ChartTest(props) {
    
    return (
        <Container>
            <TotalCasesChart/>

        </Container>
    )
  
}