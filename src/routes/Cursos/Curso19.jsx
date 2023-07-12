import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';


export const Curso19 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[18].id}
            img={MainCourses[18].img}
            link={MainCourses[18].link}
            title={MainCourses[18].title}
            desccription={MainCourses[18].description}
            descriptionFull={MainCourses[18].descriptionFull}
            price={MainCourses[18].price}
            alt={MainCourses[18].alt}
            hour={MainCourses[18].hour}
            learning1={MainCourses[18].learning.learning1}
            learning2={MainCourses[18].learning.learning2}
            learning3={MainCourses[18].learning.learning3}
            teacher={MainCourses[18].teacher}
            certificationBy={MainCourses[18].certificationBy}
            level={MainCourses[18].level}
        />
    </>
  )
}