require('dotenv').config({ quiet: true });

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const isProduction = process.env.NODE_ENV === 'production';
const sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret && isProduction) {
  console.error(
    '[ERRO] SESSION_SECRET não está definida. Configure a variável de ambiente antes de subir em produção.'
  );
  process.exit(1);
}

if (!sessionSecret) {
  console.warn(
    '[AVISO] SESSION_SECRET não está definida. Usando um segredo de desenvolvimento; não use isso em produção.'
  );
}

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Configuração da sessão
app.use(
  session({
    secret: sessionSecret || 'segredo-apenas-para-desenvolvimento',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 60 * 1000 }, // Sessão válida por 30 minutos
  })
);

// Rotas
const mainRoutes = require('./routes/main');
app.use('/', mainRoutes);

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
