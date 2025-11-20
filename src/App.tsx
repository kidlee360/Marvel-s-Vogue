
// 1. Import routing components
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './home.tsx';
import About from './About.tsx';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <button><Link to="/">Home</Link></button>  <button><Link to="/about">About</Link></button>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App
