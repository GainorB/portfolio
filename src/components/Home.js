import React from 'react';
import '../App.css';
import '../flexboxgrid.css';

export default function Home(props) {
    return (
            <div className="container mini">
                <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        <h3>
                            <p>I’m an independent web developer from New York.<br/>I work primarily with <span className="coreLang">Javascript</span>, <span className="coreLang">Node.js</span> and <span className="coreLang"> React.js</span>.</p>
                            <p>Feel free to take a look at my recent <b><a href="/projects">projects</a></b> or learn more <b><a href="/about">about me</a></b>.<br/>Also, you can stop and say hello at <b><a href="mailto:hi@gainorbostwick.com">hi@gainorbostwick.com</a></b></p>
                        </h3>
                    </div>
                </div>
            </div>
    )
}