import moon from '../../img/icons/moon.svg';
import sun from '../../img/icons/sun.svg';

import '../navbar/navbar.css'

import { NavLink } from 'react-router-dom';

function Navbar() {

   const activeLink = 'nav-list__link nav-list__link--active';
   const normalLink = 'nav-list__link';


   return (
      <div>
         <nav className="nav">
            <div className="container">
               <div className="nav-row">
                  <NavLink to='/' className="logo">
                     <strong>Mandrin</strong>
                  </NavLink>


                  {/* <button className="dark-mode-btn">
                     <img src={moon} alt="Light mode" className="dark-mode-btn__icon" />
                     <img src={sun} alt="Dark mode" className="dark-mode-btn__icon" />
                  </button> */}

                  <ul className="nav-list">
                     <li className="nav-list__item">
                        <NavLink to='/' className={({ isActive }) => isActive ? activeLink : normalLink}>
                           .main
                        </NavLink>

                     </li>
                     <li className="nav-list__item">
                        <NavLink to='/projects' className={({ isActive }) => isActive ? activeLink : normalLink}>
                           .project
                        </NavLink>

                     </li>
                     <li className="nav-list__item">
                        <NavLink to='/contact' className={({ isActive }) => isActive ? activeLink : normalLink}>
                           .contact
                        </NavLink>

                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   );
}

export default Navbar;