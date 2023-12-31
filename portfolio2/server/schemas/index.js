const mongoose = require('mongoose');

require('dotenv').config();

const mongodbid= process.env.MONGODB_ID;
const mongodbpass = process.env.MONGODB_PASS;
const mongodbhost = process.env.MNOGODB_HOST;
const mongodbport = process.env.MONGODB_PORT;
const mongodbDB = process.env.MONGODB_DB;

const connect = () => {  
    if(process.env.NODE_ENV !== 'production') {
        mongoose.set('debug', true);
    }
    //mongodb://아이디:비민번호@주소:포트번호/admin
    mongoose.connect(
      `mongodb://${mongodbid}:${mongodbpass}@${mongodbhost}:${mongodbport}/admin`, {
         dbName : mongodbDB,
         //useNewUrlParser: true
      }
    ).then(()=>{
        console.log('몽고디비 연결 성공');
    }).catch((err)=>{
        console.error('몽고디비 연결 에러', err);
    });   
};

mongoose.connection.on('error', (error)=>{
   console.error('db연결에 실패했습니다.', error);
});

mongoose.connection.on('disconnected', ()=>{
    console.error('db연결이 끊겼습니다. 연결을 재 시도합니다.');
    connect();
});

module.exports = connect;