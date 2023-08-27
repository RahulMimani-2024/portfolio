import React from "react";
import "./app.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";
import Portfolio from "./containers/portfolio";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import NavBar from "./components/navBar";
import particles from "./utils/particles";


const App = () => {
  const handleInit = async (main) => {
    await loadFull(main);
  };
  const location = useLocation();
  const isToggleParticlesJsInHome = location.pathname === "/";
  return (
    <div className="App">
      {/* Particles js */}
      {isToggleParticlesJsInHome && (
        <Particles
          id="particles"
          options={particles}
          init={handleInit}
        ></Particles>
      )}
      {/* Navbar */}
      <NavBar></NavBar>

      {/* Main content */}
      <div className="App__main-content">
      <Routes>
        <Route index path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/resume" element={<Resume></Resume>}></Route>
        <Route path="/skills" element={<Skills></Skills>}></Route>
      </Routes>
      </div>
    </div>
  );
};

export default App;
