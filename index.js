const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const { fork } = require('child_process');

let contador = 0

// Caminho para o arquivo do worker
const workerPath = './tokenWorker.js';

// Cria um novo worker
const tokenWorker = fork(workerPath);

// Lida com a saída do worker (opcional)
tokenWorker.on('message', () => {
    contador++;
});

app.get('/', (req, res) => {
    res.json({contador});
  });


app.listen(8080, console.log("Servidor Iniciado!"))