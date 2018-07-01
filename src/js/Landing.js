import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/Landing.css';
import profilepic from '../img/santeri_on.jpg';

class Landing extends Component {
    render() {
      return (
        <div className="landing">
            <Row>
              <h2 className="subhead">About me</h2>
              <Col md={9}>
                <p>Some bullshit</p>
              </Col>
              <Col md={3}>
                <img alt="Profile" src={ profilepic } className="img-circle" />
              </Col>
            </Row>
        </div>
      );
    }
  }
  
  export default Landing;