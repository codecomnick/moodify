import './Inicio.css';
import { useNavigate } from 'react-router-dom';

const Inicio = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <header className="home-header">
        <div
          className="logo"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          :): Moodify
        </div>
        <nav className="inicio-nav">
          <button className="nav-btn active">Home</button>
          <button className="nav-btn">Histórico</button>
        </nav>
      </header>
      <main className="inicio-main">
        <h1>Escolha o seu mood e aproveite a trilha sonora</h1>
        <div className="moods-grid">
          <div className="moods-row">
            <button className="mood-box green">Calmo</button>
            <button className="mood-box red">Estressado</button>
            <button className="mood-box yellow">Feliz</button>
          </div>
          <div className="moods-row">
            <button className="mood-box purple">Animado</button>
            <button className="mood-box blue">Triste</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Inicio;