import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../App';
import ThemeButton from './Theme'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const { theme } = useContext(ThemeContext);
    const location = useLocation();
    return (
        <header className={`header`}>
            <h1 className="h1">My<span className='text-blue-700'>Portofolio</span></h1>
            <nav className='flex justify-between md:gap-10 items-center'>
                <ul className={`ul font-semibold`}>
                    <Link to={"/"} className={`${location.pathname == "/" ? "text-blue-500" : theme == 'light' ? "text-black" : "text-white"}`}>Home</Link>
                    <Link to={"/projects"} className={`${location.pathname == "/projects" ? "text-blue-500" : theme == 'light' ? "text-black" : "text-white"}`}>Projects</Link>
                    <Link to={"certificates"} className={`${location.pathname == "/certificates" ? "text-blue-500" : theme == 'light' ? "text-black" : "text-white"}`}>Certificates</Link>
                </ul>
                <div className='flex justify-end gap-5 items-center font-bold absolute top-3 right-4 md:static'>
                    <ThemeButton />
                </div>
            </nav>
        </header>
    )
}

export default Header