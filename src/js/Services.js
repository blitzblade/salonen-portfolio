import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/Services.css';

class Services extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return(
            <div className="services">
                <Row>
                    <h2 className="subhead">Services</h2>
                    <div>
                    {this.props.services.map((service) => {
                                return (
                                    <div className="service" key={service.name}>
                                        <Row>
                                            <Col md={4}>
                                                <img className="service-image" alt={service.name} title={service.name} src={`/img/${service.image}`} />
                                            </Col>
                                            <Col md={8}>
                                                <h3 className="service-name">{service.name}</h3>
                                                <p>{service.description}</p>
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            })
                    }
                    </div>
                </Row>
            </div>
        );
    }
}

export default Services;