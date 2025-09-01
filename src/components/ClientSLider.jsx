import React, { useEffect } from 'react'

function ClientSLider() {

    useEffect(()=>{

    // portfolio-slider
    $('.clients-slider').owlCarousel({
        items:5,
        autoplay:true,
        autoplayTimeout:3500,
        margin:15,
        smartSpeed: 400,
        autoplayHoverPause:true,
        loop:true,
        nav:false,
        dots:false,
        responsive:{
            300: {
                items:1,
            },
            480: {
                items:2,
            },
            768: {
                items:3,
            },
            1170: {
                items:5,
            },
        }
    });



    },[]);
  return (
    <>
    
    
    <section className="clients overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="owl-carousel clients-slider">
                                <div className="single-clients">
                                    <img src="img/client1.png" alt="#" />
                                </div>
                                <div className="single-clients">
                                    <img src="img/client2.png" alt="#" />
                                </div>
                                <div className="single-clients">
                                    <img src="img/client3.png" alt="#" />
                                </div>
                                <div className="single-clients">
                                    <img src="img/client4.png" alt="#" />
                                </div>
                                <div className="single-clients">
                                    <img src="img/client5.png" alt="#" />
                                </div>
                                <div className="single-clients">
                                    <img src="img/client1.png" alt="#" />
                                </div>
                                <div className="single-clients">
                                    <img src="img/client2.png" alt="#" />
                                </div>
                                <div className="single-clients">
                                    <img src="img/client3.png" alt="#" />
                                </div>
                                <div className="single-clients">
                                    <img src="img/client4.png" alt="#" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default ClientSLider