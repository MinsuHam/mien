const express = require('express');
const router = express.Router();

//GET 라우터
router.get('/', (req, res) => {
    res.send('Hello User!!!');
});

module.exports = router;

router.get('/abc', (req, res) => {
    res.send('GET /abc');
});