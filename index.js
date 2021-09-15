const express = require('express');
const app = express();
const porta = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render("index.ejs");
})

app.get('/lista', (req, res) => {
  res.render("lista/notícias.ejs");
})

app.get('/noticia01', (req, res) => {
  res.render("noticia/news01.ejs");
})

app.get('/noticia02', (req, res) => {
  res.render("noticia/news02.ejs");
})

app.get('/noticia03', (req, res) => {
  res.render("noticia/news03.ejs");
})

app.listen(porta, () => {
  console.log("O servidor está funcionando")
})