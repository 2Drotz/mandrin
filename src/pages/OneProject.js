import { useParams } from 'react-router-dom';
import { projects } from '../helpers/projectsList';
import BtnGitHub from '../components/btnGitHub/BtnGitHub';

const OneProject = () => {
   const { id } = useParams();
   const project = projects[id];

   return (
      <div>
         <main className="section">
            <div className="container">
               <div className="project-details">

                  <h1 className="title-1">{project.title}</h1>

                  <img src={project.imgBig} alt="" className="project-details__cover" />

                  <div className="project-details__desc">
                     <p>Skills: {project.skills}</p>
                  </div>

                  {project.gitHubLink && (
                     <BtnGitHub link={project.gitHubLink}></BtnGitHub>
                  )}


               </div>
            </div>
         </main>
      </div>
   );
}

export default OneProject;