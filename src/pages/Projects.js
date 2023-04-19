
import Project from '../components/Project/Project';
import { projects } from "./../helpers/projectsList"

const Projects = () => {
   return (
      <div>
         <main className="section">
            <div className="container">
               <h2 className="title-1 animate__animated animate__bounceIn">Проекты</h2>
               <ul className="projects">
                  {projects.map((item, index) => {
                     return (
                        <Project
                           key={index}
                           index={index}
                           img={item.img}
                           title={item.title}
                        />
                     )

                  })}
               </ul>
            </div>
         </main>
      </div>
   );
}

export default Projects;