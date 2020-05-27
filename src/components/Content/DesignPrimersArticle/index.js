import React from "react";
import { Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

import contactIcon6 from '../../../assets/icons/contact-icon6.png';

export default function DesignPrimersArticle(props) {
    return (
        <div className="article">
            
                <Breadcrumb>
                    <LinkContainer to='/'> 
                        <Breadcrumb.Item>Página inicial </Breadcrumb.Item>
                    </LinkContainer>
                    <Breadcrumb.Item active> Design and in silico validation of PCR primers </Breadcrumb.Item>
                </Breadcrumb>

                <div className="p-3">
                    <h3><strong>Authors:</strong></h3>
                    <h5>Daniel C. F. Lanza </h5> 
                    <small>Applied Molecular Biology Lab - LAPLIC, Department of Biochemistry, Biosciences Center, Federal University of Rio Grande do Norte, Natal, RN, Brazil</small>
                    <a href="mailto:danielclanza@gmail.com"> <img className="icon-contact" src={contactIcon6} style={{maxHeight: "1.25rem", marginLeft: "0.25rem"}} alt="email" /> Corresponding author</a>
                    <h5>João P. M. S. Lima</h5>             
                    <small>Laboratory of Metabolic Systems and Bioinformatics - LASIS, Department of Biochemistry, Biosciences Center, Federal University of Rio Grande do Norte, Natal, RN, Brazil</small>
                    <h5>Selma M. B. Jerônimo</h5>
                    <small>Institute of Tropical Medicine of Rio Grande do Norte (IMT), Federal University of Rio Grande do Norte, Natal, RN, Brazil</small>

                </div>

                <h3>Abstract</h3>
                <p>
                    Accurate designing of polymerase chain reaction (PCR) primers targeting conserved segments in viral genomes is desirable for preventing false negative results and decreasing the need for standardization across different PCR protocols. In this work, we designed and described a set of primers and probes targeting conserved regions identified from a multiple sequence alignment of 2341 Severe Acute Respiratory Syndrome Coronavirus 2 (SARS-CoV-2) genomes from the Global Initiative on Sharing All Influenza Data (GISAID). Those primers and probes were subsequently validated in 3067 SARS-CoV-2 whole-genome sequences. From these analyses, we obtained nine systems (forward primer + reverse primer + probe) that potentially anneal to highly conserved regions of the virus genome. In silico predictions also demonstrated that those primers do not bind to nonspecific targets for human, bacterial, fungal, or apicomplexan sequences. The availability of these primer and probe sequences will make it possible to accelerate the beginning of in vitro tests in order to validate more efficient protocols for the identification of SARS-CoV-2.
                </p>

                <p><strong>KEYWORDS:</strong> COVID-19, universal PCR primers, coronavirus, blood, real-time PCR, qPCR, environmental samples</p>

                <h4>Full pre-print article: </h4><a href="https://www.researchsquare.com/article/rs-26306/v1"> https://www.researchsquare.com/article/rs-26306/v1</a>
            
        </div>
    )
}