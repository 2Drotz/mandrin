import gitHub from './gitHub-black.svg';
import './btnGitHub.css'

const BtnGitHub = ({ link }) => {
   return (
      <div>
         <a href={link} target='_blank' rel='noreferrer' className="btn-outline">
            <img src={gitHub} alt="" />
            GitHub repo
         </a>
      </div>
   );
}

export default BtnGitHub;