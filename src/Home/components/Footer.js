/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-06-08 20:27:48
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-18 03:22:08
 */

import React from 'react';

const Footer = () => {
	return (
		<React.Fragment>
			<footer className='giphitie-footer'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 text-center'>
							<div className='giphitie-footer-social2  d-lg-none'>
								<ul>
									{/* <li>
										<a
											href='https://github.com/bchiang7'
											target='_blank'
											rel='nofollow noopener noreferrer'
											aria-label='GitHub'
										>
											<span className='icon-github'></span>
										</a>
									</li> */}
									<li>
										<a
											href='https://www.linkedin.com/in/gifty-osei-983004143/'
											target='_blank'
											rel='nofollow noopener noreferrer'
											aria-label='Linkedin'
										>
											<span className='icon-linkedin'></span>
										</a>
									</li>
									<li>
										<a
											href='https://www.instagram.com/giphi_tie_serwaa/'
											target='_blank'
											rel='nofollow noopener noreferrer'
											aria-label='Instagram'
										>
											<span className='icon-instagram'></span>
										</a>
									</li>
									<li>
										<a
											href='https://twitter.com/giphitie'
											target='_blank'
											rel='nofollow noopener noreferrer'
											aria-label='Twitter'
										>
											<span className='icon-twitter'></span>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='col-md-12 text-center'>
							<p>Designed & Built by Gifty Osei</p>
						</div>
					</div>
				</div>
			</footer>

			{/* <!-- social media --> */}
			<div className='giphitie-footer-social d-none d-lg-block' data-aos='fade-up' data-aos-delay='2200'>
				<ul>
					{/* <li>
						<a
							href='https://web.facebook.com/isabella.konadu.9'
							target='_blank'
							rel='nofollow noopener noreferrer'
							aria-label='GitHub'
						>
							<span className='icon-github'></span>
						</a>
					</li> */}
					<li>
						<a
							href='https://www.linkedin.com/in/gifty-osei-983004143/'
							target='_blank'
							rel='nofollow noopener noreferrer'
							aria-label='Linkedin'
						>
							<span className='icon-linkedin'></span>
						</a>
					</li>
					<li>
						<a
							href='https://www.instagram.com/giphi_tie_serwaa/'
							target='_blank'
							rel='nofollow noopener noreferrer'
							aria-label='Instagram'
						>
							<span className='icon-instagram'></span>
						</a>
					</li>
					<li>
						<a
							href='https://twitter.com/giphitie'
							target='_blank'
							rel='nofollow noopener noreferrer'
							aria-label='Twitter'
						>
							<span className='icon-twitter'></span>
						</a>
					</li>
				</ul>
			</div>

			<div className='giphitie-footer-email d-none d-lg-block' data-aos='fade-up' data-aos-delay='3000'>
				<div className='giphitie-footer-email-inner'>
					<a href='mailto:gifty18osei@gmail.com' className=''>
						gifty18osei@gmail.com
					</a>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
