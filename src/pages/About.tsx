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
                                Something something
                                <span className="my-1 inline-block border-b-8 border-g4 bg-gray-400 px-4 font-bold text-g4 animate__animated animate__flash">different</span>
                            </h2>
                            <p className="text-base text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque it.</p>
                        </div>
                    </div>
                    <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
                        </svg>
                        <div className="abg-orange-400 mx-auto w-6 overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
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