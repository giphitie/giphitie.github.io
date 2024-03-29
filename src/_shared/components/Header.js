/*
 * @Author: Giphitie
 * @Date: 2020-07-24 22:14:27
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-11-06 22:23:34
 */

import React from "react";
import logo from "../assets/images/giphitie.logo.png";

const Header = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark giphitie_navbar giphitie-navbar-light site-navbar-target"
            id="giphitie-navbar"
            data-aos="fade-in"
            data-aos-delay="500"
        >
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    <img src={logo} width="auto" height="30" alt="" />
                </a>
                <button
                    className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
                    type="button"
                    data-toggle="collapse"
                    data-target="#giphitie-nav"
                    aria-controls="giphitie-nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="giphitie-nav">
                    <ul className="navbar-nav nav ml-auto">
                        <li className="nav-item">
                            <a href="#home-section" className="nav-link">
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#about-section" className="nav-link">
                                <span>About</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#resume-section" className="nav-link">
                                <span>Resume</span>
                            </a>
                        </li>
                        {/* <li className="nav-item">
							<a href="#services-section" className="nav-link">
								<span>Services</span>
							</a>
						</li> */}
                        <li className="nav-item">
                            <a href="#skills-section" className="nav-link">
                                <span>Skills</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects-section" className="nav-link">
                                <span>Projects</span>
                            </a>
                        </li>
                        {/* <!-- <li className="nav-item">
							<a href="#blog-section" className="nav-link"><span>My Blog</span></a>
						</li> --> */}
                        <li className="nav-item">
                            <a href="#contact-section" className="nav-link">
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
