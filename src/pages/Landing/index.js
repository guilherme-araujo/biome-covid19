import React from 'react';
import { Container } from 'react-bootstrap';

import Layout from '../../components/Layout';
import LandingContent from '../../components/Content/LandingContent';
import HeadBanner from '../../components/HeadBanner';

export default function Landing() {
    return (
        <Layout>
            <HeadBanner >Contribuições do BioME para a pesquisa relacionada ao Covid-19</HeadBanner>
            <Container>
                <LandingContent />
            </Container>
        </Layout>
    );
}