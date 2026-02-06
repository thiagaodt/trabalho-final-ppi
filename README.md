# Bate-papo WEB - Trabalho Final PPI
Sistema de sala de bate-papo desenvolvido como avaliação final para a disciplina de Programação para Internet do curso de ADS (2º semestre de 2024) na FIPP/Unoeste. O projeto consiste em uma aplicação web funcional com gerenciamento de sessões, persistência temporária de dados e validação no lado do servidor.

## 🚀 Status do Projeto
O projeto foi entregue com 100% de aproveitamento nos critérios avaliativos:

✅ Disponibilidade na Vercel.

✅ Registro de último acesso via cookies.

✅ Cadastro e listagem de usuários.

✅ Validação de dados no servidor.

✅ Bate-papo funcional com seleção de usuários cadastrados.

✅ Bloqueio de mensagens vazias ou anônimas.

## 🛠️ Tecnologias Utilizadas
A aplicação foi construída utilizando o ecossistema Node.js:

*Node.js & Express:* Framework base para o servidor e roteamento.

*Express-session:* Gerenciamento de sessões de usuário (login ativo por 30 minutos).

*Cookie-parser:* Manipulação de cookies para armazenar a data/hora do último acesso.

*EJS / View Engine:* Renderização dinâmica de conteúdo no lado do servidor.

*Vercel:* Plataforma de hospedagem e deploy contínuo.

## 📋 Funcionalidades

*Autenticação:* Sistema de login e logout para controle de acesso às funcionalidades de cadastro e chat.

*Cadastro de Usuários:* Formulário com validação no servidor para coletar Nome, nickname, email e senha.

*Sala de Bate-papo:* Interface para envio de mensagens onde o remetente é selecionado a partir da lista de usuários já cadastrados.

*Histórico de Mensagens:* Exibição cronológica das interações com inserção automática de data e hora pelo servidor.

*Rastreamento de Acesso:* Exibição da data e hora do último acesso do usuário no menu principal através de cookies.
