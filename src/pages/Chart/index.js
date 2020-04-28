import React from 'react';

import Layout from '../../components/Layout';
import Deaths from '../../components/Deaths';

import HeadBanner from '../../components/HeadBanner';

export default function Landing() {
    return (
        <Layout>
            <HeadBanner >Gráfico - Teste</HeadBanner>
            <Deaths className="d-block" />
            
        </Layout>
    );
}