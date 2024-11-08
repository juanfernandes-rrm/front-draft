import React from 'react';

function App() {
  // Função de logout para enviar uma requisição POST ao backend
  const handleLogout = () => {
      fetch('http://localhost:3000/logout', {
          method: 'POST', // Usar POST para evitar a confirmação de logout do Spring
          headers: {
              'Content-Type': 'application/json',
          },
          credentials: 'include', // Inclui cookies de autenticação
      })
      .then(response => {
          if (response.ok) {
              return response.json(); // Parseia o JSON da resposta
          }
          throw new Error('Logout failed');
      })
      .then(data => {
          // Redirecionar para a URL de logout recebida
          window.location.href = data.logoutUrl;
      })
      .catch(error => {
          console.error('Error during logout:', error);
      });
    };

  return (
    <main>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <div className="container">
          <br />
          <div className="d-grid gap-2 col-4 mx-auto">
            <br />
            <form className="form-signin w-100 m-auto">
              <a
                className="w-100 btn btn-lg btn-primary"
                href="http://localhost:3000/oauth2/authorization/keycloak"
                role="link"
                style={{ marginTop: '10px' }}
              >
                Login
              </a>
              <a
                className="w-100 btn btn-lg btn-secondary"
                href="http://localhost:8080/realms/master/protocol/openid-connect/registrations"
                role="link"
                style={{ marginTop: '10px' }}
              >
                Cadastro
              </a>
              {/* Botão de Logout que chama a função handleLogout */}
              <button
                type="button"
                className="w-100 btn btn-lg btn-danger"
                onClick={handleLogout}
                style={{ marginTop: '10px' }}
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </body>
    </main>
  );
}

export default App;
