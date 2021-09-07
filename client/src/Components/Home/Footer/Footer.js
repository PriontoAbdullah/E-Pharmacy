import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div>
            <div className="f-container">
                
                <div className="f-card">
                    <p className="f-boldText font-display"> <strong> TAILS </strong></p>
                    <p className="f-gText font-sans">Design Code and Ship!</p>
                </div>
                <div className="f-card">
                    <p className="f-boldText font-display"><strong>ABOUT</strong></p>
                    <div className="f-gText font-sans">
                        <p>Company</p>
                        <p>Careers</p>
                        <p>Blog</p>
                    </div>
                </div>
                <div className="f-card">
                    <p className="f-boldText font-display"><strong>SUPPORT</strong></p>
                    <div className="f-gText font-sans">
                        <p>Contact Support</p>
                        <p>Help Resources</p>
                        <p>Release Updates</p>
                    </div>
                </div>
                <div className="f-card">
                    <p className="f-boldText font-display"><strong>PLATFORM</strong></p>
                    <div className="f-gText font-sans">
                        <p>Terms and Previous</p>
                        <p>Pricing</p>
                        <p>FAQ</p>
                    </div>
                </div>
                <div className="f-card">
                    <p className="f-boldText font-display"><strong>CONTACT</strong></p>
                    <div className="f-gText font-sans">
                        <p>Send a Message</p>
                        <p>Request a Quote</p>  
                    </div>
                </div>
            </div>
            <div className="f-footerBar">
                <p style={{fontSize:"11px"}} className="f-gText font-sans">@2021 All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;
