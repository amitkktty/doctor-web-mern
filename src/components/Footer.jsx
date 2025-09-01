import React from 'react'

function Footer() {
  return (
    <>
    <footer id="footer" className="footer ">
		
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="single-footer">
                            <h2>About Us</h2>
                            <p>We provide compassionate and comprehensive medical care for the whole family. Our team of experienced doctors and staff is dedicated to your well-being, focusing on preventative care, accurate diagnoses, and effective treatments. Your health is our priority.</p>
                        
                            <ul className="social">
                                <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                <li><a href="#"><i className="icofont-google-plus"></i></a></li>
                                <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                <li><a href="#"><i className="icofont-vimeo"></i></a></li>
                                <li><a href="#"><i className="icofont-pinterest"></i></a></li>
                            </ul>
                        
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="single-footer f-link">
                            <h2>Quick Links</h2>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <ul>
                                        <li><a href="/"><i className="fa fa-caret-right" aria-hidden="true"></i>Home</a></li>
                                        <li><a href="/about-us"><i className="fa fa-caret-right" aria-hidden="true"></i>About Us</a></li>
                                        <li><a href="/services"><i className="fa fa-caret-right" aria-hidden="true"></i>Services</a></li>
                                        <li><a href="/services"><i className="fa fa-caret-right" aria-hidden="true"></i>Our Cases</a></li>
                                        <li><a href="/services"><i className="fa fa-caret-right" aria-hidden="true"></i>Other Links</a></li>	
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <ul>
                                        <li><a href="/services"><i className="fa fa-caret-right" aria-hidden="true"></i>Consuling</a></li>
                                        <li><a href="/services"><i className="fa fa-caret-right" aria-hidden="true"></i>Finance</a></li>
                                        <li><a href="/services"><i className="fa fa-caret-right" aria-hidden="true"></i>Testimonials</a></li>
                                        <li><a href="/services"><i className="fa fa-caret-right" aria-hidden="true"></i>FAQ</a></li>
                                        <li><a href="/contact-us"><i className="fa fa-caret-right" aria-hidden="true"></i>Contact Us</a></li>	
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="single-footer">
                            <h2>Open Hours</h2>
                            <p>Any time available for help for patients to do emergency in our hospital.</p>
                            <ul className="time-sidual">
                                <li className="day">Monday - Fridayp <span>8.00-20.00</span></li>
                                <li className="day">Saturday <span>9.00-18.30</span></li>
                                <li className="day">Monday - Thusday <span>9.00-15.00</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="single-footer">
                            <h2>Newsletter</h2>
                            <p>subscribe to our newsletter to get allour news in your inbox.Any time available for help for patients to do emergency in our hospital.</p>
                            <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                                <input name="email" placeholder="Email Address" className="common-input" required="" type="email" />
                                <button className="button"><i className="icofont icofont-paper-plane"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="copyright-content">
                            <p>© Copyright 2025  |  All Rights Reserved by <a href="https://shishtechnology.com/" target="_blank">shishtechnology.com</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer