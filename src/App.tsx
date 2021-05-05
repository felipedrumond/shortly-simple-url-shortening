import React from 'react';
import './App.scss';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Boost from './components/boost/Boost';
import Header from './components/header/Header';
import Shortener from './components/shortener/Shortener';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Header></Header>
      <Shortener></Shortener>
      <About></About>
      <Boost></Boost>
      <Footer></Footer>
    </div>
  );
}

export default App;
