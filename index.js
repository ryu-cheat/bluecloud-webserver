const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'web')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'index.html'));
});

// 서버 시작
app.listen(80);