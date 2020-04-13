import React, { useState } from 'react';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import logo_wide from '../../assets/logo_wide.png';
import './styles.css';

export default function TopMenu() {

    const [aboutIsOpen, updateAboutIsOpen] = useState(false);
    const [coreIsOpen, updateCoreIsOpen] = useState(false);
    const [outreachIsOpen, updateOutreachIsOpen] = useState(false);

    return (
        <Navbar bg="dark" variant="dark" expand="lg" >
            <Container>
                <a href="https://bioinfo.imd.ufrn.br/">
                    <Navbar.Brand >
                        <img src={logo_wide} alt="logo" />
                    </Navbar.Brand>
                </a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                <Navbar.Collapse id="basic-navbar-nav">          
                <Nav className="p-3">
                    <NavDropdown 
                        title="About Biome" 
                        id="about-biome-dropdown"
                        onMouseEnter = {() => updateAboutIsOpen(true)}
                        onMouseLeave = {() => updateAboutIsOpen(false)}
                        onClick = {() => updateAboutIsOpen(!aboutIsOpen)}
                        show = {aboutIsOpen}
                    >                        
                        <NavDropdown.Item href="https://bioinfo.imd.ufrn.br/index.php?page=people">People</NavDropdown.Item>
                        <NavDropdown.Item href="https://bioinfo.imd.ufrn.br/index.php?page=history">History</NavDropdown.Item>
                        <NavDropdown.Item href="https://bioinfo.imd.ufrn.br/index.php?page=technicalpartnership">Technical Partnership</NavDropdown.Item>
                        <NavDropdown.Item href="https://bioinfo.imd.ufrn.br/index.php?page=contact">Contact</NavDropdown.Item>
                        <NavDropdown.Item href="https://bioinfo.imd.ufrn.br/big">BioME Idea Generation</NavDropdown.Item>                            
                    </NavDropdown>
                    <Nav.Link href="https://bioinfo.imd.ufrn.br/index.php?page=graduateprogram">Graduate Program</Nav.Link>
                    <Nav.Link href="https://bioinfo.imd.ufrn.br/index.php?page=research">Research</Nav.Link>
                    <Nav.Link href="https://bioinfo.imd.ufrn.br/covid19">COVID-19</Nav.Link>
                    <NavDropdown 
                        title="Core Facility" 
                        id="core-facility-dropdown"
                        onMouseEnter = {() => updateCoreIsOpen(true)}
                        onMouseLeave = {() => updateCoreIsOpen(false)}
                        onClick = {() => updateCoreIsOpen(!coreIsOpen)}
                        show = {coreIsOpen}
                    >
                        <NavDropdown.Item href="https://bioinfo.imd.ufrn.br/index.php?page=services">Services</NavDropdown.Item>
                        <NavDropdown.Item href="https://bioinfo.imd.ufrn.br/index.php?page=tools">Tools</NavDropdown.Item>                            
                    </NavDropdown>
                    <NavDropdown 
                        title="Outreach" 
                        id="outreach-dropdown"
                        onMouseEnter = {() => updateOutreachIsOpen(true)}
                        onMouseLeave = {() => updateOutreachIsOpen(false)}
                        onClick = {() => updateOutreachIsOpen(!outreachIsOpen)}
                        show = {outreachIsOpen}
                    >                        
                        <NavDropdown.Item href="https://bioinfo.imd.ufrn.br/index.php?page=news">News & Press</NavDropdown.Item>
                        <NavDropdown.Item href="https://bioinfo.imd.ufrn.br/index.php?page=events">Events</NavDropdown.Item>
                        <NavDropdown.Item href="http://bioinfo.imd.ufrn.br/certificado/index.html">Undergrad certificate</NavDropdown.Item>
                        <NavDropdown.Item href="https://bioinfo.imd.ufrn.br/transcricaoemdia">Newsletter</NavDropdown.Item>                                                    
                    </NavDropdown>

                </Nav>
            
                </Navbar.Collapse>   
            </Container>
        </Navbar>
    )
    
}

