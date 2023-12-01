const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const port = 5000;

const db = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '',
 database: 'socka'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado a la base de Datos')
});
global.db = db; // 'global' Es una variable genérica de Node en donde están todos los datos

app.set('port', process.env.por || port); //Busca el puerto
app.set('views', __dirname + '/views'); // En la carpeta __dirname + views es donde encuentra la ruta
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.listen(port,() => {
    console.log(`El servidor cargó en el puerto: ${port}`);
});
