# api-rick-and-morty
Aplicação realizando a conexão a API Rick and Morty utilizando React.


## Qual objetivo do projeto

-Esse projeto visa criar um front-end para consumir a [API Rick and Morty](https://rickandmortyapi.com/)


## Tecnologias Utilizadas

-React, JavaScript, HTML, CSS - Utilizei JS pois é a linguagem que tenho mais conhecimento e estou estudando ultimamente.


## Pré-requisitos

-Node.Js 16.x:
```sh
sudo apt install nodejs
```

-NPM:
```sh
npm install npm@latest -g
```

## Instalação

Clone esse repositório: 
```sh
git@github.com:wesleibl/api-rick-and-morty.git
```

Acesse a pasta do repositorio criada

Instale os modulos com o comando:
```sh
npm install
```

Inicie a aplicação com o comando:
```sh
npm start
```

## Como funciona a conexao a API

O arquivo de conexão principal é o /src/components/Character.js
No componente Home.js é informada ID dos personsagens para que seja feita a busca na API.
