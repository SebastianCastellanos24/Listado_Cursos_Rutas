import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';


export const Curso13 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[12].id}
            img={MainCourses[12].img}
            link={MainCourses[12].link}
            title={MainCourses[12].title}
            desccription={MainCourses[12].description}
            descriptionFull={MainCourses[12].descriptionFull}
            price={MainCourses[12].price}
            alt={MainCourses[12].alt}
            hour={MainCourses[12].hour}
            learning1={MainCourses[12].learning.learning1}
            learning2={MainCourses[12].learning.learning2}
            learning3={MainCourses[12].learning.learning3}
            teacher={MainCourses[12].teacher}
            certificationBy={MainCourses[12].certificationBy}
            level={MainCourses[12].level}
        />
    </>
  )
}