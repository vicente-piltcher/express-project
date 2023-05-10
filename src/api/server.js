const express = require('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const cookieParser = require('cookie-parser');

//CONTROLLERS
const Logar = require('./Controllers/Users/Logar');
const Logado = require('./Controllers/Users/Logado');
const Deslogar = require('./Controllers/Users/Deslogar');


//APP
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/Pages', express.static(__dirname+'/Pages'));

//DATABASE
const database = require('./database.js');


//PAGES
app.use(express.static('../api'));
app.use(express.static('../tech-news'));
app.use(express.static('../tech-news/images'));

app.get('/', (req, res) => res.sendFile('C:/projects/lucatrab/pmv-ads-2023-1-e1-proj-web-t16-e1-proj-web-t16-time4-portalnoticias/src/tech-news/index.html'));
app.get('/addnews', (req, res) => res.sendFile('C:/projects/lucatrab/pmv-ads-2023-1-e1-proj-web-t16-e1-proj-web-t16-time4-portalnoticias/src/tech-news/add_news.html'));
app.get('/login', (req, res) => res.sendFile('C:/projects/lucatrab/pmv-ads-2023-1-e1-proj-web-t16-e1-proj-web-t16-time4-portalnoticias/src/tech-news/login.html'));
app.get('/register', (req, res) => res.sendFile('C:/projects/lucatrab/pmv-ads-2023-1-e1-proj-web-t16-e1-proj-web-t16-time4-portalnoticias/src/tech-news/login.html'));


//ROUTES
app.post('Controllers/Users/Logar', async (req, res) => {
    res.send(await Logar(req.body));
})

app.get('/api/users/deslogar', async(req, res) => {
    res.send(await Deslogar());
})


//PORT
app.listen(3030, () => {
    console.log('Servidor Online');
    console.log('Port: 3030');
})