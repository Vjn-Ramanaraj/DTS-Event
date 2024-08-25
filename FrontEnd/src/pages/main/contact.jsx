/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import './assets/css/style-starter.css'

import Navbar from './Navbar'
import Footer from './Footer'
function Contact() {
  return (
    <div>
<Navbar/>
<section className="inner-banner py-5">
        <div className="w3l-breadcrumb py-lg-5">
            <div className="container pt-4 pb-sm-4">
                <h4 className="inner-text-title font-weight-bold pt-sm-5 pt-4">Contact Us</h4>
                <ul className="breadcrumbs-custom-path">
                    <li><a href="index.html">Home</a></li>
                    <li className="active"><i className="fas fa-angle-right mx-2"></i>Contact</li>
                </ul>
            </div>
        </div>
    </section>
    
    <section className="w3l-contact-11 py-5" id="contact">
        <div className="container py-lg-5 py-md-4 py-2">
            <h3 className="title-style text-center mb-lg-5 mb-4">Contact <span>Us</span></h3>
            <div className="row text-center mb-5 pb-lg-5 pb-sm-4">
                <div className="col-lg-3 col-sm-6 contact-info">
                    <i className="fas fa-map-marked-alt"></i>
                    <h4>Location</h4>
                    <p>Jaffna, 235 Terry, 10001</p>
                </div>
                <div className="col-lg-3 col-sm-6 contact-info mt-md-0 mt-4">
                    <i className="fas fa-headset"></i>
                    <h4>Phone</h4>
                    <p><a href="tel:+44 987 654 321">+94 773818603</a></p>
                </div>
                <div className="col-lg-3 col-sm-6 contact-info mt-lg-0 mt-4">
                    <i className="fas fa-envelope-open-text"></i>
                    <h4>Email</h4>
                    <p><a href="mailto:mail@example.com" className="email">dts@gmail.com</a></p>
                </div>
                <div className="col-lg-3 col-sm-6 contact-info mt-lg-0 mt-4">
                    <i className="fas fa-user-clock"></i>
                    <h4>Working Hours</h4>
                    <p>Mon-Sat: 9hrs & Sun: Closed</p>
                </div>
            </div>
            <div className="form-inner-cont mx-auto">
                <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="signin-form">
                    <div className="row align-form-map">
                        <div className="col-sm-6 form-input">
                            <input type="text" name="w3lName" id="w3lName" placeholder="Name" />
                        </div>
                        <div className="col-sm-6 form-input">
                            <input type="email" name="w3lSender" id="w3lSender" placeholder="Email" required="" />
                        </div>
                        <div className="col-sm-6 form-input">
                            <input type="text" name="w3lSubect" placeholder="Subject" className="contact-input"/>
                        </div>
                        <div className="col-sm-6 form-input">
                            <input type="number" name="w3lPhone" placeholder="Phone Number" className="contact-input"/>
                        </div>
                    </div>
                    <div className="form-input">
                        <textarea placeholder="Message" name="w3lMessage" id="w3lMessage" required=""></textarea>
                    </div>
                    <div className="submit text-right">
                        <button type="submit" className="btn btn-style">Submit
                            Message</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
   
    <div className="map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
            width="100%" height="400" frameBorder="0"  allowfullscreen=""></iframe>
    </div>
   
    <Footer/> 
    </div>
  );
}

export default Contact;
