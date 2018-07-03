import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/Projects.css';

class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <Row>
                    <h2 className="subhead">Projects</h2>
                    <p className="ingress">Apart from full-time jobs, I've also partaken in software projects on my own time and between jobs, most of them for Kooditar Oy. Here are some notable projects I've participated in.</p>
                    <div>
                    {this.props.projects.map((project) => {
                                let linkClass = "active"; 
                                let imgClass = "visible";
                                if (!project.url) {
                                    linkClass = "inactive";
                                    imgClass = "hidden";
                                } 
                                return (
                                    <div className="project" key={project.id}>
                                        <Row>
                                            <Col md={8}>
                                                <a href={project.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                                    <h4>{project.client} - {project.type}</h4>
                                                </a>
                                                <h5>{project.time}</h5>
                                                <p><strong>Description:</strong> {project.description}</p>
                                                <p><strong>Technology:</strong> {project.technology}</p>
                                            </Col>
                                            <Col md={4}>
                                                <a href={project.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                                    <img alt="Project" className={`project-image ${imgClass}`} src={`/img/${project.image}`} />
                                                </a>
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

export default Projects;