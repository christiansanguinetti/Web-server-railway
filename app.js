const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 8080;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir contenido estático desde la carpeta "public"
app.use(express.static('public'));


// Ruta para renderizar la vista "home" usando el motor de vistas "hbs"
app.get('/', (req, res) => {
    res.render('home', { titulo: 'Curso de NODE ', nombre: 'Christian' });
});
app.get('/', (req, res) => {
    res.render('generic', { titulo: 'Curso de NODE ', nombre: 'Christian' });
});
app.get('/', (req, res) => {
    res.render('elements', { titulo: 'Curso de NODE ', nombre: 'Christian' });
});
// Ruta para servir el archivo "generic.html"
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});

// Ruta para servir el archivo "elements.html"
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});

// Ruta para cualquier otra solicitud (404), redirige a "404.html"
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
