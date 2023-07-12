import React from 'react'
import { Link } from "react-router-dom";
import '../index.css';
import { useTranslation } from 'react-i18next';

export const ButonNavbar0 = () => {
  const [t, i18n] = useTranslation("home")

  return (
    <Link to="https://logicaysoftware-22054075.hubspotpagebuilder.com/logica-software" className='ml-5'>
        <button className='button bg-white py-[6px] px-4 rounded text-[#045BFD] font-bold hover:scale-110 hover:bg-inherit hover:text-white duration-100 max-w-[1200px] mx-auto border-white border-2'>
          Ventas
        </button>
    </Link>
  )
}
