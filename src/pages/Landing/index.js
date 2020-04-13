import React from 'react';

import Layout from '../../components/Layout';
import MainContent from '../../components/MainContent';

import HeadBanner from '../../components/HeadBanner';

export default function Landing() {
    return (
        <Layout>
            <HeadBanner >Considerações sobre a apresentação e interpretação dos dados na pandemia de COVID-19</HeadBanner>
            <MainContent />
            
        </Layout>
    );
}