const routes = require('./routers');
const express = require('express')
const app = express()
require('dotenv').config()

async function listaCobrancas() {
    let teste = await routes.listaCobranca();
    console.log(teste);
}

listaCobrancas();


app.listen(9000)