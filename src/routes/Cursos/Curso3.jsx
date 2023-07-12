import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';


export const Curso3 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[2].id}
            img={MainCourses[2].img}
            link={MainCourses[2].link}
            title={MainCourses[2].title}
            desccription={MainCourses[2].description}
            descriptionFull={MainCourses[2].descriptionFull}
            price={MainCourses[2].price}
            alt={MainCourses[2].alt}
            hour={MainCourses[2].hour}
            learning1={MainCourses[2].learning.learning1}
            learning2={MainCourses[2].learning.learning2}
            learning3={MainCourses[2].learning.learning3}
            teacher={MainCourses[2].teacher}
            certificationBy={MainCourses[2].certificationBy}
            level={MainCourses[2].level}
        />
    </>
  )
}
