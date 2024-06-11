

import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";


export default function App(){
  return(
    <>
    <headeer>
        <Navbar/>
        <Hero/>
    </headeer>
    <Projects/>
    <About/>
    <Contact/>
    <img  className="p-4 w-full"src="https://www.w3schools.com/w3images/map.jpg"/>
    <Footer/>
    </>
    
   
  )
}