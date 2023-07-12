import React from 'react'
import { Link } from "react-router-dom";
import '../index.css';
import { useTranslation } from 'react-i18next';

export const ButonNavbar2 = () => {
  const [t, i18n] = useTranslation("home")

  return (
    <Link to="http://server.logicaysoftware.com/academy100/Identity/Account/Register?returnUrl=%2Facademy100" className='ml-5'>
        <button className='button bg-inherit py-[6px] px-4 rounded text-white font-bold hover:scale-110 hover:bg-white hover:text-[#045BFD] duration-100 border-white border-2'>
          Registrate Aquí
        </button>
    </Link>
  )
}
