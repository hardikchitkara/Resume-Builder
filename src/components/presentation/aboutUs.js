import React from 'react';
import aboutUs from "../../static/images/aboutus.jpg";

import { NavLink } from "react-router-dom";
const AboutUs = () => {
    
    return (        
            <div className=" container med   about-page">
            <div className="section contact-section">
                <div className="  contact-left-section ">
                    <p>       
                        Do you have any comments or questions? Contact Me
                    </p>
                    <h2 className="email text-large">
                        Hardik Chitkara
                    </h2>
                    <h2 className="email text-large">
                       Email Id: hardikchitkara@gmail.com
                    </h2>
                    <h2 className="email text-large">
                        Phone No.: +91 9034549722
                    </h2>
        
                    <p className="happy-to-help">
                        I am here to answer any query regarding my resume generator
                    </p>
                </div>
                <div className="contact-right-section">
                <img src={aboutUs}   className=" full-width about-us-img" alt="logo" />
                </div>
                </div>
           </div>
    
    );
}
 
export default AboutUs;