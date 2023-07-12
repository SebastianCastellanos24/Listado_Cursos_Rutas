import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';


export const Curso15 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[14].id}
            img={MainCourses[14].img}
            link={MainCourses[14].link}
            title={MainCourses[14].title}
            desccription={MainCourses[14].description}
            descriptionFull={MainCourses[14].descriptionFull}
            price={MainCourses[14].price}
            alt={MainCourses[14].alt}
            hour={MainCourses[14].hour}
            learning1={MainCourses[14].learning.learning1}
            learning2={MainCourses[14].learning.learning2}
            learning3={MainCourses[14].learning.learning3}
            teacher={MainCourses[14].teacher}
            certificationBy={MainCourses[14].certificationBy}
            level={MainCourses[14].level}
        />
    </>
  )
}