import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <header className="home-header">
        <div className="logo">:): Moodify</div>
  
      </header>
      <main className="home-main">
        <h1>Transforme seu humor em música!</h1>
        <p>
          Escolha como você está se sentindo e descubra a trilha sonora perfeita
          para o seu momento.
        </p>
        <button
          className="start-button"
          onClick={() => navigate('/inicio')}
        >
          Começar agora
        </button>
        <div className="mood-colors">
          <div className="color-box green"></div>
          <div className="color-box red"></div>
          <div className="color-box yellow"></div>
          <div className="color-box purple"></div>
          <div className="color-box blue"></div>
        </div>
      </main>
    </div>
  );
};

export default Home;