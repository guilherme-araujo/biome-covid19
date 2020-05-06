import React from 'react';
import { Container } from 'react-bootstrap';

import Layout from '../../components/Layout';
import DataVisualizationArticle from '../../components/DataVisualizationArticle';

import HeadBanner from '../../components/HeadBanner';

export default function Landing() {
    return (
        <Layout>
            <HeadBanner >Considerações sobre a apresentação e interpretação dos dados na pandemia de COVID-19</HeadBanner>
            <Container>
                <DataVisualizationArticle />
            </Container>
        </Layout>
    );
}