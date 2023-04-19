import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/main.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Main from './pages/Main';
import Projects from './pages/Projects';
import OneProject from './pages/OneProject';
import Contact from './pages/Contact'

import ScrollToTop from './utils/ScrollToTop';

function App() {

  const routtes = [
    { path: '/', Component: Main },
    { path: '/projects', Component: Projects },
    { path: '/contact', Component: Contact },
    { path: '/project/:id', Component: OneProject },
  ]

  return (
    <div className="App">
      <Router>
        <ScrollToTop></ScrollToTop>
        <Navbar></Navbar>

        <Routes>

          {/* <Routes>

            {routes.map(({ path, element }) =>
              <Route key={path} exact path={path} >
                {({ match }) =>
                  <CSSTransition timeout={1000} classNames="page" in={match != null} unmountOnExit>

                  </CSSTransition>
                }
              </Route>
            )}


          </Routes> */}

          <Route path='/' element={<Main />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/project/:id' element={<OneProject />}></Route>

        </Routes>

        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
