import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';


export const Curso11 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[10].id}
            img={MainCourses[10].img}
            link={MainCourses[10].link}
            title={MainCourses[10].title}
            desccription={MainCourses[10].description}
            descriptionFull={MainCourses[10].descriptionFull}
            price={MainCourses[10].price}
            alt={MainCourses[10].alt}
            hour={MainCourses[10].hour}
            learning1={MainCourses[10].learning.learning1}
            learning2={MainCourses[10].learning.learning2}
            learning3={MainCourses[10].learning.learning3}
            teacher={MainCourses[10].teacher}
            certificationBy={MainCourses[10].certificationBy}
            level={MainCourses[10].level}
        />
    </>
  )
}