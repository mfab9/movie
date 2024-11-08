import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <h2 style={styles.subtitle}>Oops! Page Not Found</h2>
      <p style={styles.text}>The page you are looking for does not exist.</p>
      <button style={styles.button} onClick={() => navigate('/')}>
        Go Back Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#1a1a1a',
    color: '#f2f2f2',
    textAlign: 'center',
  },
  title: {
    fontSize: '100px',
    color: '#e63946',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '24px',
    color: '#f4a261',
    marginBottom: '20px',
  },
  text: {
    fontSize: '16px',
    color: '#a8dadc',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#e63946',
    color: '#1a1a1a',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default NotFound;
