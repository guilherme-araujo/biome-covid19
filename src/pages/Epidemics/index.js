import React from 'react';
import { Container } from 'react-bootstrap';

import Layout from '../../components/Layout';
import EpidemicsContent from '../../components/Content/EpidemicsContent';

import HeadBanner from '../../components/HeadBanner';

export default function Landing() {
    return (
        <Layout>
            <HeadBanner >Epidemiologia</HeadBanner>
            <Container>
                <EpidemicsContent />
            </Container>
        </Layout>
    );
}