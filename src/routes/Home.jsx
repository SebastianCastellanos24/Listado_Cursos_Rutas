import { CoursesCards } from '../components/CoursesCards';

import EstudianteBg from '../assets/img/estudiante.webp';
import Docente from '../assets/img/docente.webp';
import DocenteHeader from '../assets/img/docenteHeader.png';

import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

import '../index.css';
import { SwiperCourses } from '../components/SwiperCourses';

import MainCourses from '../../MainCourses';
import { SwiperCoursesTeachers } from '../components/SwiperCoursesTeachers';

const filterCategoryRutaDigital = MainCourses.filter(MainCourse => MainCourse.category === "Ruta digital docentes");
const filterCategoryClassNet = MainCourses.filter(MainCourse => MainCourse.category === "Capacitación ClassNet School");
const filterPriceFree = MainCourses.filter(MainCourse => MainCourse.price === 0);
const filterPricePay = MainCourses.filter(MainCourse => MainCourse.price !== 0);


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Home = () => {
  const [stateCourse, setStateCourse] = useState(MainCourses);

  const allCourse = () => {setStateCourse(MainCourses);}

  const rutaDigital = () => {setStateCourse(filterCategoryRutaDigital);}

  const classNetSchool = () => {setStateCourse(filterCategoryClassNet);}

  const freeCourses = () => {setStateCourse(filterPriceFree);}

  const payCourses = () => {setStateCourse(filterPricePay);}

  const drawCourses = (e) => {
    const Price = document.querySelector(".price"); 
    const Category = document.querySelector(".category"); 

    if(e.target.value === "allCourses"){
      allCourse();
      return
    }
    else if (e.target.value === "RutaDigital") {
      Price.value = "allCourses"
      rutaDigital(); 
      return
    }  
    else if (e.target.value === "ClassNet") {
      Price.value = "allCourses"
      classNetSchool(); 
      return
    }
    else if (e.target.value === "free") {
      Category.value = "allCourses"
      freeCourses(); 
      return
    } 
    else if(e.target.value === "pay"){
      Category.value = "allCourses"
      payCourses(); 
      return
    }
  }

  const searchCourses = (e) => {

    const Price = document.querySelector(".price"); 
    const Category = document.querySelector(".category"); 
    Category.value = "allCourses"
    Price.value = "allCourses"

    if(e.target.value !== "") {
      const resultadoBusqueda = MainCourses.filter(cursos => {
        const nombreMinusculas = cursos.title.toLowerCase();
        const textoBusquedaMinusculas = e.target.value.toLowerCase();
        return nombreMinusculas.includes(textoBusquedaMinusculas);
      });
      setStateCourse(resultadoBusqueda)
    } else {
      setStateCourse(MainCourses);
    }
  }

  return (
    <>
      <header className='header z-[-1]'>
      <Swiper
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        className="mySwiper"
      > 
        <SwiperSlide>
          <div className='max-w-[1200px] mx-auto w-11/12 flex flex-row-reverse h-[550px] md:h-[500px]'>
            <div className='relative top-[130px] md:top-[160px] w-11/12 mx-auto md:w-2/3 md:mx-0'>
              <h2 className='text-white font-bold text-center text-xl mx-auto pb-4 md:text-left md:text-2xl md:pl-[10%] lg:pl-[20%]'>Lógica y Software</h2>
              <h1 className='text-white font-bold text-4xl text-center mx-auto pb-4 md:text-left md:text-4xl lg:text-5xl md:pl-[10%] lg:pl-[20%]'>Ruta de aprendizaje en ClassNet</h1>
              <p className='text-white text-justify mx-auto md:pl-[10%] lg:pl-[20%]'>¡Capacítate con ClassNet School y maximiza tu experiencia educativa! Nuestras capacitaciones están diseñadas para docentes, padres y alumnos, brindándote las herramientas necesarias para aprovechar al máximo nuestra plataforma de gestión educativa.</p>
            </div>
            <div className='hidden md:w-[420px] lg:w-[460px] md:flex md:items-end md:justify-center h-[500px] '>
              <img src={DocenteHeader} className='w-[90%] max-h-[415px]'></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='max-w-[1200px] mx-auto w-11/12 flex h-[550px] md:h-[500px]'>
            <div className='relative top-[130px] md:top-[160px] w-11/12 mx-auto md:w-2/3 md:mx-0'>
              <h2 className='text-white font-bold text-center text-xl mx-auto pb-4 md:text-left md:text-2xl'>Lógica y Software</h2>
              <h1 className='text-white font-bold text-4xl text-center mx-auto pb-4 md:text-left md:text-4xl lg:text-5xl'>Ruta de aprendizaje en TIC para docentes</h1>
              <p className='text-white text-justify mx-auto md:pr-[10%] lg:pr-[20%]'>Programa de formación de docentes en competencias digitales, el cual está diseñado para proporcionar a los educadores las habilidades y conocimientos necesarios para integrar tecnologías digitales en su enseñanza, y, así, mejorar la calidad de la educación en el aula.</p>
            </div>
            <div className='hidden md:w-[420px] lg:w-[460px] md:flex md:items-end md:justify-center h-[500px]'>
              <img src={EstudianteBg}></img>
            </div>
          </div>
        </SwiperSlide>
        </Swiper>
        
      </header>

      <h3 className='my-8 text-[#045BFD] font-bold text-2xl w-11/12 mx-auto'>Todos los cursos disponibles</h3>  
      <section className='max-w-[1200px] mx-auto mb-[60px] flex flex-col lg:flex-row lg:gap-2 w-[95%]'>
        <div className='mx-auto w-full lg:w-[20%] mb-5 lg:mb-0'> 
          <h3 className='mt-5 text-[#045BFD] text-xl font-semibold'>Filtro y Busqueda</h3>
          <div className='flex flex-col mt-5'>
            <label className='text-[#045BFD] font-semibold'>Busca tu curso</label>
            <input id='searcher' className='border-[#045BFD] text-[#045BFD] border-[2px] py-1 px-2 rounded' onInput={searchCourses}></input>
          </div>
          <div className='flex flex-col mt-5'>
            <label className='text-[#045BFD] font-semibold'>Categorías</label>
            <select id="lang" onChange={drawCourses} className='border-[#045BFD] text-[#045BFD] border-[2px] py-2 px-2 rounded w-full category'>
              <option value="allCourses">Todos los cursos</option>
              <option value="RutaDigital">Ruta digital para docentes</option>
              <option value="ClassNet">Capacitaciones ClassNet School</option>
            </select>
          </div>
          <div className='mt-5'>
            <label className='text-[#045BFD] font-semibold'>Precio</label>
            <select id="lang" onChange={drawCourses} className='border-[#045BFD] text-[#045BFD] border-[2px] py-2 px-2 rounded w-full price'>
              <option value="allCourses">Todos los precios</option>
              <option value="free">Gratis</option>
              <option value="pay">Pagos</option>
            </select>
          </div>
        </div>
        <div className='cards w-full lg:w-[80%] gap-y-4'>
          {stateCourse.map((courses) => (
            <CoursesCards
              key={courses.id}
              img={courses.img}
              link={courses.link}
              title={courses.title}
              desccription={courses.description}
              price={courses.price}
              alt={courses.alt}
              hour={courses.hour}
              desccriptionFull={null}
            />
          ))}
        </div>
      </section>

      <section className='bg-info my-8'>
        <div className='max-w-[1200px] mx-auto flex flex-col items-center md:flex-row w-10/12 md:w-11/12 py-[30px]'>
            <div className='text-white mx-auto text-justify md:w-[60%] md:justify-center'>
              <p className='text-2xl pb-2 font-bold'>¿En qué consiste la Ruta digital?</p>
              <p className='pb-4'>Cada uno de los 22 cursos se centra en diferentes aspectos del uso de tecnologías digitales en la educación y están diseñados para abordar las necesidades específicas de los docentes en diferentes áreas de especialización.</p>
              <p className='text-2xl pb-2 font-bold'>¿Qué objetivo tiene la Ruta digital?</p>
              <p>En general, el programa tiene como objetivo ayudar a los docentes a mejorar sus habilidades y conocimientos en el uso de tecnologías digitales para que puedan diseñar planes de estudio más efectivos, mejorar la experiencia de aprendizaje de los estudiantes y adaptarse a los cambios de la educación en la era digital.</p>
            </div>
            <div className='translate-y-[30px] px-8'>
              <img src={Docente} alt='imagen docente'></img>
            </div>
        </div>
      </section>

      <section className='max-w-[1200px] mx-auto'>
        <h3 className='my-5 text-[#045BFD] font-bold text-2xl w-11/12 mx-auto'>Cursos más vistos</h3>
        <SwiperCourses/>
      </section>

      <section className='max-w-[1200px] mx-auto'>
        <h3 className='my-5 text-[#045BFD] font-bold text-2xl w-11/12 mx-auto'>Recomendado para docentes</h3>
        <SwiperCoursesTeachers/>
      </section>
    </>
  )
}
