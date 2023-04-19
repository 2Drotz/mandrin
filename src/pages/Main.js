import Header from '../components/header/Header'
import SearchJob from '../components/searchJob/SearchJob';
import { useEffect } from 'react';
import WOW from 'wowjs'
function Main() {
   useEffect(() => {
      new WOW.WOW().init()
   });

   return (
      <div>
         <Header></Header>
         <SearchJob></SearchJob>
         <main className="section">
            <div className="container">
               <h1 className="title-1 ">Skills</h1>

               <ul className="content-list">
                  <li className="content-list__item">
                     <h2 className="title-2 wow fadeIn">Обо мне</h2>
                     <p className='wow zoomIn' data-wow-delay='.1s'>Закончил обучение по технической специальности "Прикладная информатика".
                        Считаю себя ответственным, внимательным, "мобильным", стараюсь доводить дело до конца, отношусь к работе добросовестно, увлекаюсь программированием, дизайном.</p>
                  </li>
                  <li className="content-list__item">
                     <h2 className="title-2 wow fadeIn" >Фронтенд</h2>
                     <p className='wow zoomIn' data-wow-delay='.4s'>JavaScript, ReactJS, Redux, HTML, CSS, NPM, BootStrap, MySQL</p>
                  </li>
                  <li className="content-list__item">
                     <h2 className="title-2 wow fadeIn" >Прочее</h2>
                     <p className='wow zoomIn' data-wow-delay='.6s'>Figma, Photoshop, Английский B1, Miro, Notion, Word, Excel</p>
                  </li>
               </ul>

            </div>
         </main>
      </div>
   );
}

export default Main;