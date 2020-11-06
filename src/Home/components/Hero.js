/*
 * @Author: Giphitie
 * @Date: 2020-07-24 22:17:53
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-11-06 22:53:22
 */

import React, { useEffect } from "react";
import Typed from "typed.js";
import { useWindowSize } from "../../_shared/hooks";

const Hero = () => {
    const [, height] = useWindowSize();

    useEffect(() => {
        new Typed("#typedIntro", introOptions);
        new Typed("#typedIntroDesc", introDescOptions);
    }, []);

    return (
        <section id="home-section" className="hero">
            <div className="home-slider owl-carousel">
                <div className="slider-item">
                    <div className="overlay"></div>
                    <div className="container">
                        <div
                            className="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
                            data-scrollax-parent="true"
                        >
                            {/* <div className="one-third js-fullheight order-md-last img" style={{ backgroundImage: `url(${me_2})`, height }}>
								<div className="overlay"></div>
							</div> */}
                            <div
                                className="one-forth d-flex align-items-center "
                                // data-scrollax=" properties: { translateY: '70%' }"
                                data-aos="fade-up"
                                data-aos-delay="1200"
                            >
                                <div className="text">
                                    <span className="subheading">Hello!</span>
                                    <h1 className="mb-4 mt-3">
                                        <span
                                            className="text-primary"
                                            id="typedIntro"
                                        ></span>
                                    </h1>
                                    <h2 className="mb-4">
                                        <span id="typedIntroDesc"></span>
                                    </h2>
                                    <p className="mb-5">
                                        A forever student eager to build on her
                                        academic foundations in actuarial
                                        science and statistical finance and stay
                                        in tune with evolving knowledge in both
                                        subjects through continuous
                                        professionalism.
                                    </p>
                                    <p>
                                        <a
                                            href="#contact-section"
                                            className="btn btn-primary btn-outline-primary py-3 px-4 mr-3"
                                        >
                                            Get in touch
                                        </a>
                                        <a
                                            href="#projects-section"
                                            className="btn btn-white btn-outline-white py-3 px-4"
                                        >
                                            My works
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- <div className="slider-item">
					<div className="overlay"></div>
					<div className="container">
						<div
							className="row d-flex no-gutters slider-text align-items-end justify-content-end"
							data-scrollax-parent="true"
						>
							<div
								className="one-third js-fullheight order-md-last img"
								style="background-image: url(images/me_1.png);"
							>
								<div className="overlay"></div>
							</div>
							<div
								className="one-forth d-flex align-items-center "
								data-scrollax=" properties: { translateY: '70%' }"
							>
								<div className="text">
									<span className="subheading">Hello!</span>
									<h1 className="mb-4 mt-3">I'm a <span>web designer</span> based in London</h1>
									<p>
										<a href="#" className="btn btn-primary btn-outline-primary py-3 px-4">Hire me</a>
										<a href="#" className="btn btn-white btn-outline-white py-3 px-4">My works</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div> --> */}
            </div>
        </section>
    );
};

export default Hero;

const introDescOptions = {
    strings: ["Risk is an Opportunity for me.", "Check out my portfolio."],
    typeSpeed: 60,
    loop: true,
    cursorChar: "🖊️",
};

const introOptions = {
    strings: ["", "I'm <span>Gifty Osei</span>"],
    typeSpeed: 80,
    cursorChar: ".",
    onComplete: (self) => (self.options.showCursor = false),
};
