/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import './assets/css/style-starter.css'

function Footer() {
  return (
 <div>
       <footer className="w3l-footer-16 py-5">
        <div className="container pt-md-5 pt-sm-4 pb-sm-2">
            <div className="row">
                <div className="col-lg-4">
                    <a className="footer-logo d-flex align-items-center" href="index.html">
                       DTS</a>
                    <p className="mt-3">In today’s fast-paced world, its essential to adapt and innovate. Our Digital Transformation Services (DTS) empower businesses to leverage cutting-edge technology, streamline operations, and enhance customer experiences. We provide tailored solutions that remove obstacles, enabling you to achieve your goals with precision and efficiency.</p>
                    <div className="columns-2 mt-4">
                        <ul className="social">
                            <li><a href="#facebook"><i className="fab fa-facebook-f"></i></a>
                            </li>
                            <li><a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
                            </li>
                            <li><a href="#twitter"><i className="fab fa-twitter"></i></a>
                            </li>
                            <li><a href="#google"><i className="fab fa-google-plus-g"></i></a>
                            </li>
                            <li><a href="#github"><i className="fab fa-github"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-5 mt-lg-0 mt-5">
                    <div className="row">
                        <div className="col-xl-5 col-6 column">
                            <h3 className="">Quick Link</h3>
                            <ul className="footer-gd-16">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="#blog">Blog Posts</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-xl-5 col-6 column px-xxl-0">
                            <h3 className="">Contact Info</h3>
                            <ul className="footer-contact-list">
                                <li className="">Jaffna </li>
                                <li className="mt-2"><a href="tel:+12 23456790">+94 773818603</a></li>
                                <li className="mt-2"><a href="mailto:info@example.com">g14finalproject@gmail.com</a></li>
                                <li className="mt-2"><a href="mailto:info@example.com">www.dts.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-7 col-8 column mt-lg-0 mt-4">
                    <h3 className="">Opening Hours</h3>
                    <ul className="list-footer-block">
                        <li>
                            Monday
                            <span>9:00 - 18:00</span>
                        </li>
                        <li>
                            tuesday
                            <span>10:00 - 19:00</span>
                        </li>
                        <li>
                            Wednesday
                            <span>8:00 - 17:00</span>
                        </li>
                        <li>
                            Thursday
                            <span>10:00 - 19:00</span>
                        </li>
                        <li>
                            Friday
                            <span>10:00 - 19:00</span>
                        </li>
                        <li>
                            Saturday
                            <span>10:00 - 19:00</span>
                        </li>
                        <li>
                            Sunday
                            <span>closed</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="below-section text-center pt-4 mt-5">
                <p className="copy-text">&copy; 2024 DTS. All rights reserved. Design by <a
                        href="" target="_blank" rel="noreferrer"> @VJN.Ramanaraj</a>
                </p>
            </div>
        </div>
    </footer>
</div>
   
   
   
  );
}

export default Footer;
