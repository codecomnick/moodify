import './Inicio.css';
import { useNavigate } from 'react-router-dom';

const moodMap = {
  calmo: "relaxing",
  estressado: "angry",
  feliz: "happy",
  animado: "energetic",
  triste: "sad",
};

const moodColorMap = {
  calmo: "green",
  estressado: "red",
  feliz: "yellow",
  animado: "purple",
  triste: "blue",
};

const Inicio = () => {
  const navigate = useNavigate();

  const handleClick = (humor) => {
    navigate("/musica", { state: { humor: moodMap[humor] } });
  };


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
        <div className='moods-row'>
          <div className="moods-grid">
            {Object.keys(moodMap).slice(0,3).map((humor) => (
              <button className={`mood-box ${moodColorMap[humor]}`} key={humor} onClick={() => handleClick(humor)}>
                {humor.charAt(0).toUpperCase() + humor.slice(1)}
              </button>
            ))}
          </div>
          <div className="moods-grid second">
            {Object.keys(moodMap).slice(3).map((humor) => (
              <button className={`mood-box ${moodColorMap[humor]}`} key={humor} onClick={() => handleClick(humor)}>
                {humor.charAt(0).toUpperCase() + humor.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Inicio;