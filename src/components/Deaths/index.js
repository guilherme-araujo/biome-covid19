import React from "react";
import { Container } from 'react-bootstrap';

import Deaths from './Deaths';

export default function TotalNewCases(props) {
    
    return (
        <div>
            <div className=" justify-content-center d-flex flex-nowrap">
                <p className="left-label d-none d-lg-block">New Deaths (log scale)</p>
                <Container className={props.className} >
                    <Deaths/>

                </Container>
            </div>
            <p>Total deaths (log scale)</p>
        </div>
    )
  
}