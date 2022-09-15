import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
  return (
    <div className="main-Footer">
        <div className="container">
            <ReactBootStrap.Card>
            <ReactBootStrap.Card.Body>
                <blockquote className="blockquote mb-0">
                <p className="FooterMainText">
                    GameLibrary
                </p>
                <footer className="blockquote-footer">
                    &copy;{new Date().getFullYear()} <cite title="Source Title">Danylo Serhiienko | All rights reserved | Terms of Service | Privacy </cite>
                </footer>
                </blockquote>
            </ReactBootStrap.Card.Body>
            </ReactBootStrap.Card>
        </div>
    </div>
  );
}

export default Footer;