const activeClassName = "block py-2 px-3 text-white md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
const inactiveClassName = "block py-2 px-3 text-gray-900 rounded md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white"

export const activeState = ({ isActive }: {
    isActive: any;
}) => {
    return (isActive ? activeClassName : inactiveClassName);
};