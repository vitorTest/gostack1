const express = require("express");

const server = express();

server.get('/teste', (req, res) => {
    return res.json({message: 'hello new friend'});
});

server.listen(3000);