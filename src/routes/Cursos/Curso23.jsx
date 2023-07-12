import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';


export const Curso23 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[22].id}
            img={MainCourses[22].img}
            link={MainCourses[22].link}
            title={MainCourses[22].title}
            desccription={MainCourses[22].description}
            descriptionFull={MainCourses[22].descriptionFull}
            price={MainCourses[22].price}
            alt={MainCourses[22].alt}
            hour={MainCourses[22].hour}
            learning1={MainCourses[22].learning.learning1}
            learning2={MainCourses[22].learning.learning2}
            learning3={MainCourses[22].learning.learning3}
            teacher={MainCourses[22].teacher}
            certificationBy={MainCourses[22].certificationBy}
            level={MainCourses[22].level}
        />
    </>
  )
}