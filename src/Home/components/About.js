/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-06-08 18:22:31
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-18 05:30:31
 */

import React from 'react';
import me_1 from '../../_shared/assets/images/me_1.png';

const About = () => {
	// const [startEnter, setStartEnter] = useState(false);

	// const _handleWaypointEnter = () => {
	// 	setStartEnter(true);
	// };

	return (
		<section className='giphitie-about img giphitie-section giphitie-no-pb' id='about-section'>
			<div className='container'>
				<div className='row d-flex'>
					<div className='col-md-6 col-lg-5 d-flex'>
						<div className='img-about img d-flex align-items-stretch'>
							<div className='overlay'></div>
							<div
								className='img d-flex align-self-stretch align-items-center'
								style={{
									backgroundImage: `url(${me_1})`,
									backgroundPosition: 'center',
									backgroundSize: 'contain',
								}}
							></div>
						</div>
					</div>
					<div className='col-md-6 col-lg-7 pl-lg-5 pb-5'>
						<div className='row justify-content-start pb-3'>
							<div className='col-md-12 heading-section ' data-aos='fade-up'>
								<h1 className='big'>About</h1>
								<h2 className='mb-4'>About Me</h2>
								<p>
									I am a student with experience in teaching and programming based in Kumasi. My background in
									programming inform my mindful but competitive approach of thinking and implementing when it
									comes to studies and work.
								</p>
								<p>
									I graduated from{' '}
									<a target='_blank' rel='noopener noreferrer' href='https://www.knust.edu.gh/'>
										Kwame Nkrumah University of Science and Technology
									</a>{' '}
									with a bachelor of science in{' '}
									<a
										href='https://en.wikipedia.org/wiki/Actuarial_science'
										target='_blank'
										rel='noopener noreferrer'
									>
										Actuarial Science
									</a>{' '}
									and for the past 3 years, I have been a team player and team leader providing solutions with
									the theory and methods learnt during internships and volunteering.
								</p>
								<p>
									I consider myself a forever student eager to build on her academic foundations in actuarial
									science and{' '}
									<a
										href='https://en.wikipedia.org/wiki/Statistical_finance'
										target='_blank'
										rel='noopener noreferrer'
									>
										statistical finance
									</a>{' '}
									statistical finance and stay in tune with evolving knowledge in both subjects through
									continuous professionalism.
								</p>
								<ul className='about-info mt-4 px-md-0 px-2'>
									<li className='d-flex'>
										<span>Name:</span> <span>Gifty Osei</span>
									</li>
									{/* <!-- <li className="d-flex"><span>Date of birth:</span> <span>January 01, 1987</span></li> --> */}
									<li className='d-flex'>
										<span>Address:</span> <span>KNUST, Kumasi Ghana</span>
									</li>
									{/* <!-- <li className="d-flex"><span>Zip code:</span> <span>1000</span></li> --> */}
									<li className='d-flex'>
										<span>Email:</span> <span>gifty18osei@gmail.com</span>
									</li>
									<li className='d-flex'>
										<span>Phone: </span> <span>+233-55-475-1701</span>
									</li>
								</ul>
							</div>
						</div>
						{/* <Waypoint onEnter={_handleWaypointEnter} topOffset='95%'> */}
						<div className='counter-wrap  d-flex mt-md-3' data-aos='fade-up'>
							<div className='text'>
								{/* <p className='mb-4'>
										{startEnter ? (
											<AnimatedNumber
												value={number_of_project}
												duration={7000}
												formatValue={(value) => value.toFixed(0)}
											/>
										) : (
											0
										)}
										{'+ '}
										<span> Projects complete</span>
									</p> */}
								<p>
									<a
										href='https://drive.google.com/file/d/1Kx-TzFnhIcLDUYNkzKl20SlHOsC4JShG/view?usp=sharing'
										className='btn btn-primary btn-outline-primary py-3 px-3'
										target='_blank'
										rel='noopener noreferrer'
									>
										Download CV
									</a>
								</p>
							</div>
						</div>
						{/* </Waypoint> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
