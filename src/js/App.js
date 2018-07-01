import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import '../css/App.css';
import Menu from './Menu';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Grid>
            <header className="header">
              <h1>Santeri Salonen</h1>
            </header>
            <Row>
              <Col md={3} xsHidden smHidden>
                <Menu/>
              </Col>
              <Col xs={12} md={9}>
                <Content />
              </Col>
            </Row>
            <Footer />
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
