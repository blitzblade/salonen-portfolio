import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import '../css/Cv.css';

class Cv extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return(
            <div className="cv">
                <Row>
                    <h2 className="subhead">Cv</h2>
                    <div>
                    {this.props.jobs.map((job) => {
                                return (
                                    <div className="job" key={job.id}>
                                        <p><strong>Company:</strong> {job.company}</p>
                                        <p><strong>Title:</strong> {job.title}</p>
                                        <p><strong>Length:</strong> {job.start_date} - {job.end_date}</p>
                                        <p><strong>Description:</strong> {job.description}</p>
                                        <p><strong>Technologies:</strong> {job.technology}</p>
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

export default Cv;