import { DescripCourses } from '../../components/DescripCourses'
import MainCourses from '../../../MainCourses';


export const Curso18 = () => {
  return (
    <>
        <DescripCourses
            key={MainCourses[17].id}
            img={MainCourses[17].img}
            link={MainCourses[17].link}
            title={MainCourses[17].title}
            desccription={MainCourses[17].description}
            descriptionFull={MainCourses[17].descriptionFull}
            price={MainCourses[17].price}
            alt={MainCourses[17].alt}
            hour={MainCourses[17].hour}
            learning1={MainCourses[17].learning.learning1}
            learning2={MainCourses[17].learning.learning2}
            learning3={MainCourses[17].learning.learning3}
            teacher={MainCourses[17].teacher}
            certificationBy={MainCourses[17].certificationBy}
            level={MainCourses[17].level}
        />
    </>
  )
}