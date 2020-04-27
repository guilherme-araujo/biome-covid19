import React from 'react';

import Layout from '../../components/Layout';
import CasesPer100Tests from '../../components/CasesPer100Tests';

import HeadBanner from '../../components/HeadBanner';

export default function Landing() {
    return (
        <Layout>
            <HeadBanner >Gráfico - Teste</HeadBanner>
            <CasesPer100Tests className="d-block" />
            
        </Layout>
    );
}