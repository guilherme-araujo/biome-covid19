import React from "react";
import { Container } from 'react-bootstrap';

import Deaths from './Deaths';

export default function TotalNewCases(props) {
    
    return (
        <div>
            <div className=" justify-content-center d-flex flex-nowrap">
                <p className={`left-label ${props.className}`}>New Deaths (log scale)</p>
                <Container className={props.className} >
                    <Deaths date={props.date} />

                </Container>
            </div>
            <p className={props.className}>Total deaths (log scale)</p>
        </div>
    )
  
}