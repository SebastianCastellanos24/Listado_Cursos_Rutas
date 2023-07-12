import React from 'react'
import '../index.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const ButonNavbar = () => {
  const [t, i18n] = useTranslation("home")

  return (
    <Link to="http://server.logicaysoftware.com/academy100">
        <button className='button bg-white py-[6px] px-4 rounded text-[#045BFD] font-bold hover:scale-110 hover:bg-inherit hover:text-white duration-100 border-white border-2'>
          Ingresa Aquí
        </button>
    </Link>
  )
}
