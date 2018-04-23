import React from "react";
import Link from 'next/link'


const Header = () => (
    <header>
        <nav className="navbar navbar-inverse navbar-white">
            <div className="text-right">
                <a className="phone" href="tel:07490531699"><span aria-hidden="true" className="glyphicon glyphicon-earphone"></span> 02080000000</a>
            </div>
            <div className="container-fluid">
                <div className="navbar-header">
                    <button aria-expanded="false" className="navbar-toggle navbar-toggle-org collapsed" data-target="#bs-example-navbar-collapse-1" data-toggle="collapse" type="button"><span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span></button>
                    <a className="navbar-brand logo" href='./'>
                        <img src='/static/logo.png' alt="Top london removals" width='161px' height='87px' />
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className="navi">
                            <Link href='/' passHref>
                                <a>HOME</a>
                            </Link>
                        </li>
                        <li className="dropdown navi">
                            <a aria-expanded="false" aria-haspopup="true" className="dropdown-toggle" data-toggle="dropdown" href="" role="button">REMOVALS<span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li className="sub-navi">
                                    <Link href='/home-removals' passHref>
                                        <a>Home Removals</a>
                                    </Link>
                                </li>
                                <li className="sub-navi">
                                    <Link href='/office-removals' passHref>
                                        <a>Office Removals</a>
                                    </Link>
                                </li>
                                <li className="sub-navi">
                                    <Link href='/international-removals' passHref>
                                        <a>International Removals</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="navi">
                            <Link href='/man-and-van' passHref >
                                <a>MAN AND VAN</a>
                            </Link>
                        </li>
                        <li className="navi">
                            <Link href='/prices' passHref>
                                <a>PRICES</a>
                            </Link>
                        </li>
                        <li className="navi">
                            <Link href='/get-a-quote' passHref>
                                <a>GET A QUOTE</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

);

export default Header;
