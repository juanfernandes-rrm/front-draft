// src/components/Callback.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch('/callback');
        const data = await response.json();

        if (data.token) {
          // Armazena o token no localStorage
          localStorage.setItem('accessToken', data.token);
          console.log('Token armazenado:', data.token);

          // Redireciona o usuário para a página inicial ou outra página
          navigate('/home');
        } else {
          console.error('Token não encontrado na resposta.');
        }
      } catch (error) {
        console.error('Erro ao buscar o token:', error);
      }
    };

    fetchToken();
  }, [navigate]);

  return <div>Carregando...</div>;
}

export default Callback;
