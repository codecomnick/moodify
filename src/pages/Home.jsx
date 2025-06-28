import React from 'react';
import './Home.css'; // Add styles for the page

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <div className="logo">:): Moodify</div>
        <div className="auth-buttons">
          <button className="register-button">Cadastro</button>
          <button className="login-button">Login</button>
        </div>
      </header>
      <main className="home-main">
        <h1>Transforme seu humor em música!</h1>
        <p>
          Escolha como você está se sentindo e descubra a trilha sonora perfeita
          para o seu momento.
        </p>
        <button className="start-button">Começar agora</button>
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