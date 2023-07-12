import React from 'react'

import Logo2 from '../assets/img/LogoEmpresa.webp';
import Logo from '../../public/LogoAcademy.png';

import { AiFillFacebook } from 'react-icons/ai';
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
        <footer className='bg-[#00318b] py-8 mt-8'>
            <div className='max-w-[1200px] mx-auto w-11/12 flex flex-col items-center gap-4 md:flex-row md:justify-center md:pb-6 lg:justify-between'>
                <Link to="/">
                    <img src={Logo} className='w-[120px] pb-3 md:pb-0' alt='Logo lógica y software'></img>
                </Link>
                <p className='text-white text-xl text-center pb-3 md:pb-0 md:text-right'>CAMPUS LÓGICA Y SOFTWARE</p>
                <Link to="https://logicaysoftware.com/">
                    <img src={Logo2} className='w-[120px] pb-3 md:pb-0' alt='Logo lógica y software'></img>
                </Link>
            </div>
            <div className='max-w-[1200px] border-[#9ebffc] border-t-[2px] w-11/12 mx-auto flex flex-col-reverse md:flex-row-reverse md:justify-between md:items-center'>
                <div>   
                    <p className='text-center text-white mt-2'>©2023 por Lógica y Software.</p>
                </div>
                <div className='text-white mt-5 flex justify-center gap-2'>
                    <a href='https://www.facebook.com/profile.php?id=100078772969191' target='blanck'>
                        <AiFillFacebook className='w-[40px] h-[40px]'/>
                    </a>
                    <a href='https://www.instagram.com/logicaysoftware/' target='blanck'>
                        <FaInstagramSquare className='w-[40px] h-[40px]'/>
                    </a>
                    <a href='https://www.linkedin.com/company/l%C3%B3gica-y-software' target='blanck'>
                        <FaLinkedin className='w-[40px] h-[40px]'/>
                    </a>
                </div>
            </div>
        </footer>
    </>
  )
}
