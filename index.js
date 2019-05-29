const express = require('express')
const app = express()
const cobranca = require('./cobranca')

cobranca.cadastrarCobrancas()

app.listen(9000)