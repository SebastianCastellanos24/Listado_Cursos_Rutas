import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';


export const Curso4 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[3].id}
            img={MainCourses[3].img}
            link={MainCourses[3].link}
            title={MainCourses[3].title}
            desccription={MainCourses[3].description}
            descriptionFull={MainCourses[3].descriptionFull}
            price={MainCourses[3].price}
            alt={MainCourses[3].alt}
            hour={MainCourses[3].hour}
            learning1={MainCourses[3].learning.learning1}
            learning2={MainCourses[3].learning.learning2}
            learning3={MainCourses[3].learning.learning3}
            teacher={MainCourses[3].teacher}
            certificationBy={MainCourses[3].certificationBy}
            level={MainCourses[3].level}
        />
    </>
  )
}
