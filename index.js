const express = require('express');
const bodyParser = require('body-parser');


const {listBankController,createBankController,updateBankController,deleteBankController} = require('./controllers')

const server = express();


server.use(bodyParser.json());







server.get('/bank', listBankController);

server.post('/bank', createBankController);

server.put('/bank', updateBankController );

server.delete('/bank', deleteBankController )

server.listen(3500, ()=> console.log('server is ready'))