import React from 'react';

import { Row, Col, Container } from 'react-bootstrap';

import contactIcon4 from '../../assets/icons/contact-icon4.png';
import contactIcon5 from '../../assets/icons/contact-icon5.png';
import contactIcon6 from '../../assets/icons/contact-icon6.png';

import './style.css';
import Key from './apikey';

export default function Contact() {

    return (
        <div className="col-md-12 col-sm-12 col-xsm-12 p-3" style={{backgroundColor: "#cdcdcd"}}>
            <Container fluid>
            <Col className="contact">
                <Container>
                <Row>
                    <Col md={9} sm={9} >
                        <h3 style={{marginLeft: "2.6vw"}}>CONTACT</h3>

                    </Col>

                    <hr className="hr-more"/>
                </Row>
                </Container>
           
                <Row className="d-flex justify-content-around">

                    <Col lg={2} >

                    </Col>
                    
                    <Col lg={4} sm={12} >
                      <Row className="h-100 w-100">
                        <iframe 
                            title="biome-map"
                            frameBorder="0" 
                            style={{border: "0", minHeight: "300px"}}
                            className="p-3 flex-fill flex-column"
                            src={`https://www.google.com/maps/embed/v1/search?key=${Key}&q=BioME`} allowFullScreen>
                        </iframe>
                       
                      </Row>
                      
                    </Col>
                    
                    
                    
                    <Col lg={6} sm={12} >
                    	<Row className="justify-content-center">
                            <Col lg={2}></Col>
                    		<Col lg={2} sm={2} xs={2} className="d-flex align-items-center" >
                    			<img className="icon-contact" src={contactIcon4} alt="address" />
                    		</Col>
                    		<Col lg={8} sm={10} xs={10} className="d-flex flex-column contact-col-right justify-content-center">
                    			
                                <p> Av. Odilon Gomes de Lima 1722</p>
                                <p>Capim Macio, 59078-400</p>
                                <p>Natal/RN - Brazil</p>
                    			
                    		</Col>
                    	</Row>
                    	<Row className="justify-content-center">
                            <Col lg={2}></Col>
                    		<Col  lg={2} sm={2} xs={2} className="d-flex align-items-center">
                    			<img className="icon-contact" src={contactIcon5} alt="phone" />
                    		</Col>
                    		<Col lg={8} sm={10} xs={10} className="d-flex flex-column contact-col-right justify-content-center">
                    			
                                <p>+55 (84) 99480-6818</p>
                                <p>+55 (84) 3342-2216 - Ramal 123</p>
                    			
                    		</Col>
                    	</Row>
                    	<Row className="justify-content-center">
                            <Col lg={2}></Col>
                    		<Col  lg={2} sm={2} xs={2} className="d-flex align-items-center" >
                    			<img className="icon-contact" src={contactIcon6} style={{margin: "2.3em 0"}} alt="email" />
                    		</Col>
                    		<Col lg={8} sm={10} xs={10} className="d-flex flex-column contact-col-right justify-content-center">
                    			
                                <p>bioinfo@imd.ufrn.br </p>
                                <p>biome@imd.ufrn.br </p>
                                <p>Coordenador PPg-Bioinfo: sandro@neuro.ufrn.br</p>
                    			
                    		</Col>
                    	</Row>
                    </Col>
                    
                </Row>
            </Col>
            </Container>

        </div>
    );
}
