import React from 'react';

import Layout from '../../components/Layout';
import DesignPrimersArticle from '../../components/DesignPrimersArticle';

import HeadBanner from '../../components/HeadBanner';

export default function DesignPrimers() {
    return (
        <Layout>
            <HeadBanner >Design and <i>in silico</i> validation of polymerase chain reaction primers to detect severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2)</HeadBanner>
            <DesignPrimersArticle />
            
        </Layout>
    );
}