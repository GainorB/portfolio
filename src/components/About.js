import React, { Component } from 'react';
import '../App.css';
import '../flexboxgrid.css';

export default class About extends Component {

    renderCoreSkills() {
        return (
            <div>
                {this.props.skills.map((element, index) => {
                    return (
                        <div key={index}>
                            <span className="highlight">Core Skills</span><ol>
                                {element.core.map((element, index) => {
                                    return (
                                        <div key={index}>
                                            <li>{element}</li>
                                        </div>
                                    );
                                })}
                            </ol>
                        </div>
                    )
                })}
            </div>
        );
    }

    renderSoftSkills() {
        return (
            <div>
                {this.props.skills.map((element, index) => {
                    return (
                        <div key={index}>
                            <span className="highlight">Other things I know</span><ol>
                                {element.soft.map((element, index) => {
                                    return (
                                        <div key={index}>
                                            <li>{element}</li>
                                        </div>
                                    );
                                })}
                            </ol>
                        </div>
                    )
                })}
            </div>
        );
    }

    render() {
        return (
            <div className="container about">
                <div className="row start-xs start-sm start-md start-lg middle-xs middle-sm middle-md middle-lg">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-offset-2">
                        <p>Skilled Full Stack Developer, passionate about developing applications that will bring about change in peoples’ lives by utilizing my personal experiences, interests and expertise to provide unforgettable experiences. A lifelong learner dedicated to continuously learning and implementing new practices to perfect my craft and create innovative applications.</p>
                        <div className="container">
                            <div className="row start-xs start-sm start-md start-lg top-xs top-sm top-md top-lg">
                                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-4">
                                    {this.renderCoreSkills()}
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-4">
                                    {this.renderSoftSkills()}
                                </div>
                            </div>
                        </div>
                        <span className="highlight">What I’ve been up to lately</span>
                        <ol>
                            <li>Teaching Assistant at <a target="_blank" rel="noopener noreferrer" href="https://generalassemb.ly/">General Assembly</a>, assisting students enrolled in the 12-week Web Development Immersive program.</li>
                            <li>Doing online courses to brush up my skills on various subjects.</li>
                            <li>Participating in hackathons to build my portfolio, meet other developers and learn new technologies.</li>
                        </ol>
                    </div>
                </div>
                <hr className="hr" />
            </div>
        );
    }
}