import React from 'react'
import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';

export const Curso2 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[1].id}
            img={MainCourses[1].img}
            link={MainCourses[1].link}
            title={MainCourses[1].title}
            desccription={MainCourses[1].description}
            descriptionFull={MainCourses[1].descriptionFull}
            price={MainCourses[1].price}
            alt={MainCourses[1].alt}
            hour={MainCourses[1].hour}
            learning1={MainCourses[1].learning.learning1}
            learning2={MainCourses[1].learning.learning2}
            learning3={MainCourses[1].learning.learning3}
            teacher={MainCourses[1].teacher}
            certificationBy={MainCourses[1].certificationBy}
            level={MainCourses[1].level}
        />
    </>
  )
}
