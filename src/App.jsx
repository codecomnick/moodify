import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Inicio from './pages/Inicio.jsx'; // Importe o componente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inicio" element={<Inicio />} /> {/* Adicione esta linha */}
      </Routes>
    </Router>
  );
}

export default App;
