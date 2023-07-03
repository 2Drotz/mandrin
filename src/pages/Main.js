import Header from '../components/header/Header'
import { useEffect } from 'react';
import WOW from 'wowjs'
import avatar from '../img/avatar.png';


function Main() {
   useEffect(() => {
      new WOW.WOW().init()
   });

   return (
      <div>
         <Header></Header>
         <main className="section">
            <div className="container">
               <h1 className="title-1 ">Обо мне</h1>

               <ul className="content-list">
                  <li className="content-list__item">
                  <h2 className="title-2 wow fadeIn">Личность</h2>
                        <div className='my-info'>
                        
                           <div className='text'>
                              <p>Получил степень бакалавра по технической специальности "Прикладная информатика" в кубанском техническом университете КубГТУ.</p> <br></br>
                              <p>Считаю себя ответственным, внимательным, "мобильным", стараюсь доводить дело до конца, отношусь к работе добросовестно.</p> <br></br>
                              <p>Увлекаюсь программированием, дизайном.</p>
                           </div>

                           <img className='avatar' src={avatar}></img>
                        
                        </div>
                  </li>
                  <li className="content-list__item">
                     <h2 className="title-2 wow fadeIn" >Фронтенд</h2>
                     <p className='wow zoomIn' data-wow-delay='.4s'>JavaScript, ReactJS, GIT, Redux, HTML, CSS, NPM, BootStrap, SQL</p>
                  </li>
                  <li className="content-list__item">
                     <h2 className="title-2 wow fadeIn" >Прочее</h2>
                     <p className='wow zoomIn' data-wow-delay='.6s'>Figma, Photoshop, Bitrix24.CRM, Английский B1, Miro, Notion, Word, Excel</p>
                  </li>
               </ul>

            </div>
         </main>
      </div>
   );
}

export default Main;