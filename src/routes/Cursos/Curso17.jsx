import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';


export const Curso17 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[16].id}
            img={MainCourses[16].img}
            link={MainCourses[16].link}
            title={MainCourses[16].title}
            desccription={MainCourses[16].description}
            descriptionFull={MainCourses[16].descriptionFull}
            price={MainCourses[16].price}
            alt={MainCourses[16].alt}
            hour={MainCourses[16].hour}
            learning1={MainCourses[16].learning.learning1}
            learning2={MainCourses[16].learning.learning2}
            learning3={MainCourses[16].learning.learning3}
            teacher={MainCourses[16].teacher}
            certificationBy={MainCourses[16].certificationBy}
            level={MainCourses[16].level}
        />
    </>
  )
}