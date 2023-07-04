import '../header/header.css'
import 'animate.css';
import '../../css/main.css'
import asd from '../../img/asd.pdf'
function Header() {

   return (
      <div >
         <header className="header">
            <div className="header__wrapper">
               <h1 className="header__title ">
                  <strong>Привет, меня зовут; <em >Дмитрий</em></strong><br />
                  я начинающий кто-то
               </h1>
               <div className="header__text">
                  {/* <p>также увлекаюсь дизайном</p> */}
               </div>
               <a href={asd} className="btn wow bounceIn" download data-wow-delay='.4s' >Открыть</a>
            </div>

         </header>
      </div>
   );
}

export default Header;