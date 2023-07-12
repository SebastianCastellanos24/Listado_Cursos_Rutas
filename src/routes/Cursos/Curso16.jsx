import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';


export const Curso16 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[15].id}
            img={MainCourses[15].img}
            link={MainCourses[15].link}
            title={MainCourses[15].title}
            desccription={MainCourses[15].description}
            descriptionFull={MainCourses[15].descriptionFull}
            price={MainCourses[15].price}
            alt={MainCourses[15].alt}
            hour={MainCourses[15].hour}
            learning1={MainCourses[15].learning.learning1}
            learning2={MainCourses[15].learning.learning2}
            learning3={MainCourses[15].learning.learning3}
            teacher={MainCourses[15].teacher}
            certificationBy={MainCourses[15].certificationBy}
            level={MainCourses[15].level}
        />
    </>
  )
}