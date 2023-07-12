import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';


export const Curso7 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[6].id}
            img={MainCourses[6].img}
            link={MainCourses[6].link}
            title={MainCourses[6].title}
            desccription={MainCourses[6].description}
            descriptionFull={MainCourses[6].descriptionFull}
            price={MainCourses[6].price}
            alt={MainCourses[6].alt}
            hour={MainCourses[6].hour}
            learning1={MainCourses[6].learning.learning1}
            learning2={MainCourses[6].learning.learning2}
            learning3={MainCourses[6].learning.learning3}
            teacher={MainCourses[6].teacher}
            certificationBy={MainCourses[6].certificationBy}
            level={MainCourses[6].level}
        />
    </>
  )
}