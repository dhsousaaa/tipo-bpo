const axios = require('./routers')

async function listarCobrancas(){
    cobrancas = await axios.listarCobrancas();
    console.log(cobrancas)
}

async function cadastrarCobrancas(valor, dataVencimento){
    return axios.cadastrarCobrancas(valor, dataVencimento).then(function(cobrancas){
        console.log(cobrancas)
    }).catch(function(err){
        console.log(err)
    });
}

module.exports = {
    listarCobrancas : listarCobrancas,
    cadastrarCobrancas: cadastrarCobrancas
}