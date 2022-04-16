import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
                <div className="mb-2 sm:mb-0">
                    <NavLink to="/react" className={(navData) => navData.isActive ? "font-semibold underline underline-offset-[18px]" : "text-lg no-underline text-grey-darkest md:p-5"}>Reactjs</NavLink>
                    <NavLink to="/frontend" className={(navData) => navData.isActive ? "font-semibold underline underline-offset-[18px]" : "text-lg no-underline text-grey-darkest md:p-5"}>Frontend</NavLink>
                    <NavLink to="/webdev" className={(navData) => navData.isActive ? "font-semibold underline underline-offset-[18px]" : "text-lg no-underline text-grey-darkest md:p-5"}>Webdev</NavLink>
                    <NavLink to="/js" className={(navData) => navData.isActive ? "font-semibold underline underline-offset-[18px]" : "text-lg no-underline text-grey-darkest md:p-5"}>JavaScript</NavLink>
                    <NavLink to="/open-source" className={(navData) => navData.isActive ? "font-semibold underline underline-offset-[18px]" : "text-lg no-underline text-grey-darkest md:p-5"}>OpenSource</NavLink>
                    <NavLink to="/programming" className={(navData) => navData.isActive ? "font-semibold underline underline-offset-[18px]" : "text-lg no-underline text-grey-darkest md:p-5"}>Programming</NavLink>
                    <NavLink to="/learn-js" className={(navData) => navData.isActive ? "font-semibold underline underline-offset-[18px]" : "text-lg no-underline text-grey-darkest md:p-5"}>LearnJavascript</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default React.memo(Nav);