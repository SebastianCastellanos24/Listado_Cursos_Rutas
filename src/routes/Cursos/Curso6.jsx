import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';


export const Curso6 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[5].id}
            img={MainCourses[5].img}
            link={MainCourses[5].link}
            title={MainCourses[5].title}
            desccription={MainCourses[5].description}
            descriptionFull={MainCourses[5].descriptionFull}
            price={MainCourses[5].price}
            alt={MainCourses[5].alt}
            hour={MainCourses[5].hour}
            learning1={MainCourses[5].learning.learning1}
            learning2={MainCourses[5].learning.learning2}
            learning3={MainCourses[5].learning.learning3}
            teacher={MainCourses[5].teacher}
            certificationBy={MainCourses[5].certificationBy}
            level={MainCourses[5].level}
        />
    </>
  )
}