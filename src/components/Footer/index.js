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
                    <b><h7 style={{color: "#F6F6F6"}}>GRADUATE PROGRAM</h7></b>
                    <a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=graduateprogram"><h8>About the Program</h8></a>
                    <a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=graduateprogram#master"><h8>Masters in Bioinformatics</h8></a>
                    <a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=graduateprogram#doctorateDegree"><h8>PhD in Bioinformatics</h8></a> 
                    <p></p>                   
                    <b><a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=research"><h7 style={{color: "#F6F6F6"}}>RESEARCH</h7></a></b>

                </Col>

                <Col lg={2} sm={4} xs={6} style={{marginTop: "4em"}} className="d-flex flex-column contact-col-right justify-content-around">
                    <b><h7 style={{color: "#F6F6F6"}}>CORE FACILITY</h7></b>
                    <a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=services"><h8>Services</h8></a>
                    <a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=tools"><h8>Tools</h8></a>
                    <p></p>
                    <b><h7 style={{color: "#F6F6F6"}}>OUTREACH</h7></b>
                    <a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=news"><h8>News & Press</h8></a>
                    <a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=events"><h8>Events</h8></a>
                </Col>

                <Col lg={2} sm={4} xs={6} style={{marginTop: "4em"}} className="d-flex flex-column contact-col-right justify-content-around">
                    <b><h7 style={{color: "#F6F6F6"}}>ABOUT BIOME</h7></b>
                    <a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=people"><h8>People</h8></a>
                    <a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=history"><h8>History</h8></a>
                    <a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=technicalpartnership"><h8>Technical Partnership</h8></a>
                    <a className="link-footer" href="https://bioinfo.imd.ufrn.br/index.php?page=contact"><h8>Contact</h8></a>
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
                        <center><h9>© Copyright 2020 - Todos os Direitos Reservados.</h9></center>
                    </Col>
                </Row>

            </section>
        </>
    );
}