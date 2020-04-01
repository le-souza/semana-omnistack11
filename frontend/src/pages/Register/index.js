import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUF] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    const ong = {
      name,
      email,
      whatsapp,
      city,
      uf
    };
    try {
      const response = await api.post('ongs', ong);
      alert(`Seu ID de acesso ${response.data.id}`);
      history.push('/');
    } catch (error) {
      alert('Erro no cadastro. tente novamente!');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        
        <section>
          
          <Link className="back-link" to="/">
            <img src={logoImg} alt="Be The Hero"/>
          </Link>
          
          <h1>Cadastro</h1>
          <p>Faça se cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041"/>Voltar para Logon
          </Link>
        </section>

        <form onSubmit={handleRegister} >
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}  
          />
          <input
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          
          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}  
            />
            <input
              style={{ width:80 }}
              placeholder="UF"
              value={uf}
              onChange={e => setUF(e.target.value)}
            />
          </div>
          
          <button type="submit" className="button">Cadastrar</button>

        </form>
      </div>
    </div>
  );
}