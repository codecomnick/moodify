import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Inicio from './pages/Inicio.jsx'; // Importe o componente
import Musica from './pages/Musica.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Inicio />} /> {/* Adicione esta linha */}
        <Route path="/musica" element={<Musica />} />
      </Routes>
    </Router>
  );
}

export default App;
