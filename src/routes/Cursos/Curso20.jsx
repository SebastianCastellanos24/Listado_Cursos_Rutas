import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';


export const Curso20 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[19].id}
            img={MainCourses[19].img}
            link={MainCourses[19].link}
            title={MainCourses[19].title}
            desccription={MainCourses[19].description}
            descriptionFull={MainCourses[19].descriptionFull}
            price={MainCourses[19].price}
            alt={MainCourses[19].alt}
            hour={MainCourses[19].hour}
            learning1={MainCourses[19].learning.learning1}
            learning2={MainCourses[19].learning.learning2}
            learning3={MainCourses[19].learning.learning3}
            teacher={MainCourses[19].teacher}
            certificationBy={MainCourses[19].certificationBy}
            level={MainCourses[19].level}
        />
    </>
  )
}