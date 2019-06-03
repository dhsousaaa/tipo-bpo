const express = require('express')
const app = express()
const cobranca = require('./cobrancas')



app.get('/cobrancas/cadastrar', (req, res) => cobranca.cadastrarCobrancas(req.query.valor, req.query.dataVencimento))

app.listen(9001)