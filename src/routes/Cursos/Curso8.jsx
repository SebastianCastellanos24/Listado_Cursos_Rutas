import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';


export const Curso8 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[7].id}
            img={MainCourses[7].img}
            link={MainCourses[7].link}
            title={MainCourses[7].title}
            desccription={MainCourses[7].description}
            descriptionFull={MainCourses[7].descriptionFull}
            price={MainCourses[7].price}
            alt={MainCourses[7].alt}
            hour={MainCourses[7].hour}
            learning1={MainCourses[7].learning.learning1}
            learning2={MainCourses[7].learning.learning2}
            learning3={MainCourses[7].learning.learning3}
            teacher={MainCourses[7].teacher}
            certificationBy={MainCourses[7].certificationBy}
            level={MainCourses[7].level}
        />
    </>
  )
}