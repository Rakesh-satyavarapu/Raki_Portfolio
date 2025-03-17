// import { Route, Routes } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills'
import Projects from './pages/Projects';
import Contact from './pages/Contact'

function App() {
  return (
  <div style={{backgroundColor:'black',color:'ghostWhite'}}>
    <Nav />
    <section id='home'><Home /></section>
    <section id='about'><About /></section>
    <section id='skills'><Skills/></section>
    <section id='projects'><Projects/></section>
    <section id='contact'><Contact/></section>
  </div>
  );
}

export default App;


{/* <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About />}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes> */}