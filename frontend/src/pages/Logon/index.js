import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './style.css';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import api from '../../services/api';

export default function Logon() {

  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('sessions', {id});
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      history.push('/profile');
    } catch (error) {
      alert('Falha no Login. Tente novamente!');
    }
  }

  return (
    <div className="logon-container" onLoad={(e) => setId(localStorage.getItem('ongId'))} >
      
      <section className="form">
        
        <Link className="back-link" to="/">
          <img src={logoImg} alt="Be The Hero"/>
        </Link>

        <form onSubmit={handleLogin}>
          
          <h1>Faça seu logon</h1>
          
          <input type="text"
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value) }
          />

          <button type="submit" className='button' >Entrar</button>
          
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041"/>
            Não Tenho cadastro
          </Link>
        </form>

      </section>

      <img src={heroesImg} alt="Heroes"/>

    </div>
  );
}