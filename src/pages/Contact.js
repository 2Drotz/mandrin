const Contact = () => {
   return (
      <div>
         <main className="section">
            <div className="container">
               <h1 className="title-1 wow bounceIn">Контакты</h1>

               <ul className="content-list">
                  <li className="content-list__item">
                     <h2 className="title-2">Location</h2>
                     <p style={{ color: 'orange' }}>Краснодар, Россия</p>
                  </li>
                  <li className="content-list__item">
                     <h2 className="title-2">Telegram</h2>
                     <p><a href="tel:+79051234567">@Mityai2</a></p>
                  </li>
                  <li className="content-list__item">
                     <h2 className="title-2">Email</h2>
                     <p><a href="mailto:webdev@protonmail.com">dmitry.mandrin2013@yandex.ru</a></p>
                  </li>
               </ul>

            </div>
         </main>
      </div>
   );
}

export default Contact;