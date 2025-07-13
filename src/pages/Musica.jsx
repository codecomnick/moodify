import './Musica.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const moodMap = {
  relaxing: "relaxing",
  angry: "angry",
  happy: "happy",
  energetic: "energetic",
  sad: "sad",
};

const Musica = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const humor = location.state?.humor || "happy";

  const [musicas, setMusicas] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleMusica = (index) => {
    window.open(index)
  };

  const buscarMusicas = async (humor) => {
    const termo = moodMap[humor] || "music";
    setLoading(true);

    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(
          termo
        )}&limit=5&media=music`
      );
      const data = await response.json();
      setMusicas(data.results);
    } catch (error) {
      console.error("Erro ao buscar músicas:", error);
      setMusicas([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarMusicas(humor);
  }, [humor]);

  console.log(musicas);


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

          {loading ? (
            <p>Carregando...</p>
          ) : (
            musicas.map((musica, index) => (
              <div
                key={index}
                className={`accordion-item`}
              >
                <button
                  className="accordion-header"
                  onClick={() => toggleMusica(musica.trackViewUrl)}
                >
                  {`${musica.trackName} - ${musica.artistName}`}
                </button>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Musica;
