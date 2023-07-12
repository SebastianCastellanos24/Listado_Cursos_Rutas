import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';


export const Curso9 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[8].id}
            img={MainCourses[8].img}
            link={MainCourses[8].link}
            title={MainCourses[8].title}
            desccription={MainCourses[8].description}
            descriptionFull={MainCourses[8].descriptionFull}
            price={MainCourses[8].price}
            alt={MainCourses[8].alt}
            hour={MainCourses[8].hour}
            learning1={MainCourses[8].learning.learning1}
            learning2={MainCourses[8].learning.learning2}
            learning3={MainCourses[8].learning.learning3}
            teacher={MainCourses[8].teacher}
            certificationBy={MainCourses[8].certificationBy}
            level={MainCourses[8].level}
        />
    </>
  )
}