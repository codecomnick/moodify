import './Musica.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Musica = () => {
  const navigate = useNavigate();
  const [musicaAberta, setMusicaAberta] = useState(null);

  const toggleMusica = (index) => {
    setMusicaAberta(musicaAberta === index ? null : index);
  };

  const musicas = ['Música 1', 'Música 2', 'Música 3', 'Música 4'];

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
      <main className="musica-main musica-page">
        <div className="musica-box">
          <div className="header-musica-box">
            <h1>
              Aproveite a nossa seleção das melhores músicas<br />pro seu mood
            </h1>
          </div>

          {musicas.map((musica, index) => (
            <div
              key={index}
              className={`accordion-item ${
                musicaAberta === index ? 'active' : ''
              }`}
            >
              <button
                className="accordion-header"
                onClick={() => toggleMusica(index)}
              >
                {musica}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Musica;
