import React, { Component } from 'react';
import '../App.css';
import '../flexboxgrid.css';

export default class Projects extends Component {

    renderProjects() {
        return (
            <div>
                {this.props.projects.map((element, index) => {
                    return (
                        <div key={index} className="projectsP">
                            name: <span className="projectsTitle"><a target="_blank" rel="noopener noreferrer" href={element.resources["1"]}>{element.name}</a></span>&nbsp;
                            github: <span className="projectsType"><a target="_blank" rel="noopener noreferrer" href={element.resources["0"]}>repo</a></span><br/>
                            <img className="projectsImage" src={element.image} alt={element.name}/><br/>
                            <center><span className="projectsLiveLink"><a target="_blank" rel="noopener noreferrer" href={element.resources["1"]}>Would you like to check {element.name} out?</a></span></center>
                    <div className="row start-xs start-sm start-md start-lg middle-xs middle-sm middle-md middle-lg">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span className="projectsDescription">{element.description}</span><br/>
                            <span className="projectsDescription"><b>Technologies Used:</b>&nbsp;{element.technologies.join(", ")}</span><br/>
                        </div>
                    </div>
                            <hr className="hr"/>
                        </div>
                    );
                })}
            </div>
        );
    }

    render() {
        return (
            <div className="container projects">
                <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                        <p>My <a target="_blank" rel="noopener noreferrer" title="Github" href="https://github.com/GainorB">github profile</a> has my most up to date collection of projects.</p>
                        <p className="heroku">Projects currently deployed on Heroku. Please give Heroku ~30 seconds to wakeup. :)
                        <br/>For projects that require registration, login with:<br/><span className="dotted">Username: <strong>Test</strong> & Password: <strong>changeme</strong></span></p>
                        {this.renderProjects()}
                    </div>
                </div>
            </div>
        );
    }
}