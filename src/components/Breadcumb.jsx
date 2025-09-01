import React from 'react'

import { Link } from 'react-router-dom';

function Breadcumb(props) {

  return (
    <>
    
    <div className="breadcrumbs overlay">
			<div className="container">
				<div className="bread-inner">
					<div className="row">
						<div className="col-12">
							<h2>{props.title}</h2>
							<ul className="bread-list">
								<li><Link to="/">Home</Link></li>
								<li><i className="icofont-simple-right"></i></li>
								<li className="active">{props.title}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    
    
    </>
  )
}

export default Breadcumb