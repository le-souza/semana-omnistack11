import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './style.css';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Profile() {
  
  const [incidents, setIncidents] = useState([]);
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');
  const history = useHistory();

  // useEfect executa uma função sempre que o valor do segundo parâmetro (ongId) for alterado
  useEffect(() => {

    api.get( 'profile', {headers: {Authorization: ongId}} )
      .then(response => setIncidents(response.data));
  
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });
      
      // Remove o incidente da tela atualizando a váriavel incidents
      setIncidents(incidents.filter(icd => icd.id !== id ));

    } catch (error) {
      alert('Erro ao deletar caso. Tente Novamente!')
    }
  }

  async function handleLogout(id) {
    localStorage.clear();
    history.push('/');
  }
  
  return (
    <div className="profile-container">
      
      <header>
        
        <Link className="back-link" to="/">
          <img src={logoImg} alt="Be The Hero"/>
        </Link>
        
        <span>Bem vindo, {ongName}</span>
        
        <Link className="button" to="/incidents/new" >Cadastrar novo caso</Link>
        
        <button type="button" onClick={handleLogout}>
          <FiPower color="#E02041" size={18} />
        </button>
      </header>

      <main>
        
        <h1>Casos Cadastrados</h1>

        <ul>
          { 
            incidents.map(
              icd => (
                <li key={icd.id} >
                  <strong>CASO:</strong>
                  <p>{icd.title}</p>

                  <strong>Descrição:</strong>
                  <p>{icd.description}</p>

                  <strong>Valor:</strong>
                  <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(icd.value)}</p>

                  <button
                    type="button"
                    onClick={ () => handleDeleteIncident(icd.id) }
                  >
                    <FiTrash2 size={20} color="#a8a8b3" />
                  </button>
                </li>
              )
            )
          }
        </ul>
      </main>

    </div>
  );
}