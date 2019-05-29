// Carregar variáveis de ambiente
require('dotenv').config()

// Importar axios config
const axios = require('./axios-config.js');

// Url request
const urlListarUmaCobranca = "cobranca/index?idCondominio=2&id=3913&comDadosDasApropriacoes=1&comDadosDasContasEReceitas=1&getEncargosRaw=1"
const urlListarCobranca = "cobranca/index?status=validos&apenasColunasPrincipais=1&exibirPgtoComDiferenca=1&comContatosDaUnidade=1&filtrarpor=liquidacao&dtInicio=01/01/2018&dtFim=06/30/2018&idCondominio=2&itensPorPagina=50&pagina=1&comDadosDasUnidades=1&exibirDadosDoContato=1";


axios({
    method: 'GET',
    url: urlListarCobranca,
    headers: {
        'access_token': process.env.ACESS_TOKEN_APP,
        'app_token': process.env.TOKEN_APP,
        'Content-Type': 'application/json'
    },
    json: true
})
.then(function(response){
    console.log(response.data)
})
.catch(function(err){
    console.log(err)
})

