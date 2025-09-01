import React, { useEffect } from 'react'

function Homegalleryslider() {

    useEffect(()=>{


        $('.portfolio-slider').owlCarousel({
            items:3,
            autoplay:true,
            autoplayTimeout:3500,
            margin:15,
            smartSpeed: 400,
            autoplayHoverPause:true,
            loop:true,
            nav:false,
            dots:false,
            responsive:{
                
                480: {
                    items:1,
                },
                768: {
                    items:3,
                },
                1170: {
                    items:3,
                },
            }
        });


    },[]);
  return (
    <>
    
    <section className="portfolio section" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>We Maintain Cleanliness Rules Inside Our Hospital</h2>
                                <img src="img/section-img.png" alt="#" />
                                <p>Any time available for help for patients to do emergency in our hospital. solve any problem</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <div className="owl-carousel portfolio-slider">
                                <div className="single-pf">
                                    <img src="img/pf1.jpg" alt="#" />
                                    {/*<a href="portfolio-details.html" className="btn">View Details</a>*/}
                                    <a href="/about-us" className="btn">View Details</a>
                                </div>
                                <div className="single-pf">
                                    <img src="img/pf2.jpg" alt="#" />
                                    {/*<a href="portfolio-details.html" className="btn">View Details</a>*/}
                                    <a href="/about-us" className="btn">View Details</a>
                                </div>
                                <div className="single-pf">
                                    <img src="img/pf3.jpg" alt="#" />
                                    {/*<a href="portfolio-details.html" className="btn">View Details</a>*/}
                                    <a href="/about-us" className="btn">View Details</a>
                                </div>
                                <div className="single-pf">
                                    <img src="img/pf4.jpg" alt="#" />
                                    {/*<a href="portfolio-details.html" className="btn">View Details</a>*/}
                                    <a href="/about-us" className="btn">View Details</a>
                                </div>
                                <div className="single-pf">
                                    <img src="img/pf1.jpg" alt="#" />
                                    {/*<a href="portfolio-details.html" className="btn">View Details</a>*/}
                                    <a href="/about-us" className="btn">View Details</a>
                                </div>
                                <div className="single-pf">
                                    <img src="img/pf2.jpg" alt="#" />
                                    {/*<a href="portfolio-details.html" className="btn">View Details</a>*/}
                                    <a href="/about-us" className="btn">View Details</a>
                                </div>
                                <div className="single-pf">
                                    <img src="img/pf3.jpg" alt="#" />
                                    {/*<a href="portfolio-details.html" className="btn">View Details</a>*/}
                                    <a href="/about-us" className="btn">View Details</a>
                                </div>
                                <div className="single-pf">
                                    <img src="img/pf4.jpg" alt="#" />
                                    {/*<a href="portfolio-details.html" className="btn">View Details</a>*/}
                                    <a href="/about-us" className="btn">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
  )
}

export default Homegalleryslider