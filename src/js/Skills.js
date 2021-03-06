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
                    <Row className="bg-alice">
                        <Col md={6}>
                            <h3>Programming and markup languages</h3>
                            <ul className="skill-list">
                            {this.props.skills.languages.map((language) => {
                                    return (
                                        <li key={language}>{language}</li>
                                    )
                                })
                            }
                            </ul>
                        </Col>
                        <Col md={6}>
                            <h3>Frameworks</h3>
                            <ul className="skill-list">
                            {this.props.skills.frameworks.map((framework) => {
                                    return (
                                        <li key={framework}>{framework}</li>
                                    )
                                })
                            }
                            </ul>
                        </Col>
                    </Row>
                    <Row className="bg-ghostwhite">
                        <Col md={6}>
                            <h3>Software and technology</h3>
                            <ul className="skill-list">
                            {this.props.skills.software.map((software) => {
                                    return (
                                        <li key={software}>{software}</li>
                                    )
                                })
                            }
                            </ul>
                        </Col>
                        <Col md={6}>
                            <h3>Skills and knowledge</h3>
                            <ul className="skill-list">
                            {this.props.skills.knowledge.map((knowledge) => {
                                    return (
                                        <li key={knowledge}>{knowledge}</li>
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