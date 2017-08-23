import React from 'react'; // eslint-disable-next-line
import { NavLink } from 'react-router-dom';

const Header = () => {
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
                                <li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
                                <li><NavLink exact to="/about" activeClassName="selected">About</NavLink></li>
                                <li><NavLink exact to="/resources" activeClassName="selected">Resources</NavLink></li>
                                <li><NavLink exact to="/projects" activeClassName="selected">Projects</NavLink></li>
                                {/* <li><a to="/hackathons">Hackathons</a></li> */}
                                <li><NavLink exact to="/contact" activeClassName="selected">Contact</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <hr id="hide" className="hr" />
            </div>
        </header>
    );
}

export default Header;