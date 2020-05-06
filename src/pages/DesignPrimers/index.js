import React from 'react';
import { Container } from 'react-bootstrap';

import Layout from '../../components/Layout';
import DesignPrimersArticle from '../../components/Content/DesignPrimersArticle';

import HeadBanner from '../../components/HeadBanner';

export default function DesignPrimers() {
    return (
        <Layout>
            <HeadBanner >Design and <i>in silico</i> validation of polymerase chain reaction primers to detect severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2)</HeadBanner>
            <Container>
                <DesignPrimersArticle />
            </Container>
        </Layout>
    );
}