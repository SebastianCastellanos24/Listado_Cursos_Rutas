import React from 'react'
import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';

export const Curso1 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[0].id}
            img={MainCourses[0].img}
            link={MainCourses[0].link}
            title={MainCourses[0].title}
            desccription={MainCourses[0].description}
            descriptionFull={MainCourses[0].descriptionFull}
            price={MainCourses[0].price}
            alt={MainCourses[0].alt}
            hour={MainCourses[0].hour}
            learning1={MainCourses[0].learning.learning1}
            learning2={MainCourses[0].learning.learning2}
            learning3={MainCourses[0].learning.learning3}
            teacher={MainCourses[0].teacher}
            certificationBy={MainCourses[0].certificationBy}
            level={MainCourses[0].level}
        />
    </>
  )
}
