import React from 'react';

import Layout from '../../components/Layout';
import EpidemicsContent from '../../components/EpidemicsContent';

import HeadBanner from '../../components/HeadBanner';

export default function Landing() {
    return (
        <Layout>
            <HeadBanner >Epidemiologia</HeadBanner>
            <EpidemicsContent />
            
        </Layout>
    );
}