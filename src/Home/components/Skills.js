/*
 * @Author: Giphitie
 * @Date: 2020-07-24 22:19:11
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-11-06 22:23:02
 */

import React from "react";

const Skills = ({ data }) => {
    return (
        <section className="giphitie-section" id="skills-section">
            <div className="container">
                <div className="row justify-content-center pb-5">
                    <div
                        className="col-md-12 heading-section text-center"
                        data-aos="fade-up"
                    >
                        <h1 className="big big-2">Skills</h1>
                        <h2 className="mb-4">My Skills</h2>
                        <p>Somewhere in Kumasi, in the great nation of Ghana</p>
                    </div>
                </div>
                <div className="row">
                    {data.map((skill) => (
                        <div className="col-md-6" key={skill.id}>
                            <div className="progress-wrap" data-aos="fade-up">
                                <h3>{skill.name}</h3>
                                <div className="progress">
                                    <div
                                        className="progress-bar color-1"
                                        role="progressbar"
                                        aria-valuenow={skill.rating}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: skill.rating }}
                                    >
                                        {/* <span>{skill.rating}</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
