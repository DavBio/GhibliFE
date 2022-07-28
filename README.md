# GhibliFE 
Front end do app Ghibli Films, site que mostra uma lista de filmes do studio Ghibli. :movie_camera:
![Screenshot from 2022-07-28 16-31-56](https://user-images.githubusercontent.com/63478613/181622132-ae9df505-8ff0-4c96-9d44-a3dc340f45ec.png)

#### Stack
Front end: React, Typescript, Styled-components
Back end: NodeJS, Typescript, MongoDB, Jest

### Rodando localmente
- Clone o repositório
- `npm install`
- `npm run start`

Ao rodar localmente, o app espera que você também esteja rodando a API localmente na porta 8080.  
Para rodar a API localmente:
- Clone este repositório: https://github.com/DavBio/GhibliBE
- `npm install`
- `npm run start` ou `npm run dev`

ou mude o link do ambiente de desenvolvimento em `GhibliFE/src/constants/apiUrl.ts`
para fazer requisições para a API em produção: `https://ghibli-be.herokuapp.com/`

### Deploy :rocket:
API: https://ghibli-be.herokuapp.com/
Site: https://ghibli-fe.vercel.app/ 
 
### Mais informações
Mais informações sobre a API, banco de dados e testes no repositório back end: https://github.com/DavBio/GhibliBE
