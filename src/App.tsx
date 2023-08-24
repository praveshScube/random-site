import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/Home/NavBar';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
