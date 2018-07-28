import React from "react";
import Link from 'next/link'

import {FaFacebook, FaInstagram, FaTwitter, FaGoogle} from 'react-icons/lib/fa'

const Footer = () => (
    <footer className="container text-center col-xs-12">
        <hr width='100%' color='black' height='1px' background-color='rgb(88, 82, 82)' />
        <a rel="noopener noreferrer" className="social-media" href="https://goo.gl/KL4XF9" target="_blank"><FaFacebook /></a>
        <a className="social-media" href="https://goo.gl/gHP4vt" target="_blank"><FaInstagram /></a>
        <a className="social-media" href="https://twitter.com/londonremovalss" target="_blank"><FaTwitter /></a>
        <br />
        <Link href='/contact' passHref><a className='copyRight' >CONTACT US</a></Link>
        <br />
        <p className='text-center copyRight'>Copyright @ 2018 Top London Removal | all rights reserved | 383 Barry Rd, East Dulwich, London SE22 0JZ</p>
    </footer>
);

export default Footer;
