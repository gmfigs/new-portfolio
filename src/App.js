import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Work from './components/Portfolio/Work';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Header from './components/header/Header';
import HoyBank from './components/hoyBank/HoyBank';
import Siscog from './components/siscog/Siscog';
import Airbnb from './components/airbnb/airbnb';

const App = () => {
  const currentPath = window.location.pathname;
  const isWorkProjectsPage = currentPath === '/hoyBank' ||
                            currentPath === '/mrGeek' ||
                            currentPath === '/brainUp' ||
                            currentPath === '/branding' ||
                            currentPath === '/siscog' ||
                            currentPath === '/airbnb';
  return (
    <BrowserRouter>
      <main className='main'>
        <Header />
        {isWorkProjectsPage ? (
          <>
          {currentPath === '/hoyBank' && <HoyBank />}
          {currentPath === '/siscog' && <Siscog />}
          {currentPath === '/airbnb' && <Airbnb />}
          </>
        ) : (
          <>
            <Home />
            <About />
            <Skills />
            <Services />
            <Qualification />
            <Work />
            <Testimonials />
            <Contact />
          </>
        )}
        <Footer currentPath={currentPath}/>
        <ScrollUp />
      </main>
    </BrowserRouter>
  );
}

export default App