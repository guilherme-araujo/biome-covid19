import React from 'react';

import Layout from '../../components/Layout';
import ChartTest from '../../components/ChartTest';

import HeadBanner from '../../components/HeadBanner';

export default function Landing() {
    return (
        <Layout>
            <HeadBanner >Gráfico - Teste</HeadBanner>
            <ChartTest />
            
        </Layout>
    );
}