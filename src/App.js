import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './flexboxgrid.css';

//  COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Resources from './components/Resources';
import ErrorPage from './components/ErrorPage';
//import Hackathons from './components/Hackathons';

//  MODELS
import skills from './models/skills.json';
import projects from './models/projects.json';

let linksArray = [];
const clientID = '122ff603d7c42dd8603f';
const clientSecret = '5f7352f184933fd891cf2b3290dad8c34f9082c9';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: skills,
      projects: projects,
      gists: [],
      gistsLinks: [],
      gistsDescriptions: []
    }

    this.getGists = this.getGists.bind(this);
    this.ProjectsComponent = this.ProjectsComponent.bind(this);
    this.aboutComponent = this.aboutComponent.bind(this);
    this.resourcesComponent = this.resourcesComponent.bind(this);
    //this.getGistsDescriptions = this.getGistsDescriptions.bind(this);
  }

  getGists = () => {
    axios.get('https://api.github.com/users/GainorB/gists?client_id=' + clientID + '&client_secret=' + clientSecret)
      .then((res) => {

        res.data.map((element) => {
          return linksArray.push(element.url);
        });

        //this.getGistsDescriptions();
        this.setState({ gists: res.data, gistsLinks: linksArray });
      }).catch((err) => { console.log(err); });
  }

  /*getGistsDescriptions = () => {    
    
    let promiseArray = linksArray.map((url) => {
      return axios.get(url)
    });

    axios.all(promiseArray)
         .then(axios.spread((...results) => {
          console.log(results);

          let temp = results.map((element) => {
            return element.data.files["notes.md"];
          });

           this.setState({ gistsDescriptions: temp });
         })).catch((err) => { console.log(err); });
  }*/

  ProjectsComponent = () => {
    return (
      <Projects
        skills={this.state.skills}
        projects={this.state.projects}
      />
    );
  }

  aboutComponent = () => {
    return (
      <About
        skills={this.state.skills}
      />
    );
  }

  resourcesComponent = () => {
    return (
      <Resources
        gists={this.state.gists}
        gistsDescriptions={this.state.gistsDescriptions}
        grabGists={this.getGists.bind(this)}
      />
    );
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/about" render={() => this.aboutComponent()}></Route>
              <Route path="/contact" component={Contact}></Route>
              {/* <Route path="/hackathons" component={Hackathons}></Route> */}
              <Route path="/projects" render={() => this.ProjectsComponent()}></Route>
              <Route path="/resources" render={() => this.resourcesComponent()}></Route>
              <Route path="/*" component={ErrorPage}></Route>
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}