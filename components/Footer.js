import React from "react";

import {FaFacebook, FaInstagram, FaTwitter, FaGoogle} from 'react-icons/lib/fa'

const Footer = () => (
    <footer className="container text-center col-xs-12">
        <hr width='100%' color='black' height='1px' background-color='rgb(88, 82, 82)' />

        <a rel="noopener noreferrer" className="social-media" href="#" target="_blank"><FaFacebook /></a>
        <a className="social-media" href="#"><FaGoogle /></a>
        <a className="social-media" href="#" target="_blank"><FaInstagram /></a>
        <a className="social-media" href="#" target="_blank"><FaTwitter /></a>
        <br />
        <br />

        <p className='text-center'  style={{ color: '#808080'}}>Copyright @ 2018 Top London Removal | all rights reserved</p>
    </footer>
);

export default Footer;
