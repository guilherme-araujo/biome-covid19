import React from 'react';

import { Row, Col } from 'react-bootstrap';

import logo from '../../assets/logo_wide.png';
import faceIcon from '../../assets/icons/face-icon.png';
import twitterIcon from '../../assets/icons/twitter-icon.png';
import linkedinIcon from '../../assets/icons/linkedin-icon.png';

import './styles.css';

export default function Footer() {

    return (
        <>
            <section className="col-md-12 col-sm-12" style={{ backgroundColor: "rgba(39, 47, 56, 0.85)" }}>
            <Row >
                <Col lg={1}  style={{marginLeft: "3%"}}></Col>
                <Col lg={3} sm={12} xs={12} style={{marginTop: "7em"}}>                    
                    <img className="img-logo-footer" src={logo} alt="logo footer" />
                </Col>

                <Col lg={2} sm={4} xs={6} style={{marginTop: "4em"}} className="d-flex flex-column contact-col-right justify-content-around">
                    <b><p className="title-7">GRADUATE PROGRAM</p></b>
                    <a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=graduateprogram"><p>About the Program</p></a>
                    <a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=graduateprogram#master"><p>Masters in Bioinformatics</p></a>
                    <a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=graduateprogram#doctorateDegree"><p>PhD in Bioinformatics</p></a> 
                    <p></p>                   
                    <b><a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=research"><p className="title-7">RESEARCH</p></a></b>

                </Col>


                <Col lg={2} sm={4} xs={6} style={{marginTop: "4em"}} className="d-flex flex-column contact-col-right justify-content-around">
                    <b><p className="title-7">CORE FACILITY</p></b>
                    <a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=services"><p>Services</p></a>
                    <a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=tools"><p>Tools</p></a>
                    <p></p>
                    <b><p className="title-7">OUTREACH</p></b>
                    <a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=news"><p>News & Press</p></a>
                    <a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=events"><p>Events</p></a>
                </Col>

                <Col lg={2} sm={4} xs={6} style={{marginTop: "4em"}} className="d-flex flex-column contact-col-right justify-content-around">
                    <b><p className="title-7">ABOUT BIOME</p></b>
                    <a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=people"><p>People</p></a>
                    <a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=history"><p>History</p></a>
                    <a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=technicalpartnership"><p>Technical Partnership</p></a>
                    <a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=contact"><p>Contact</p></a>
                </Col>
                <Col lg={2} ></Col>
            </Row>
            

            <Row>
                <Col lg={2} sm={2} xs={2}></Col>
                <Col lg={8} sm={8} xs={8}>
                    <hr style={{backgroundColor: "white", height: "0.05vh"}} />
                </Col>
                <Col lg={2} sm={2} xs={2}></Col>
            </Row>

            <Row className="p-3">
                <Col md={12} sm={12} xs={12}>
                    <center>
                        <a href="https://www.facebook.com/BIOME-N%C3%BAcleo-Multidisciplinar-de-Bioinform%C3%A1tica-da-UFRN-1114530608590314/">
                            <img src={faceIcon} style={{maxHeight: "40px" }} alt="facebook" />
                        </a>
                        <a href="https://twitter.com/bioinfo_UFRN">
                            <img src={twitterIcon} style={{maxHeight: "40px" }} alt="twitter" />
                        </a>
                        <a href="https://www.linkedin.com/in/biome-ufrn-141249143/">
                            <img src={linkedinIcon} style={{maxHeight: "34px" }} alt="linkedin" />
                        </a>
                    </center>
                </Col>
            </Row>

            </section>

            <section className="col-md-12 col-sm-12 col-xsm-12 p-4" style= {{backgroundColor: "#2e3336", minHeight: "100px"}} >
                
                <Row>
                    <Col md={12} sm={12} xs={12}>
                        <center><p className="title-9">© Copyright 2020 - Todos os Direitos Reservados.</p></center>
                    </Col>
                </Row>

            </section>
        </>
    );
}