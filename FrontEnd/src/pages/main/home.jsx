/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import './assets/css/style-starter.css'
import s1 from './assets/images/a7.jpg'
import s2 from './assets/images/a6.jpg'
import s3 from './assets/images/a3.jpg'
import s4 from './assets/images/a9.jpg'
import A1 from './assets/images/a12.jpg'
import w1 from './assets/images/w4.jpg'
import w2 from './assets/images/w5.jpg'
import w3 from './assets/images/w7.avif'
import Navbar from './Navbar'
import Footer from './Footer'
function Home() {
  return (
    <div>
<Navbar/>

    <div className="banner-wrap">
     
         
            <div className="banner-slide bg1">
                <div className="container">
                    <div className="hero-content">
                        <p data-animation="fadeInDown" className="mb-2">Event </p>
                        <h1 data-animation="flipInX" data-delay="0.8s" data-color="#fff">
                        Planning  
                        <span>with</span> Heart</h1>
                        <div className="cta-btn" data-animation="fadeInUp" data-delay="1s">
                            <a href="about.html" className="btn btn-style btn-primary">View More</a>
                        </div>
                    </div>
                </div>
                <div className="hero-overlay"></div>
            </div>
      
          
        
    </div>
  
    <div className="w3l-servicesblock2 py-5" id="services">
        <div className="container py-lg-5 py-md-4 py-2">
            <h3 className="title-style text-center mb-lg-5 mb-4">Services were <span>offering</span></h3>
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="grids5-info">
                        <a href="services.html" className="blog-image d-block zoom"><img src={s1} alt=""
                                className="img-fluid radius-image" />
                            <div className="image-overlay">
                                <h4>Weddings</h4>
                                <p>We create enchanting weddings that reflect your unique love story, handling every detail with care and precision.</p>
                            </div>
                            <div className="iconic-plus">
                                <i className="fas fa-plus"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mt-sm-0 mt-4">
                    <div className="grids5-info">
                        <a href="services.html" className="blog-image d-block zoom"><img src={s2} alt=""
                                className="img-fluid radius-image" />
                            <div className="image-overlay">
                                <h4>Concerts</h4>
                                <p>From intimate shows to large-scale festivals, we manage every aspect of concert planning for an unforgettable experience.</p>
                            </div>
                            <div className="iconic-plus">
                                <i className="fas fa-plus"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                    <div className="grids5-info">
                        <a href="services.html" className="blog-image d-block zoom"><img src={s3} alt=""
                                className="img-fluid radius-image" />
                            <div className="image-overlay">
                                <h4>Party</h4>
                                <p>We bring the fun to life with expertly planned parties that are customized to match your style and preferences.</p>
                            </div>
                            <div className="iconic-plus">
                                <i className="fas fa-plus"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                    <div className="grids5-info">
                        <a href="services.html" className="blog-image d-block zoom"><img src={s4} alt=""
                                className="img-fluid radius-image" />
                            <div className="image-overlay">
                                <h4>Conferences & Open days</h4>
                                <p>We organize professional conferences and open days, ensuring a seamless and impactful experience for all attendees.</p>
                            </div>
                            <div className="iconic-plus">
                                <i className="fas fa-plus"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-md-5 mt-5 pt-lg-4">
                <a href="services.html" className="btn btn-style">View More Services</a>
            </div>
        </div>
    </div>
  
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
                        <p>We craft compelling marketing strategies tailored to your brand, ensuring maximum reach and engagement. Our team specializes in creating campaigns that resonate with your target audience, driving results and growth for your business.</p>
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
                        <p>From corporate events to private gatherings, we manage every detail with precision and creativity. Our event planning services ensure a seamless and memorable experience, allowing you to focus on what matters most.</p>
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
                        <p>We bring your dream wedding to life with personalized planning and flawless execution. From intimate ceremonies to grand celebrations, our wedding services are designed to make your special day truly unforgettable.</p>
                        <a href="services.html" className="read">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
 
    <section className="w3l-about py-5" id="about">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="row align-items-center">
                <div className="col-lg-6 section-width pe-xl-5">
                    <h3 className="title-style">5 <span>years</span> of experience</h3>
                    <p className="mt-4">With five years of experience, we’ve mastered the art of delivering exceptional services. Our team is dedicated to ensuring client satisfaction, offering innovative solutions that exceed expectations. We pride ourselves on our ability to adapt to the unique needs of each project, providing top-notch service every time.</p>
                    <p className="mt-4 pb-dm-3">We’re here to make your vision a reality. Whether it’s a wedding, corporate event, or any special occasion, our expert planners are ready to assist. Let us take the stress out of planning and ensure that your event is nothing short of spectacular.</p>
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

    <section className="w3l-content1 py-5">
        <div className="container py-md-5 py-sm-4 py-2">
            <div className="row align-items-center py-4">
                <div className="col-lg-7">
                    <div className="bottom-info">
                        <h3 className="title-style text-white">Let us help you
                        plan your perfect event!</h3>
                        <p className="mt-4 text-light">We’re here to make your vision a reality. Whether it’s a wedding, corporate event, or any special occasion, our expert planners are ready to assist. Let us take the stress out of planning and ensure that your event is nothing short of spectacular.</p>
                    </div>
                </div>
                <div className="col-lg-5 text-lg-end">
                    <a href="contact.html" className="btn btn-style mt-lg-0 mt-md-5 mt-4">Book your appointment</a>
                </div>
            </div>
        </div>
    </section>
   <br></br>
    <section className="w3l-how-grids-3" id="how">
        <div className="container-fluid">
            <div className="row d-grid grid-col-2 grid-element-9 px-lg-0">
                <div className="left-texthny p-lg-5 py-4">
                    <div className="left-texthny-2 p-lg-5 p-4">
                        <h3 className="title-style"><span>Our</span> Works</h3>
                        <p className="my-3 pr-lg-4">We take pride in our portfolio, showcasing a range of successful projects that highlight our expertise and commitment to quality. Each project reflects our dedication to creating memorable experiences.</p>
                        <a href="about.html" className="btn btn-style btn-secondary mt-4">Read More</a>
                    </div>
                </div>
                <div className="left-grid-ele-9 grid-bg1">
                </div>
            </div>
            <br></br>
            <div className="row d-grid grid-col-3 grid-element-9 px-lg-0">
                <div className="left-grid-ele-9 grid-bg2">

                </div>
                <div className="left-texthny-3 p-lg-5 py-4 d-grid align-items-center">
                    <div className="sub-wid-grid-9 py-lg-0 py-5">
                        <i className="fas fa-child mb-4"></i>
                        <h4 className="text-grid-9"><a href="services.html">Best Works</a></h4>
                        <p className="sub-para">Explore our best works, where creativity meets execution. We’ve successfully delivered projects that stand out for their innovation and impact.

</p>

                    </div>
                </div>
                <div className="left-grid-ele-9 grid-bg3">

                </div>
                <div className="left-texthny-3 p-lg-5 py-4 d-grid align-items-center">
                    <div className="sub-wid-grid-9 py-lg-0 py-5">
                        <i className="fab fa-angellist mb-4"></i>
                        <h4 className="text-grid-9"><a href="services.html">New Styles</a></h4>
                        <p className="sub-para">Stay ahead of the curve with our latest offerings. We’re constantly evolving to bring fresh, new styles to our clients, ensuring your event or campaign is both modern and impactful.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    <div className="w3l-news py-5" id="homeblog">
        <div className="container py-lg-5 py-md-4 py-2">
            <h3 className="title-style text-center mb-lg-5 mb-4"><span>Our</span> Blog Posts</h3>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                    <div className="grids5-info">
                        <a href="#blog" className="blog-image d-block zoom"><img src={w1}
                                alt="" className="img-fluid news-image" />
                            <div className="image-overlay">
                                <span className="fas fa-plus"></span>
                            </div>
                        </a>
                        <div className="blog-info card-body blog-details">
                            <div className="d-flex align-items-center justify-content-between">
                                <a href="#author" className="post"><i className="fas fa-user"></i> Mauree</a>
                                <h6 className="date"><i className="fas fa-clock"></i> Nov 16, 2021.</h6>
                            </div>

                            <h4><a href="#blog" className="blog-desc">
                                    Set a Fashion Trend!</a></h4>
                            <p className="mt-3">Discover how we set trends that resonate with your audience, making your brand a leader in the industry.</p>
                            <a href="#blog" className="read">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                    <div className="grids5-info">
                        <a href="#blog" className="blog-image d-block zoom"><img src={w2}
                                alt="" className="img-fluid news-image" />
                            <div className="image-overlay">
                                <span className="fas fa-plus"></span>
                            </div>
                        </a>
                        <div className="blog-info card-body blog-details">
                            <div className="d-flex align-items-center justify-content-between">
                                <a href="#author" className="post"><i className="fas fa-user"></i> Alliees</a>
                                <h6 className="date"><i className="fas fa-clock"></i> Nov 18, 2021.</h6>
                            </div>

                            <h4><a href="#blog" className="blog-desc">How to Do A Opening Day</a></h4>
                            <p className="mt-3">Learn the secrets to a successful opening day with our expert tips and strategies.</p>
                            <a href="#blog" className="read">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                    <div className="grids5-info">
                        <a href="#blog" className="blog-image d-block zoom"><img src={w3}
                                alt="" className="img-fluid news-image" />
                            <div className="image-overlay">
                                <span className="fas fa-plus"></span>
                            </div>
                        </a>
                        <div className="blog-info card-body blog-details">
                            <div className="d-flex align-items-center justify-content-between">
                                <a href="#author" className="post"><i className="fas fa-user"></i> Johnson</a>
                                <h6 className="date"><i className="fas fa-clock"></i> Nov 20, 2021.</h6>
                            </div>

                            <h4><a href="#blog" className="blog-desc">
                                How We Do Our Marketing</a></h4>
                            <p className="mt-3">Get insights into our marketing process and how we create campaigns that deliver results.</p>
                            <a href="#blog" className="read">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
   <Footer/>
    </div>
  );
}

export default Home;
