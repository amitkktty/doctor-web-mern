import React, { useEffect } from 'react'

function Homebannerslider() {

    useEffect(function(){
        $('.hero-slider').owlCarousel({
            loop:true,
            autoplay:true,
            smartSpeed: 500,
            autoplayTimeout:3500,
            singleItem: true,
            autoplayHoverPause:true,
            items:1,
            nav:true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            dots:false,
        });

    },[]);
  return (
    <>
    
    <section className="slider">
                <div className="hero-slider owl-carousel">
                    <div className="single-slider" style={{backgroundImage:`url('img/slider2.jpg')`}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="text">
                                        <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
                                        <p>We provide compassionate and comprehensive medical care for the whole family. Our team of experienced doctors and staff is dedicated to your well-being, focusing on preventative care, accurate diagnoses, and effective treatments. Your health is our priority. </p>
                                        {/*<div className="button">
                                            <a href="#" className="btn">Get Appointment</a>
                                            <a href="#" className="btn primary">Learn More</a>
                                        </div>*/}
                                        <div className="button">
                                            <a href="/book-appointment" className="btn">Get Appointment</a>
                                            <a href="/about-us" className="btn primary">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="single-slider" style={{backgroundImage:`url('img/slider2.jpg')`}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="text">
                                        <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
                                        <p>We provide compassionate and comprehensive medical care for the whole family. Our team of experienced doctors and staff is dedicated to your well-being, focusing on preventative care, accurate diagnoses, and effective treatments. Your health is our priority. </p>
                                        <div className="button">
                                            <a href="/book-appointment" className="btn">Get Appointment</a>
                                            <a href="/about-us" className="btn primary">About Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slider" style={{backgroundImage:`url('img/slider2.jpg')`}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="text">
                                        <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
                                        <p>We provide compassionate and comprehensive medical care for the whole family. Our team of experienced doctors and staff is dedicated to your well-being, focusing on preventative care, accurate diagnoses, and effective treatments. Your health is our priority. </p>
                                        <div className="button">
                                            <a href="/book-appointment" className="btn">Get Appointment</a>
                                            <a href="/contact-us" className="btn primary">Conatct Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
            </section>
    
    </>
  )
}

export default Homebannerslider