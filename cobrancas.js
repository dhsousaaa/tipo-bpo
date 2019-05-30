const axios = require('./routers')

async function listarCobrancas(){
    cobrancas = await axios.listarCobrancas();
    console.log(cobrancas)
}

async function cadastrarCobrancas(){
    return axios.cadastrarCobrancas().then(function(cobrancas){
        console.log(cobrancas)
    }).catch(function(err){
        console.log(err)
    });
    
}

module.exports = {
    listarCobrancas : listarCobrancas,
    cadastrarCobrancas: cadastrarCobrancas
}