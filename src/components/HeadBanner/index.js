import React from 'react';

import { Container } from 'react-bootstrap';

import backinitial from '../../assets/background.png';

export default function HeadBanner(props) {
    return (
        <div style={{backgroundImage: `url(${backinitial})`, 
                    minHeight: "170px", 
                    backgroundSize: "cover", 
                    backgroundPosition: "right"}} 
            className="col-lg-12 ">
            <Container className="text-white-50 p-5">
                <h1> {props.children}</h1>
            </Container>

        </div>
    )
}