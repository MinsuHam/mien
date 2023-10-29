const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const mysql = require('mysql2');
const port = 8080

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'myboard',
    password: '!minsu5809',
    port: 3306,
});

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

//삭제해도 get에서 
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log('Connected');
//     const sql = "insert into new_table(id, writer, title, content, wdate) values(6, '김수', '김포시 걸동', '아무거나3', now())";
//     connection.query(sql, function(err, result, fields) {
//         if(err) throw err;
//         console.log(result);
//     });
// });

app.get('/',(req, res) => {
    const sql = "select * from new_table";
    connection.query(sql, function(err, result, fields) {
        if(err) throw err;
        res.render('index', {new_table : result});
    });
});

app.post('/',(req, res) => {
    const sql = "insert into new_table set ?"
    connection.query(sql, req.body, function(err, result, fields) {
        if(err) throw err;
        console.log(result);
        res.send('등록이 완료 되었습니다.');
    });
});


//delete
app.get('/delete/:id', function(req, res) {
    const sql = "delete from new_table where id = ?";
    connection.query(sql, [req.params.id], function(err, result, fields) {
        if(err) throw err;
        console.log(result);
        res.redirect('/');
    });
});

//create
app.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, './Views/form.html'));

    //추가
    app.post('/',(req, res) => {
        res.send(req.body);
    });
});


//update
app.post('/update/:id', (req, res) => {
    
    connection.query('update new_table set writer=?, title=?, content=?, wdata=? where id=?', [
        req.body.writer, req.body.title, req.body.content, req.params.id

    ], function() {
        
        res.redirect('/');
    });
});

//edit
app.get('/edit/:id', (req, res) => {
    const sql = "select * from new_table where id = ?";
    connection.query(sql, [req.params.id], function(err, result, fields) {
        if(err) throw err;
        res.render('edit', {new_table : result});
    });
});
app.post('/edit/:id', function(req, res) {

});

//insert
app.get('/insert/:id', function(req, res) {

});
app.post('/insert/:id', function(req, res) {

});

app.listen(port, () => {
    console.log(`Example App listening on port ${port}!`);
});
