import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import '../css/Contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sent: false,
            nameValue: '',
            emailValue: '',
            msgValue: ''
        }
    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state.nameValue);
    }
    render() {
        return (
            <div className="contact">
                <h2 className="subhead">Contact</h2>
                <form>
                    <FormGroup controlId="contactForm">
                        <ControlLabel>Name:</ControlLabel>
                        <FormControl
                        onChange={this.handleChange.bind(this)}
                        value={this.state.nameValue}
                        type="text"
                        name="nameValue"
                        placeholder="Name"
                        />
                        <ControlLabel>Email:</ControlLabel>
                        <FormControl
                        onChange={this.handleChange.bind(this)}
                        value={this.state.emailValue}
                        name="emailValue"
                        type="email"
                        placeholder="Name"
                        />
                        <ControlLabel>Message:</ControlLabel>
                        <FormControl
                        onChange={this.handleChange.bind(this)}
                        value={this.state.msgValue}
                        name="msgValue"
                        componentClass="textarea"
                        placeholder="Write your message here"
                        />
                    </FormGroup>
                </form>
            </div>
        );
    }
}

export default Contact;