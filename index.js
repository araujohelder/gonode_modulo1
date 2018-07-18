/*
ARRAY

const array = [1,2,3,4];
const newArray = array.map(item => item * 2);
console.log(newArray);
*/

/*
CRIANDO SERVIDOR COM NODE.JS
const http = require('http');
http.createServer((req, res) => {
    res.write('Hello Word');
    res.end();
}).listen(3000);
*/

/* EXPRESS
const express = require('express');
const app = express();

app.get('/', (req,res)=> {
    res.send('Hello World com express');
});

app.listen(3000);
*/

const express  = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('view engine', 'njk');
app.set('views', path.join(__dirname,'views'));

app.get('/', (req,res) => {
  res.render('index', { nomes: ['Florinda', 'chaves','Seu Madruga']});
});

app.listen(3000);