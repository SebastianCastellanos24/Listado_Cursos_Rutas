import React from 'react';
import { Link } from "react-router-dom";


import { FaShoppingCart, FaStopwatch } from 'react-icons/fa';

export const CoursesCards = ({img, link, title, desccription, price, alt, hour}) => {

  return (
    <>
        <div className='container_card'>
            <div className='card_father'>
                <div className='card border-[2px] border-white rounded'>
                    <div className='card_front'>
                        <div className='body_card_front'>
                        <img src={img} alt={alt} className='h-[224px] w-full object-cover'></img>
                            <h3 className='py-1 px-2 text-justify font-bold text-[#01318a] h-[56px]'>{title}</h3>
                            <Link to={link} className={ price == 0 ? 'bg flex items-center justify-between w-full p-3 text-white font-bold border-[#27a116] border-t-[2px] bg-[#28bb15]' : 'bg flex items-center justify-between w-full p-3 text-white font-bold border-[#9ebffc] border-t-[2px] bg-[#01318a]'}>
                                <div>
                                    <p>Más <span>información</span></p>
                                </div>
                                <div className='flex items-center gap-1'> 
                                    <p>{hour} Hrs</p>
                                    <FaStopwatch/>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <p>$ {price} USD</p>
                                    <FaShoppingCart/>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='card_back'>
                        <div className='body_card_back'>
                            <div className='h-[280px] p-[10px] text-justify'>
                                <h3 className='font-bold text-[#01318a] text-[18px]'>{title}</h3>
                                <p>{desccription}</p>
                            </div>
                            <Link to={link} className={ price == 0 ? 'bg flex items-center justify-between w-full p-3 text-white font-bold border-[#1f9b0e] border-t-[2px] bg-[#28bb15]' : 'bg flex items-center justify-between w-full p-3 text-white font-bold border-[#9ebffc] border-t-[2px] bg-[#01318a]'}>
                                <div>
                                    <p>Más <span>información</span></p>
                                </div>
                                <div className='flex items-center gap-1'> 
                                    <p>10 Hrs</p>
                                    <FaStopwatch/>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <p>$ {price} USD</p>
                                    <FaShoppingCart/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
