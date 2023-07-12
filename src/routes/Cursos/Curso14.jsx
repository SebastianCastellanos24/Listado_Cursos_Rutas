import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';


export const Curso14 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[13].id}
            img={MainCourses[13].img}
            link={MainCourses[13].link}
            title={MainCourses[13].title}
            desccription={MainCourses[13].description}
            descriptionFull={MainCourses[13].descriptionFull}
            price={MainCourses[13].price}
            alt={MainCourses[13].alt}
            hour={MainCourses[13].hour}
            learning1={MainCourses[13].learning.learning1}
            learning2={MainCourses[13].learning.learning2}
            learning3={MainCourses[13].learning.learning3}
            teacher={MainCourses[13].teacher}
            certificationBy={MainCourses[13].certificationBy}
            level={MainCourses[13].level}
        />
    </>
  )
}