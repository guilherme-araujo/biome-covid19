import React from "react";
import { Container, Jumbotron, Card, Breadcrumb, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import preview_data_visualization from '../../../assets/preview-data-visualization.png';
import preview_desig_primers from '../../../assets/preview-design-primers.png';

export default function LandingContent(props) {
    return (
        <div className="article">
            <Container>

                <Breadcrumb>
                    <Breadcrumb.Item active> Página inicial </Breadcrumb.Item>
                </Breadcrumb>                

                <Jumbotron style={{padding: "2rem 2rem"}}>
                    <h5><Badge variant='info' pill className="p-1 m-1">04/05/2020</Badge></h5>
                    <Card >
                        <div className="row">
                        <Card.Img src={preview_desig_primers} style={{ maxHeight: "220px", objectFit: "contain" }} className="col-md-4"/>
                        <Card.Body className="col-md-8 d-flex flex-column justify-content-center">
                            <Card.Title><Link to="/design-primers"> Design and in silico validation of polymerase chain reaction primers to detect severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2)</Link></Card.Title>
                            <Card.Text>
                                Pesquisa relacionada ao design de primers de PCR para detecção do SARS-CoV-2
                            </Card.Text>
                        </Card.Body>
                        </div>

                    </Card>
                </Jumbotron>

                <Jumbotron style={{padding: "2rem 2rem"}}>
                    <h5><Badge variant='info' pill className="p-1 m-1">13/04/2020</Badge></h5>
                    <Card >
                        <div className="row">
                        <Card.Img src={preview_data_visualization} style={{ maxHeight: "220px", objectFit: "contain" }} className="col-md-4"/>
                        <Card.Body className="col-md-8 d-flex flex-column justify-content-center">
                            <Card.Title><Link to="/data-visualization">Considerações sobre a apresentação e interpretação dos dados na pandemia de COVID-19</Link></Card.Title>
                            <Card.Text>
                                Uma proposta de visualização dos dados da pandemia atualizados semanalmente
                            </Card.Text>
                        </Card.Body>
                        </div>

                    </Card>

                </Jumbotron>

            </Container>
        </div>
    )
}