import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';


export const Curso22 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[21].id}
            img={MainCourses[21].img}
            link={MainCourses[21].link}
            title={MainCourses[21].title}
            desccription={MainCourses[21].description}
            descriptionFull={MainCourses[21].descriptionFull}
            price={MainCourses[21].price}
            alt={MainCourses[21].alt}
            hour={MainCourses[21].hour}
            learning1={MainCourses[21].learning.learning1}
            learning2={MainCourses[21].learning.learning2}
            learning3={MainCourses[21].learning.learning3}
            teacher={MainCourses[21].teacher}
            certificationBy={MainCourses[21].certificationBy}
            level={MainCourses[21].level}
        />
    </>
  )
}