import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import Breadcumb from '../components/Breadcumb';

function Blogs() {

    const [blogdata, setBlogData] = useState([]);
    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogData(data);
        });

    },[]);

  return (

<>
<Breadcumb title="Blogs" menu="blogs"/>
	
    <section className="blog section" id="blog">
                <div className="container">
                    
                    <div className="row">

                        {

                            blogdata.map((value,index)=>{


                                return (

                                    <div className="col-lg-4 col-md-6 col-12" key={index}>
                        
                                    <div className="single-news mb-3">
                                        <div className="news-head">
                                            <img src="img/blog1.jpg" alt="#" />
                                        </div>
                                        <div className="news-body">
                                            <div className="news-content">
                                                <div className="date">22 Aug, 2020 </div>
                                                <h2><Link to={`/blog/${value.id}`}>{value.title}</Link>

                                                
                                                
                                                
                                                </h2>
                                              </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                );

                            })
                        }

                    </div>
                </div>
            </section>
</>


  )
}

export default Blogs