import React from 'react';

import './styles/global.scss';
import Header from './cmps/header/Header'
import About from './cmps/About'
import Skils from './cmps/skils/Skills'
import Service from './cmps/service/Service'
import Portfolio from './cmps/portfolio/Portfolio'
import Passage from './cmps/Passage'
import Contact from './cmps/Contact'
function App() {
  return (
    <div  >
      <Header />
      <About />
      <Skils />
      <Service />
      <Portfolio/>
      <Passage/>
      <Contact/>
    </div>
  );
}

export default App;
