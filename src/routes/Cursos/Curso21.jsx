import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';


export const Curso21 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[20].id}
            img={MainCourses[20].img}
            link={MainCourses[20].link}
            title={MainCourses[20].title}
            desccription={MainCourses[20].description}
            descriptionFull={MainCourses[20].descriptionFull}
            price={MainCourses[20].price}
            alt={MainCourses[20].alt}
            hour={MainCourses[20].hour}
            learning1={MainCourses[20].learning.learning1}
            learning2={MainCourses[20].learning.learning2}
            learning3={MainCourses[20].learning.learning3}
            teacher={MainCourses[20].teacher}
            certificationBy={MainCourses[20].certificationBy}
            level={MainCourses[20].level}
        />
    </>
  )
}