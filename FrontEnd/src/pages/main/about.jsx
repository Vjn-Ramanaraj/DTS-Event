/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import './assets/css/style-starter.css'
import s1 from './assets/images/testi1.jpg'
import s2 from './assets/images/testi2.jpg'
import s3 from './assets/images/testi3.jpg'
import A1 from './assets/images/w1.jpg'
import w1 from './assets/images/w4.jpg'
import w2 from './assets/images/w2.jpg'
import w3 from './assets/images/w3.jpg'
import w4 from './assets/images/s1.jpg'
import w5 from './assets/images/s2.jpg'
import w6 from './assets/images/s3.jpg'
import w7 from './assets/images/a4.jpg'
import s4 from './assets/images/s4.avif'
import s5 from './assets/images/s5.avif'
import s6 from './assets/images/s6.avif'
import s7 from './assets/images/s7.avif'

import Navbar from './Navbar'
import Footer from './Footer'
function Home() {
  return (
    <div>
<Navbar/>
    
<section className="inner-banner py-5">
        <div className="w3l-breadcrumb py-lg-5">
            <div className="container pt-4 pb-sm-4">
                <h4 className="inner-text-title font-weight-bold pt-sm-5 pt-4">About Us</h4>
                <ul className="breadcrumbs-custom-path">
                    <li><a href="index.html">Home</a></li>
                    <li className="active"><i className="fas fa-angle-right mx-2"></i>About</li>
                </ul>
            </div>
        </div>
    </section>

    <section className="w3l-about py-5" id="about">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="row align-items-center">
                <div className="col-lg-6 section-width pe-xl-5">
                    <h3 className="title-style">5 <span>years</span> of experience</h3>
                    <p className="mt-4">With half a decade of experience, we’ve honed our skills in delivering exceptional services that exceed client expectations. Our team is committed to excellence, continuously innovating to provide solutions that are both effective and efficient. We take pride in our ability to tackle challenges head-on, ensuring that every project is a success.</p>
                    <p className="mt-4 pb-dm-3">We’ve successfully organized and executed a wide range of events, each tailored to meet the unique needs of our clients. From corporate functions to private celebrations, our events are designed to leave a lasting impression.

</p>
                    <a href="about.html" className="btn btn-style mt-4"> Know more about us</a>
                </div>
                <div className="col-lg-6 history-info mt-lg-0 mt-5 pt-md-4 pt-2">
                    <div className="position-relative img-border">
                        <img src={A1} className="img-fluid1 video-popup-image" alt="video-popup"/>

                        <a href="#small-dialog" className="popup-with-zoom-anim play-view text-center position-absolute">
                            <span className="video-play-icon">
                                <span className="fa fa-play"></span>
                            </span>
                        </a>

                  
                        <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                            <iframe src="https://player.vimeo.com/video/333569091?h=9836ac4d97"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="w3l-team-61 py-5" id="team">
        <div className="container py-lg-5 py-md-4 py-2">
            <h3 className="title-style mb-lg-5 mb-4 text-center"><span>Our</span> Events</h3>
          
    <section className="ag-photo-gallery-block">
  <div className="ag-format-container">
    <div className="ag-photo-gallery_list">
      <div className="ag-photo-gallery_item ag-photo-gallery_item__wide">
        <figure className="ag-photo-gallery_figure">
          <a href={w1} data-fancybox="gallery">
            <img src={w1} className="ag-photo-gallery_img" alt="" />
          </a>
        </figure>
      </div>

      <div className="ag-photo-gallery_item">
        <figure className="ag-photo-gallery_figure">
          <a href={A1} data-fancybox="gallery">
            <img src={A1} className="ag-photo-gallery_img" alt="" />
          </a>
        </figure>
      </div>

      <div className="ag-photo-gallery_item ag-photo-gallery_item__narrow">
        <figure className="ag-photo-gallery_figure">
          <a href={w2} data-fancybox="gallery">
            <img src={w2} className="ag-photo-gallery_img" alt="" />
          </a>
        </figure>
      </div>

      <div className="ag-photo-gallery_item ag-photo-gallery_item__middle">
        <figure className="ag-photo-gallery_figure">
          <a href={w3} data-fancybox="gallery">
            <img src={w3} className="ag-photo-gallery_img" alt="" />
          </a>
        </figure>
      </div>

      <div className="ag-photo-gallery_item ag-photo-gallery_item__narrow">
        <figure className="ag-photo-gallery_figure">
          <a href={w4} data-fancybox="gallery">
            <img src={w4}className="ag-photo-gallery_img" alt="" />
          </a>
        </figure>
      </div>

      <div className="ag-photo-gallery_item ag-photo-gallery_item__wide">
        <figure className="ag-photo-gallery_figure">
          <a href={w5} data-fancybox="gallery">
            <img src={w5} className="ag-photo-gallery_img" alt="" />
          </a>
        </figure>
      </div>

      <div className="ag-photo-gallery_item">
        <figure className="ag-photo-gallery_figure">
          <a href={w6} data-fancybox="gallery">
            <img src={w6} className="ag-photo-gallery_img" alt="" />
          </a>
        </figure>
      </div>

      <div className="ag-photo-gallery_item ag-photo-gallery_item__narrow">
        <figure className="ag-photo-gallery_figure">
          <a href={w7} data-fancybox="gallery">
            <img src={w7}className="ag-photo-gallery_img" alt="" />
          </a>
        </figure>
      </div>

      <div className="ag-photo-gallery_item ag-photo-gallery_item__middle">
        <figure className="ag-photo-gallery_figure">
          <a href={s4} data-fancybox="gallery">
            <img src={s4} className="ag-photo-gallery_img" alt="" />
          </a>
        </figure>
      </div>

      <div className="ag-photo-gallery_item ag-photo-gallery_item__narrow">
        <figure className="ag-photo-gallery_figure">
          <a href={s5} data-fancybox="gallery">
            <img src={s5} className="ag-photo-gallery_img" alt="" />
          </a>
        </figure>
      </div>

      <div className="ag-photo-gallery_item ag-photo-gallery_item__wide">
        <figure className="ag-photo-gallery_figure">
          <a href={s6} data-fancybox="gallery">
            <img src={s6} className="ag-photo-gallery_img" alt="" />
          </a>
        </figure>
      </div>

      <div className="ag-photo-gallery_item">
        <figure className="ag-photo-gallery_figure">
          <a href={s7} data-fancybox="gallery">
            <img src={s7} className="ag-photo-gallery_img" alt="" />
          </a>
        </figure>
      </div>

      
    </div>
  </div>
</section>
        </div>
    </section>
 
  

    <section className="home-services py-5" id="services">
        <div className="container py-lg-5 py-md-4 py-2">
            <h3 className="title-style text-center mb-lg-5 mb-4">What <span>we do</span> for our <span>Clients?</span></h3>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                    <div className="box-wrap">
                        <div className="icon">
                            <i className="fas fa-user-tie"></i>
                        </div>
                        <h4 className="number">01</h4>
                        <h4><a href="#url">Marketing</a></h4>
                        <p>We offer innovative marketing strategies that boost your brand’s visibility and drive engagement. Our approach is data-driven and customized to fit your specific goals.</p>
                        <a href="services.html" className="read">Read more</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                    <div className="box-wrap">
                        <div className="icon">
                            <i className="fas fa-cut"></i>
                        </div>
                        <h4 className="number">02</h4>
                        <h4><a href="#url">Event Arrangements</a></h4>
                        <p>Our event planning services cover every detail, ensuring your event runs smoothly from start to finish. Whether it’s a corporate event or a private gathering, we bring your vision to life.</p>
                        <a href="services.html" className="read">Read more</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                    <div className="box-wrap">
                        <div className="icon">
                            <i className="fas fa-person-booth"></i>
                        </div>
                        <h4 className="number">03</h4>
                        <h4><a href="#url">Wedding Services</a></h4>
                        <p>We specialize in creating unforgettable weddings. Our team handles everything from planning to execution, allowing you to enjoy your special day without worry.</p>
                        <a href="services.html" className="read">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="w3l-content1 py-5">
        <div className="container py-md-5 py-sm-4 py-2">
            <div className="row align-items-center py-4">
                <div className="col-lg-7">
                    <div className="bottom-info">
                    <h3 className="title-style text-white">Let us help you
                    plan your perfect event!</h3>
                        <p className="mt-4 text-light">Our expert planners are here to make your event memorable. We handle everything, from the smallest detail to the grandest design, so you can focus on enjoying the moment.</p>
                    </div>
                </div>
                <div className="col-lg-5 text-lg-end">
                    <a href="contact.html" className="btn btn-style mt-lg-0 mt-md-5 mt-4">Book your appointment</a>
                </div>
            </div>
        </div>
    </section>
 
    <section className="w3l-customer-block py-5">
        <div className="container py-lg-5 py-md-4 py-2">
            <h3 className="title-style text-center mb-lg-5 mb-4"><span>Our</span> Testimonials</h3>
            <div className="row">
                <div className="col-md-4">
                    <div className="customer-single pe-lg-4">
                        <blockquote>Their expertise and attention to detail made our event a resounding success. We couldn’t have done it without them.
                        </blockquote>
                        <div className="customer-img d-flex align-items-center mt-4">
                            <img src={s3} className="img-fluid1 me-3" alt="" />
                            <div className="customer-info">
                                <h6>Theo Hall</h6>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-md-0 mt-5">
                    <div className="customer-single pe-lg-4">
                        <blockquote>The team was professional, creative, and responsive. They truly understood our vision and made it a reality
                        </blockquote>
                        <div className="customer-img d-flex align-items-center mt-4">
                            <img src={s2} className="img-fluid1 me-3" alt="" />
                            <div className="customer-info">
                                <h6>Jenna John</h6>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-md-0 mt-5">
                    <div className="customer-single pe-lg-4">
                        <blockquote>From start to finish, the experience was seamless. Their dedication and passion for what they do are evident in the quality of their work.
                        </blockquote>
                        <div className="customer-img d-flex align-items-center mt-4">
                            <img src={s1} className="img-fluid1 me-3" alt="" />
                            <div className="customer-info">
                                <h6>William Due</h6>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    
  
    <Footer/>
  
    </div>
  );
}

export default Home;
