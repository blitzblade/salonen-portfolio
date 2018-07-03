import React, { Component } from 'react';
import axios from 'axios';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import '../css/Contact.css';

class Contact extends Component {
    successMessage: '';
    state = {
        sent: false,
        nameValue: '',
        emailValue: '',
        msgValue: '',
        data: {},
        successMessageChanged: false
    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        const self = this;
        let params = new URLSearchParams();
        params.append('app', 'salonen-portfolio');
        params.append('name', this.state.nameValue);
        params.append('email', this.state.emailValue);
        params.append('message', this.state.msgValue);
        axios.post('http://kriisiryhma.com/data/sendmail.php', params)  
          .then(function (response) {
            self.setState({sent: true});
            console.log(response);
            self.setState({data: response.data});
            console.log(self.state);
            self.changeMessage();
          })
          .catch(function (error) {
            console.log(error);
          });  
    }
    changeMessage() {
        if (this.state.sent) {
            if (this.state.data.status === "ok") {
                this.successMessage = <div className="success"><strong>Thank you! Your message has been sent</strong></div>;
            } else {
                this.successMessage = <div className="error"><strong>Error: {this.state.data.message}</strong></div>;
            }
            // Must set state to trigger componentDidUpdate and to re-render
            this.setState({successMessageChanged: true})
        }
    }
    render() {
        return (
            <div className="contact">
                <h2 className="subhead">Contact</h2>
                <div id="message">
                    {this.successMessage}
                </div>
                <form id="contactform" onSubmit={this.handleSubmit.bind(this)} method="post">
                    <FormGroup controlId="contactform">
                        <h3>Contact Me</h3>
                        <FormControl
                            onChange={this.handleChange.bind(this)}
                            value={this.state.nameValue}
                            type="text"
                            name="nameValue"
                            placeholder="Name"
                        />
                        <br />
                        <FormControl
                            onChange={this.handleChange.bind(this)}
                            value={this.state.emailValue}
                            name="emailValue"
                            type="email"
                            placeholder="Email"
                        />
                        <h3>Your message here</h3>
                        <FormControl
                            onChange={this.handleChange.bind(this)}
                            value={this.state.msgValue}
                            name="msgValue"
                            componentClass="textarea"
                            placeholder="Write your message here"
                        />
                        <Button id="submit-btn" type="submit">Submit</Button>
                    </FormGroup>
                </form>
            </div>
        );
    }
}

export default Contact;