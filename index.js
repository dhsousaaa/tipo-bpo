const express = require('express')
const app = express()
const cobranca = require('./cobrancas')



app.post('/cobrancas/cadastrar', (req, res) => { 
    cobranca.cadastrarCobrancas(req.query.valor, req.query.dataVencimento)
    return res
})

app.listen(9000)