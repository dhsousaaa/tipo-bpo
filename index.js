const express = require('express')
const app = express()
const cobranca = require('./cobrancas')

cobranca.cadastrarCobrancas()

app.listen(9000)