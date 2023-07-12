import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import { MainCourses } from '../../MainCourses';
import { Link } from "react-router-dom";

import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

let indices = [];
for (let i = 0; i < 6; i++) {
  let numeroAleatorio = Math.floor(Math.random() * 23)
  indices.push(numeroAleatorio);
}

const filterSwiperTop = MainCourses.filter( (MainCourse, indice) => indices.includes(indice) );
const filterSwiperTopReverse = filterSwiperTop.reverse()

export const SwiperCoursesTeachers = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      breakpoints={{
        0: { slidesPerView: 1},
        712: { slidesPerView: 2},
        1069: { slidesPerView: 3},
        1279: { slidesPerView: 4},
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ clickable: true }}
    >

      {filterSwiperTopReverse.map((courses) => (
        <SwiperSlide key={courses.id}>
          <Link to={courses.link} className='rounded overflow-hidden'>
            <img src={courses.img} alt={courses.alt}></img>
            <p className={courses.price == 0 ? 'border-[#27a116] border-t-[2px] bg-[#28bb15] text-white p-2 text-sm h-[60px]' : 'bg-[#01318a] border-[#9ebffc] border-t-[2px] text-white p-2 text-sm h-[60px]'}>{courses.title}</p>
          </Link>
        </SwiperSlide>
      ))}

    </Swiper>
  )
}

