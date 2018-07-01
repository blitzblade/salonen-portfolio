import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/Footer.css'
import linkedin from '../img/linkedin.png';
import github from '../img/github.png';
import email from '../img/email.png';

class Footer extends Component {
    render() {
        return (
            <Row>
                <div className="footer">
                    <Col md={4}>
                        <a href="https://www.linkedin.com/in/santeri-salonen-797b806b/" rel="noopener noreferrer" target="_blank"> 
                            <img alt="LinkedIn" title="LinkedIn" src={linkedin} className="footer-img"/>
                        </a>
                    </Col>
                    <Col md={4}>
                        <a href="https://github.com/sjsalonen" rel="noopener noreferrer" target="_blank">
                            <img alt="GitHub" title="GitHub" src={github} className="footer-img"/>
                        </a>
                    </Col>
                    <Col md={4}>
                        <a href="mailto:santeri.salonen@kooditar.fi" rel="noopener noreferrer" target="_blank">
                            <img alt="Email" title="Email" src={email} className="footer-img"/>
                        </a>
                    </Col>
                </div>
            </Row>
        );
    }
}

export default Footer;