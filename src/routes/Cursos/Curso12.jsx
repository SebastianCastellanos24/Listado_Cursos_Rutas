import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';


export const Curso12 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[11].id}
            img={MainCourses[11].img}
            link={MainCourses[11].link}
            title={MainCourses[11].title}
            desccription={MainCourses[11].description}
            descriptionFull={MainCourses[11].descriptionFull}
            price={MainCourses[11].price}
            alt={MainCourses[11].alt}
            hour={MainCourses[11].hour}
            learning1={MainCourses[11].learning.learning1}
            learning2={MainCourses[11].learning.learning2}
            learning3={MainCourses[11].learning.learning3}
            teacher={MainCourses[11].teacher}
            certificationBy={MainCourses[11].certificationBy}
            level={MainCourses[11].level}
        />
    </>
  )
}