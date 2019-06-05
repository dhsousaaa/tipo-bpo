const express = require('express')
const app = express()
const cobranca = require('./cobrancas')
const cors =  require('cors')

app.use(cors())

app.post('/cobrancas/cadastrar', async (req, res) => { 
    const result = await cobranca.cadastrarCobrancas(req.query.valor, req.query.dataVencimento)
    console.log(result)
    return res.send(JSON.stringify(result.data))
})

app.listen(9000)