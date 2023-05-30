import React, {useState} from "react";
import {Link} from "react-router-dom";

import { menu, close } from "../assets";
import logo from "../../public/logo.png"
import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = () => {

    const [ active, setActive ] = useState("");
    const [ toggle, setToggle ] = useState(false);

    return (
        <nav
            className={ ` ${styles.paddingX} w-full flex items-center justify-between z-20 fixed py-5`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0,0);
          }}>
          <img className='w-9 h-9 object-contain' src='../../public/logo.png' alt='logo'></img>
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
                    <a href={`#${navLink.id}`}>
                        {navLink.title}
                    </a>
                </li>
            ))}
        </ul>
        </div>
        </nav>
    )
};

export default Navbar;