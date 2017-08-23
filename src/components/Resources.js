import React, { Component } from 'react';
import '../App.css';
import '../flexboxgrid.css';

export default class Resources extends Component {

    componentWillMount() {
        this.props.grabGists();
    }

    displayGists() {
        return (
            <div>
                <ol>
                {this.props.gists.map((element, index) => {
                    return (
                        <div key={index}>
                            <li><a target="_blank" rel="noopener noreferrer" href={element.html_url}>{element.description}</a></li>
                        </div>
                    );
                })}
                </ol>
            </div>
        );
    }

    /*displayDescriptions() {
        return (
            <div>
                {this.props.gistsDescriptions.map((element, index) => {
                    return (
                        <div key={index}>
                            <p>{element.content}</p>
                        </div>
                    );
                })}
            </div>
        );
    }*/

    render() {
        return (
            <div className="container resources">
                <div className="row start-xs start-sm start-md start-lg middle-xs middle-sm middle-md middle-lg">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-offset-2">
                        <p>Here is a collection of my Github gists. Feel free to check them out to find out more on what I am learning. I frequently make gists to refer back to when learning a new technology or concept:</p>
                        {this.displayGists()}
                    </div>
                </div>
                <hr className="hr"/>
            </div>
        )
    }
}