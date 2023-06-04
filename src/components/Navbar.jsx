import React, { useState, useEffect} from "react";
import {Link} from "react-router-dom";

import { logo, menu, close, dropdown } from "../assets";
import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = () => {

    const [ active, setActive ] = useState("");
    const [ toggle, setToggle ] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={ ` ${styles.paddingX} 
            w-full flex items-center justify-between z-20 fixed py-5
            ${scrolled ? "bg-primary" : "bg-transparent"}`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

                <Link 
                to='/'
                className='flex items-center gap-2'
                onClick={() => {
                    setActive("");
                    window.scrollTo(0,0);
                }}>
                <img className='w-9 h-9 object-contain' src={logo} alt='logo'></img>
                <p className='text-white text-[24px] font-bold cursor-pointer flex'>Resourcia</p>
                </Link>

                <ul className="sm:flex gap-10 hidden">
                    {navLinks.map((navLink) => (
                        <li
                            key={navLink.id}
                            className={`${
                                active === navLink.title ? "text-white" : "text-secondary"}
                                hover:text-white text-[18px] font-medium cursor-pointer}`}
                            onClick={() => setActive(navLink.title)}
                        >
                            <a href={`#${navLink.id}`} className="flex">
                                {navLink.title} 
                            </a>
                        </li>
                    ))}
                </ul>

            </div>

        <div className="sm:hidden flex-col items-end">
            
            <div>
                <img 
                    className="w-[30px] h-[30px] object-contain"
                    src={ !toggle? menu : close}
                    onClick={() =>{
                        setToggle(!toggle);
                    }}
                    />
            </div>

            <div className={`right-4 top-20 rounded-xl black-gradient p-6 min-w-[140px]} ${ !toggle? "hidden" : "absolute"}`}>
            <ul className="flex flex-col gap-4">
                {navLinks.map((navLink) => (
                    <li
                        key={navLink.id}
                        className={`${
                            active === navLink.title ? "text-white" : "text-secondary"}
                            hover:text-white text-[18px] font-medium cursor-pointer}`}
                        onClick={() => setActive(navLink.title)}
                    >
                        <a href={`#${navLink.id}`} className="flex">
                            {navLink.title} 
                            {/* {navLink.id === "courses" ? <img className="w-6 h-6 object contain" src={dropdown} alt="dropdown"/> : null} */}
                        </a>
                    </li>
                ))}
            </ul>
            </div>
        </div>
        </nav>
    )
};

export default Navbar;