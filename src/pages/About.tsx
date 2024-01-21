import React from 'react';
import { cdn } from '../util/AssetConsts';

function About() {
    return (
        <div className="flex items-center justify-center overflow-hidden">
            <div className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
                <div className="flex flex-col items-center justify-between lg:flex-row py-16">
                    <div className=" relative ">
                        <div className="lg:max-w-xl lg:pr-5 relative z-40">
                            <p className="flex text-sm uppercase text-g1  ">
                                About Me
                            </p>
                            <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                                Sam Rossilli
                                <span className="my-1 inline-block border-b-8 border-g4 bg-gray-400 px-4 font-bold text-g4 animate__animated animate__flash">@Sarossilli</span>
                            </h2>
                            <p className="text-base text-gray-200">
                                I'm a software engineer at Amazon with education and experience in software engineering, model-based systems engineering, and data analytics. I have experience with Java, Javascript, Python, C/C++, and with concepts such as object-oriented programming, the systems engineering life cycle, and the software engineering life cycle.

                                I graduated from the University of Colorado: Colorado Springs with a B.S in Data Analytics and Systems Engineering.

                                Currently, Im helping Amazon's delivery service partners engage, develop, and support their employees by building software to enable employee-level data insights, coaching suggestions, career development assistance, and structured recognition tools.
                            </p>
                        </div>
                    </div>
                    <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
                        </svg>
                        <div className="abg-orange-400 mx-3 w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
                            <img src={`${cdn}/me.jpg`} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden text-9xl varien absolute top-6 left-1/4 text-g/10 z-40    ">
                About Me
            </div>
        </div>
    )

}

export default About