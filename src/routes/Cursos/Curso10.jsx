import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';


export const Curso10 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[9].id}
            img={MainCourses[9].img}
            link={MainCourses[9].link}
            title={MainCourses[9].title}
            desccription={MainCourses[9].description}
            descriptionFull={MainCourses[9].descriptionFull}
            price={MainCourses[9].price}
            alt={MainCourses[9].alt}
            hour={MainCourses[9].hour}
            learning1={MainCourses[9].learning.learning1}
            learning2={MainCourses[9].learning.learning2}
            learning3={MainCourses[9].learning.learning3}
            teacher={MainCourses[9].teacher}
            certificationBy={MainCourses[9].certificationBy}
            level={MainCourses[9].level}
        />
    </>
  )
}