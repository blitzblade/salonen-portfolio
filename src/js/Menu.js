import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../css/Menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <Link to="/"><Button bsSize="small" block><h4>About</h4></Button></Link>
                <Link to="/services"><Button bsSize="small" block><h4>Services</h4></Button></Link>
                <Link to="/cv"><Button bsSize="small" block><h4>CV</h4></Button></Link>
                <Link to="/skills"><Button bsSize="small" block><h4>Skills</h4></Button></Link>
                <Link to="/projects"><Button bsSize="small" block><h4>Projects</h4></Button></Link>
                <Link to="/contact"><Button bsSize="small" block><h4>Contact</h4></Button></Link>
            </div>
        );
    }
}

export default Menu;