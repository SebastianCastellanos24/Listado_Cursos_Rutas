import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';


export const Curso5 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[4].id}
            img={MainCourses[4].img}
            link={MainCourses[4].link}
            title={MainCourses[4].title}
            desccription={MainCourses[4].description}
            descriptionFull={MainCourses[4].descriptionFull}
            price={MainCourses[4].price}
            alt={MainCourses[4].alt}
            hour={MainCourses[4].hour}
            learning1={MainCourses[4].learning.learning1}
            learning2={MainCourses[4].learning.learning2}
            learning3={MainCourses[4].learning.learning3}
            teacher={MainCourses[4].teacher}
            certificationBy={MainCourses[4].certificationBy}
            level={MainCourses[4].level}
        />
    </>
  )
}