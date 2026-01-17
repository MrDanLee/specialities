const express = require('express');
const app = express();
const getContent = require('./template.js');
const usersData = require('./data.js');
const PORT = 3000;

const specialtyFilter = (specialty) => 
  usersData.filter(user => user.specialty === specialty)

// RUTAS:
app.get('/', (req, res) => {
  res.send('Bienvenido a mi página')
})

app.get('/developers', (req, res) => {
  const specialty = "developers"
  const users = specialtyFilter(specialty)
  res.send(getContent(specialty, users))
})

app.get('/marketing', (req, res) => {
  const specialty = "marketing"
  const users = specialtyFilter(specialty)
  res.send(getContent(specialty, users))
})

app.get('/ventas', (req, res) => {
  const specialty = "ventas"
  const users = specialtyFilter(specialty)
  res.send(getContent(specialty, users))
})

app.get('/qas', (req, res) => {
  const specialty = "QAs"
  const users = specialtyFilter(specialty)
  res.send(getContent(specialty, users))
})

// 404 página no encontrada
app.use((req, res) => {
  res
  .status(404)
  .send('Página no encontrada - 404')
})

app.listen(PORT, () => {
  console.log(`El servidor EXPRESS está escuchando en la URL http://localhost:${PORT}`)
})





