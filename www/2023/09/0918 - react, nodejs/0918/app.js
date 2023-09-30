const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const fs = require('fs');
const { error } = require('console');



const connection = mysql.createConnection({
    user: 'root',
    password: '!minsu5809',
    database: 'myboard',
    host: 'localhost',
    port: 3306,
});

const app = express();
app.set('port', 8080);  
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true,
});

app.use(bodyParser.urlencoded({extended: false}));
//connection.connect();

app.get('/', (req, res) => {
    const querys = 'select * from new_table';
    connection.query(querys, (error, rows) => {
        if(error) throw error;
        console.log(rows);
        res.render('index', {rows});
    });     
});


// app.get('/delete:id', (req, res) => {'sql delete 구문'});
// app.get('/insert', (req, res) => {});
// app.post('/insert', (req, res) => {'sql insert 구문'});
// app.get('/edit/:id', (req, res) => {});
// app.get('/edit/', (req, res) => {'sql update 구문'});
//에러처리
app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 페이지를 찾을 수 없습니다.`);
    error.status = 404;
    next(error);
});
 app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = err;
    res.status(err.status || 500);
    res.render(500);
 });


//connection.end();
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중...');
});
