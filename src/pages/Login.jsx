import './Home.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  // Função para lidar com o submit do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o reload da página
    navigate('/inicio'); // Redireciona para a página Inicio
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
        <div className="auth-buttons">
          <button className="register-button">Cadastro</button>
          <button className="login-button">Login</button>
        </div>
      </header>
      <main className="home-main">
        <div className="login-card">
          <div className="login-logo">
            <span>:):</span>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" placeholder="Email" />
            <label>Password</label>
            <input type="password" placeholder="Password" />
            <button type="submit" className="login-submit">Login</button>
          </form>
        </div>
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

export default Login;