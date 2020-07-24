/*
 * @Author: Giphitie
 * @Date: 2020-07-24 22:19:01
 * @Last Modified by:   Giphitie
 * @Last Modified time: 2020-07-24 22:19:01
 */

import React from "react";

const Services = () => {
	return (
		<section className="giphitie-section" id="services-section">
			<div className="container">
				<div className="row justify-content-center py-5 mt-5">
					<div className="col-md-12 heading-section text-center" data-aos="fade-up">
						<h1 className="big big-2">Services</h1>
						<h2 className="mb-4">Services</h2>
						<p>Somewhere in Kumasi, in the great nation of Ghana</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 text-center d-flex align-middle" data-aos="fade-up">
						<div href="#" className="services-1">
							<span className="icon">
								<i className="flaticon-training"></i>
							</span>
							<div className="desc">
								<h3>Teaching</h3>
							</div>
						</div>
					</div>
					<div className="col-md-4 text-center d-flex align-middle" data-aos="fade-up">
						<div href="#" className="services-1">
							<span className="icon">
								<i className="flaticon-analysis"></i>
							</span>
							<div className="desc">
								<h3>Research In Actuarial and Statistics</h3>
							</div>
						</div>
					</div>
					<div className="col-md-4 text-center d-flex align-middle" data-aos="fade-up">
						<div href="#" className="services-1">
							<span className="icon">
								<i className="flaticon-review"></i>
							</span>
							<div className="desc">
								<h3>Academic Project Review</h3>
							</div>
						</div>
					</div>

					<div className="col-md-4 text-center d-flex align-middle" data-aos="fade-up">
						<div href="#" className="services-1">
							<span className="icon">
								<i className="flaticon-planner"></i>
							</span>
							<div className="desc">
								<h3>Event Planning</h3>
							</div>
						</div>
					</div>
					<div className="col-md-4 text-center d-flex align-middle" data-aos="fade-up">
						<div href="#" className="services-1">
							<span className="icon">
								<i className="flaticon-data-scientist"></i>
							</span>
							<div className="desc">
								<h3>Data Analysis</h3>
							</div>
						</div>
					</div>
					<div className="col-md-4 text-center d-flex align-middle" data-aos="fade-up">
						<div href="#" className="services-1">
							<span className="icon">
								<i className="flaticon-consultation"></i>
							</span>
							<div className="desc">
								<h3>Software Consultancy</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
