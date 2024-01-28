import React from 'react';
import { NavLink} from 'react-router-dom';
import { activeState } from './util';

function MobileNav({navbarOpen}: {navbarOpen: boolean}) {
    return (
        <>
            <div className={`absolute justify-end w-full px-1 visible md:invisible ${(navbarOpen ? " flex" : " hidden")}`} id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
                    <li>
                        <NavLink to="/"
                            className={activeState} >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"
                            className={activeState}>
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default MobileNav