import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/Common/NavBar";
import About from "./components/About/About";
import MySkills from "./components/MySkills/MySkills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Common/Footer";
import Myself from "./components/Myself/Myself";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/myself" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-skills" element={<MySkills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/myself" element={<Myself />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
