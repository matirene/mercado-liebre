const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 3020, () => {
    console.log('Servidor levantado en el puerto 3020');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'))
})

app.post('/register', (req, res) => {
    console.log('Te registraste correctamente');
    res.redirect('/');
})

app.post('/login', (req, res) => {
    console.log('Ingresaste correctamente');
    res.redirect('/');
})