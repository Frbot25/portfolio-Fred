//import
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
//import css
import './App.css';
//import components
import Projects from './components/Projects';
import Navbar from './components/Header/Navbar';
import Home from './components/Home';
import Contact from './components/contact/Contact';
import Footer from "./components/footer/Footer";
import CardDetail from "./components/cardDetail/CardDetail";
import NotFound from "./components/notfound/NotFound";
import CookiesRgpd from "./components/rgpd/CookiesConsent";
import Mentions from "./components/Mentions";
import About from "./components/About";

const App =() => {
  // const [cookies, setCookie] = useCookies(['name']);
  // function onChange(newName) {
  //   setCookie('name', newName, { path: '/' });
  // }
  return (
    <div className='app-container'>
        <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/projets" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/site/:id" element={<CardDetail />}></Route>
        <Route path="/mentions" element={<Mentions />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <CookiesRgpd />
    </Router>
    </div>
    
  );

}



export default App;