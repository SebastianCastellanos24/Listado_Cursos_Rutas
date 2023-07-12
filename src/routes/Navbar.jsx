import * as React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Logo from '../../public/LogoAcademy.png';

import { useTranslation } from 'react-i18next'

import {ButonNavbar} from '../components/ButonNavbar';
import {ButonNavbar2} from '../components/ButonNavbar2';
import {ButonNavbar0} from '../components/ButonNavbar0';

export const Navbar = () => {
    const [t, i18n] = useTranslation("home")

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <nav className='navbar z-10 bg-[#045BFD]'>
        <Link to="/" className='navbar-logo'>
            <img src={Logo} alt='logo' className='w-[80px] translate-y-[-5px]'/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            <p className={click ? 'fas fa-times' : 'fas fa-bars'}></p>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item mt-5'>
                <a
                    href='https://logicaysoftware-22054075.hubspotpagebuilder.com/logica-software'
                    className='nav-links-mobile'
                    onClick={closeMobileMenu}
                    >
                        Ventas
                </a>
            </li>
            <li className='nav-item mt-5'>
                <Link
                    to='http://server.logicaysoftware.com/academy100'
                    className='nav-links-mobile'
                    onClick={closeMobileMenu}
                    >
                        Ingresa Aquí
                </Link>
            </li>
            <li className='nav-item mt-5'>
                <Link
                    to='http://server.logicaysoftware.com/academy100/Identity/Account/Register?returnUrl=%2Facademy100'
                    className='nav-links-mobile'
                    onClick={closeMobileMenu}
                    >
                        Registrate Aquí
                </Link>
            </li>
        </ul>
        <ButonNavbar/>
        <ButonNavbar2/>
        <ButonNavbar0/>
    </nav>
  )
}
