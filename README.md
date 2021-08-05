# FargoCards

An educational quiz game inspired by TinyCards, developed by Duolingo, for learning with cards on a variety of topics. It is based on a system that assumes interval repetition of new words and concepts until the student memorizes the material.

# Play

- [On Yandex.Cloud](https://fargo-cards-5.ya-praktikum.tech/)
- [On Heroku](https://fargocards.herokuapp.com/)

# Implementation
Main application stack - Typescript, React, Redux, the game itself is rendered on canvas. 

The webapp implements:
- Server-side rendering (SSR)
- Service worker
- Data exchange with the database - PostgreSQL with Sequelize

The application and database are deployed in Docker. The tests are written in Jest.

# Run

```
npm run start:container
```

Docker runs 3 containers - game, database, pgadmin. On Windows, make sure virtualization is enabled.

# Install dev https
- you need to install mkcert and run mkcert -install
info here https://web.dev/how-to-use-local-https/
- go to the server / devCert tab and create a certificate
`mkcert -key-file key.pem -cert-file cert.pem ya-praktikum.tech *.ya-praktikum.tech`

# OAuth
Check at the address https://localhost:5000

# Basic (and server-side) authentication
https://local.ya-praktikum.tech:5000/
