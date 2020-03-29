<h1 align="center">
    <img alt="Be The Hero" title="#delicinha" src="github/logo.svg" width="250px" />
</h1>

<h2 align="center">
  :rocket: Semana OmniStack 11.0 / Be The Hero
</h2>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/le-souza/semana-omnistack11">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/le-souza/semana-omnistack11">
  
  <a href="https://github.com/le-souza/semana-omnistack11/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/le-souza/semana-omnistack11">
  </a>

  <a href="https://github.com/le-souza/semana-omnistack11/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/le-souza/semana-omnistack11">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#trophy-minhas-implementações">Minhas Implementações</a>
</p>

<br>

<p align="center">
  <img alt="Heroes" src="github/heroes.png" width="">
</p>

## :computer: Projeto

<strong>Be The Hero</strong> é um projeto da <strong>11º edição da Semana OmniStack</strong> que é ministrada pela RocketSeat. Essa foi a minha primeira participação.

O projeto é um sistema de ajuda para ONGs onde uma instituição posta uma caso/<i>incident</i> informando um valor necessário para resolução do problema. A partir daí os <i>Heroes</i> entram em ação contactando a ONG para ajudar coma uma doação financeira.

Na ideia original, a versão Web, feita em React, conta apenas com a parte administrativa para ONGs. Nela uma instituição se cadastra, faz login e cadastra um caso.

Já no aplicativo, desenvolvido em React Native, foi feito apenas a área dos <i>Heroes</i>. Estes visualizam uma lista com os casos de todas as ONGs, acessam os detalhes de um caso e entram em contato, por e-mail ou Whatsapp, diretamente pelo aplicativo.

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [Expo Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)
- [Express](https://expressjs.com/pt-br/)
- [Celebrate](https://www.npmjs.com/package/celebrate)
- [Knex](http://knexjs.org/)
- [SQLite3](https://www.sqlite.org/version3.html)
- [React Icons](https://www.npmjs.com/package/react-icons)
- [Axios](https://www.npmjs.com/package/axios)
- [React-dom](https://pt-br.reactjs.org/docs/react-dom.html)
- [React-router-dom](https://www.npmjs.com/package/react-router-dom)
- [Intl](https://www.npmjs.com/package/intl)
- [Jest](https://jestjs.io/pt-BR/)
- [Supertest](https://www.npmjs.com/package/supertest)

## :trophy: Minhas Implementações

Algumas pequenas melhorias que adicionei ao projeto:

### Back-end

:white_check_mark: Melhor organização nos arquivos de rotas separando as validações do back-end (feitas com Celebrate) para um outro arquivo: <i>src/routes/validation.js</i>.

:white_check_mark: Verificação se o <i>incident</i> existe ao acessar a rota DELETE no arquivo <i>src/controllers/IncidentController.js</i>. A falta dessa validação causa erro no back-end quando passado um ID de que já foi excluído.

### Mobile

:white_check_mark: Icones nos botões de contato em <i>src/pages/details/index.js</i>.

:white_check_mark: Adicionado um container com <i>Scrollview</i> na tela de detalhes de um <i>incident</i>. Dependendo do tamanho da descrição a parte inferior da tela ficava inacessível. <i>src/pages/details/index.js</i>.

### Web

:black_square_button: Responsividade.
