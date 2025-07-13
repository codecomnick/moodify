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
      </header>
      <main className="inicio-main">
        <h1>Escolha o seu mood e aproveite a trilha sonora</h1>
        <div className="moods-grid">
          <div className="moods-row">
            <button
              className="mood-box green"
              onClick={() => navigate('/musica')}
            >Calmo</button>
            <button
              className="mood-box red"
              onClick={() => navigate('/musica')}
            >Estressado</button>
            <button
              className="mood-box yellow"
              onClick={() => navigate('/musica')}
            >Feliz</button>
          </div>
          <div className="moods-row">
            <button
              className="mood-box purple"
              onClick={() => navigate('/musica')}
            >Animado</button>
            <button
              className="mood-box blue"
              onClick={() => navigate('/musica')}
            >Triste</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Inicio;