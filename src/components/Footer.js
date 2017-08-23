import React from 'react'; // eslint-disable-next-line

const Footer = () => {
    return (
        <div className="container social">
            <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p className="footer-text"><b>Let's talk</b><br/>
                        Want to get in touch or talk about a project?<br/>
                        Feel free to contact me via email at<br/>
                        <b><a href="mailto:hi@gainorbostwick.com">hi@gainorbostwick.com</a></b></p>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <a title="Send me an email!" href="mailto:hi@gainorbostwick.com"><i className="fa fa-envelope" aria-hidden="false"></i></a>
                    <a target="_blank" rel="noopener noreferrer" title="LinkedIn" href="https://www.linkedin.com/in/gainorbostwick/"><i className="fa fa-linkedin" aria-hidden="false"></i></a>
                    <a target="_blank" rel="noopener noreferrer" title="Twitter" href="https://twitter.com/GainorBostwick"><i className="fa fa-twitter" aria-hidden="false"></i></a>
                    <a target="_blank" rel="noopener noreferrer" title="Instagram" href="https://www.instagram.com/gainorbos/"><i className="fa fa-instagram" aria-hidden="false"></i></a>
                    <a target="_blank" rel="noopener noreferrer" title="Github" href="https://github.com/GainorB"><i className="fa fa-github" aria-hidden="false"></i></a>
                    <a target="_blank" rel="noopener noreferrer" title="BitBucket" href="https://bitbucket.org/GainorB/"><i className="fa fa-bitbucket" aria-hidden="false"></i></a>
                    <a target="_blank" rel="noopener noreferrer" title="Stackoverflow" href="https://stackoverflow.com/users/7965894/gainorb"><i className="fa fa-stack-overflow" aria-hidden="false"></i></a>
                    {/* <a target="_blank" rel="noopener noreferrer" title="JSFiddle" href="https://jsfiddle.net/user/GainorB/fiddles/"><i className="fa fa-jsfiddle" aria-hidden="false"></i></a> */}
                    <br/><a target="_blank" rel="noopener noreferrer" href="https://github.com/GainorB/gainorb.github.io/blob/gh-pages/GainorBostwickResumeFSD.pdf" id="resume">View Resume</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;