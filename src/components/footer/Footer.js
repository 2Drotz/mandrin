import '../footer/footer.css'



import vk from '../../img/icons/vk.svg';
import telegram from '../../img/icons/telegram.svg';
import github from '../../img/icons/gitHub.svg';

function Footer() {
   return (
      <div>
         <footer className="footer">
            <div className="container">
               <div className="footer__wrapper">
                  <ul className="social">
                     <li className="social__item"><a href="https://vk.com/dimamandrin"><img src={vk} alt="Link" /></a></li>
                     <li className="social__item"><a href="https://t.me/Mityai2"><img src={telegram} alt="Link" /></a></li>
                     <li className="social__item"><a href="https://github.com/2Drotz"><img src={github} alt="Link" /></a></li>
                  </ul>
                  <div className="copyright">
                     <p>© 2023 Мандрин Дмитрий</p>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   );
}

export default Footer;