const express = require('express');
const path = require('path');
const pug = require('pug');

const app = express();
//express 에 포함되어 있는 router
const indexRouter = require('./routes');
const userRouter = require('./routes/users');

app.locals.pretty = true;
app.set('port', 8080);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'pug'));


// app.use('/', express.static(path.join(__dirname, 'public')));
// app.use('/', indexRouter);
// app.use('/users', userRouter);
app.get('/', (req, res) => {
    // res.locals.title = '퍼그연습';
    res.render('index', { title: '퍼그연습', content: '퍼그 연습 페이지입니다.'});
});

app.listen(app.get('port'), () => {
    console.log(`${app.get('port')}, 번 포트에서 대기 중`);
});