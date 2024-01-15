import React from 'react';
import { Outlet } from 'react-router-dom';
import { cdn } from '../../util/AssetConsts';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

function Navbar() {

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <>
            <nav className="backdrop-blur-lg border-solid border-b border-sky-50">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <picture  className="h-8 w-8">
                            <img src={`${cdn}/logoPng`} className="h-8 w-8" alt="S Logo" />
                        </picture>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sarossil.li</span>
                    </a>
                    <button onClick={() => setNavbarOpen(!navbarOpen)}
                        data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <DesktopNav />
                </div>
            </nav>
            <MobileNav navbarOpen={navbarOpen} />
            <Outlet />
        </>

    )
}

export default Navbar