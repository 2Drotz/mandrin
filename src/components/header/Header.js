import '../header/header.css'
import 'animate.css';

function Header() {

   return (
      <div>
         <header className="header">
            <div className="header__wrapper">
               <h1 className="header__title ">
                  <strong>Привет, меня зовут; <em >Дмитрий</em></strong><br />
                  я начинающий фронтенд~разработчик
               </h1>
               <div className="header__text">
                  {/* <p>также увлекаюсь дизайном</p> */}
               </div>
               <a href="#" className="btn wow bounceIn" data-wow-delay='.4s' download>Открыть</a>
            </div>

         </header>
      </div>
   );
}

export default Header;