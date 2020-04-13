import React from "react";
import { Container } from 'react-bootstrap';

import Contact from '../Contact';
import Article from '../Article';

import './styles.css';


export default function MainContent(props) {
    return (
        <>
            
            <Container>
                <Article />
            </Container>
            <Contact />
        </>
    )
}