import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/Skills.css';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div className="skills">
                <Row>
                    <div className="bg-padding">
                        <h2 className="subhead">Skills</h2>
                    </div>
                    <Row>
                        <Col md={6} className="bg-alice">
                            <h3>Programming and markup languages</h3>
                            <ul class="skill-list">
                            {this.props.skills.languages.map((language) => {
                                    return (
                                        <li>{language}</li>
                                    )
                                })
                            }
                            </ul>
                        </Col>
                        <Col md={6}>
                            <h3>Frameworks</h3>
                            <ul class="skill-list">
                            {this.props.skills.frameworks.map((framework) => {
                                    return (
                                        <li>{framework}</li>
                                    )
                                })
                            }
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <h3>Software and Technology</h3>
                            <ul class="skill-list">
                            {this.props.skills.software.map((software) => {
                                    return (
                                        <li>{software}</li>
                                    )
                                })
                            }
                            </ul>
                        </Col>
                        <Col md={6}>
                            <h3>Skills and Methodology</h3>
                            <ul class="skill-list">
                            {this.props.skills.knowledge.map((knowledge) => {
                                    return (
                                        <li>{knowledge}</li>
                                    )
                                })
                            }
                            </ul>
                        </Col>
                    </Row>
                </Row>
            </div>
        );
    }
}

export default Skills;