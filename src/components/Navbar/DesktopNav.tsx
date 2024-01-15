import React from 'react';
import { NavLink} from 'react-router-dom';
import { activeState } from './util';

function DesktopNav() {
    return (
        <>
            <div className={`flex justify-end w-full h-0 md:h-auto md:w-auto invisible md:visible`} id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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

export default DesktopNav