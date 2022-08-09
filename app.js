const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3020, () => {
    console.log('Servidor levantado en el puerto 3020');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'))
})