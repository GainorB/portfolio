import React from 'react'; // eslint-disable-next-line
import { NavLink } from 'react-router-dom';
import '../App.css';
import '../flexboxgrid.css';

export default function Header(props) {
    return (
        <header>
            <div className="container">
                <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h1>Gainor Bostwick</h1>
                        <h2 className="subheader">Full Stack Web Developer</h2>
                    </div>
                </div>
                <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <nav>
                            <ul id="navbar">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/resources">Resources</a></li>
                                <li><a href="/projects">Projects</a></li>
                                {/* <li><a href="/hackathons">Hackathons</a></li> */}
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <hr id="hide" className="hr" />
            </div>
        </header>
    );
}