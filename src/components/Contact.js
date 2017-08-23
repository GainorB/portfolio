import React from 'react';

const Contact = () => {
    return (
        <div className="container contact">
            <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                    <h3><span className="highlight">Looking for a developer?</span></h3>
                    <p>Leave a brief message and we will finish the conversation through email :)</p>
                    <form action='https://formspree.io/hi@gainorbostwick.com' method='POST'>
                        <p className="formInputs">
                            <input type="text" name="name" placeholder="Name" required />
                            <input type="email" name="email" placeholder="Your Email" required />
                            <textarea id="tArea" name="content" placeholder="Brief project description" required/>
                            <input type="hidden" name="_next" value="http://gainorbostwick.com/" />
                            <input type="hidden" name="_subject" value="In Need of Developer" />
                            <input type="text" name="_gotcha" className="hide" /><br/>
                            <input type="submit" value="Send" /><input type="reset" value="Reset" />
                        </p>
                    </form>
                </div>
            </div>
            <hr className="hr"/>
        </div>
    );
}

export default Contact;