import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Cv from './Cv';
import Services from './Services';
import Skills from './Skills';
import jobdata from '../data/jobs.json';
import servicedata from '../data/services.json';
import skilldata from '../data/skills.json'; 

class Content extends Component {
    render() {
      return (
        <div id="content">
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/cv" component={(props) => <Cv jobs={jobdata.jobs} />} />
                <Route path="/services" component={(props) => <Services services={servicedata.services} />} />
                <Route path="/skills" component={(props) => <Skills skills={skilldata.skills} />} />
                <Route path="/projects" component={Cv} />
                <Route path="/contact" component={Cv} />
            </Switch>
        </div>
      );
    }
  }

export default Content;
