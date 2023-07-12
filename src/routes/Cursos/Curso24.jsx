import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';


export const Curso24 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[23].id}
            img={MainCourses[23].img}
            link={MainCourses[23].link}
            title={MainCourses[23].title}
            desccription={MainCourses[23].description}
            descriptionFull={MainCourses[23].descriptionFull}
            price={MainCourses[23].price}
            alt={MainCourses[23].alt}
            hour={MainCourses[23].hour}
            learning1={MainCourses[23].learning.learning1}
            learning2={MainCourses[23].learning.learning2}
            learning3={MainCourses[23].learning.learning3}
            teacher={MainCourses[23].teacher}
            certificationBy={MainCourses[23].certificationBy}
            level={MainCourses[23].level}
        />
    </>
  )
}