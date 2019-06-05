const axios = require('./routers')

async function listarCobrancas(){
    cobrancas = await axios.listarCobrancas();
    console.log(cobrancas)
}

async function cadastrarCobrancas(valor, dataVencimento){
    const result = await axios.cadastrarCobrancas(valor, dataVencimento);
    return result
}

module.exports = {
    listarCobrancas : listarCobrancas,
    cadastrarCobrancas: cadastrarCobrancas
}