import React from 'react'
import { FaUserTie } from 'react-icons/fa';
import { BsFillStopwatchFill, BsFillPatchCheckFill } from 'react-icons/bs';
import { TbCertificate } from 'react-icons/tb';
import { MdSignalCellular1Bar } from 'react-icons/md';
import { SiBlockchaindotcom } from 'react-icons/si';
import { Link } from 'react-router-dom';

export const DescripCourses = ({img, title, alt, descriptionFull, hour, learning1, learning2, learning3, teacher, certificationBy, level}) => {
  return (
    <>
        <div> 
          <header className='cursos'>
            <h1 className='w-11/12 max-w-[1200px] m-auto flex h-full items-end text-white font-bold text-3xl md:text-4xl text-center md:text-left py-6'>{title}</h1>
          </header>

          <div className='w-11/12 max-w-[1200px] mx-auto'>
            <img src={img} alt={alt} className='mt-5 w-full object-cover h-[100px] md:h-[200px]'/>
            <div className='border-[#9ebffc] border-t-[3px] mt-6'></div>
          </div>

          <div className='w-11/12 max-w-[1200px] mx-auto mt-4 flex flex-col-reverse md:flex-row gap-2 mb-20'>
            <div className='w-full md:w-[80%] text-justify md:mb-0'>

              <h3 className='mb-1 text-xl font-bold text-[#01318a]'>Descripción detallada:</h3>
              <p>{descriptionFull}</p>

              <p className='my-2 text-xl font-bold text-[#01318a]'>¿Qué aprenderás?</p>
              <div className='flex gap-2 items-center'>
                <BsFillPatchCheckFill className='w-[20px] h-[20px] text-[#01318a]'/>
                <p>{learning1}</p>
              </div>
              <div className='flex gap-2 my-1 items-center'>
                <BsFillPatchCheckFill className='w-[20px] h-[20px] text-[#01318a]'/>
                <p>{learning2}</p>
              </div>
              <div className='flex gap-2 items-center'>
                <BsFillPatchCheckFill className='w-[20px] h-[20px] text-[#01318a]'/>
                <p>{learning3}</p>
              </div>

              <div className='md:flex gap-2 items-center mt-10'>
                <SiBlockchaindotcom className='w-[80px] h-[80px] md:w-[40px] md:h-[40px] text-[#01318a] mx-auto md:mx-0 mb-4 md:mb-0 animation'/>
                <p className='font-bold'>Este curso se certifica mediante la tecnología Blockchain, que hace tu certificación única, irrepetible e inclonable.</p>
              </div>

            </div>

            <div className='w-full md:w-[20%] flex flex-row flex-wrap justify-around md:justify-between md:flex-col md:gap-4 md:ml-4 mb-2 gap-2'>
              <div className='flex gap-2 gap-y-5'>
                <FaUserTie className='w-[45px] h-[45px] text-[#01318a]'/>
                <p><span className='flex text-[#01318a] font-bold'>Profesor </span>{teacher}</p>
              </div>
              <div className='flex gap-2'>
                <BsFillStopwatchFill className='w-[45px] h-[45px] text-[#01318a]'/>
                <p><span className='flex text-[#01318a] font-bold'>Duración </span>{hour} Hrs</p>
              </div>
              <div className='flex gap-2'>
                <TbCertificate className='w-[45px] h-[45px] text-[#01318a]'/>
                <p><span className='flex text-[#01318a] font-bold'>Certificado por </span>{certificationBy}</p>
              </div>
              <div className='flex gap-2'>
                <MdSignalCellular1Bar className='w-[45px] h-[45px] text-[#01318a]'/>
                <p><span className='flex text-[#01318a] font-bold'>Nivel </span>{level}</p>
              </div>
              <Link to="http://server.logicaysoftware.com/academy100/Identity/Account/Register?returnUrl=%2Facademy100" className='ml-5 w-full'>
                <button className='animationBtn w-full text-center bg-[#01318a] text-white font-bold rounded py-3 hover:bg-[#9ebffc] hover:text-[#01318a] mt-5'>
                  Registrate Aquí
                </button>
              </Link>
              {/* <Link 
                to='http://server.logicaysoftware.com/academy100/Identity/Account/Register?returnUrl=%2Facademy100' 
                className='animationBtn w-full text-center bg-[#01318a] text-white font-bold rounded py-3 hover:bg-[#9ebffc] hover:text-[#01318a] mt-5'>
                  Registrese Aquí
              </Link> */}
              
            </div>

          </div>
        </div>
    </>
  )
}
