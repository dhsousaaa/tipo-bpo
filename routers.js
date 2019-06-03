// Carregar variáveis de ambiente
require('dotenv').config();
const qs = require('querystring');

// Importar axios config
const axios = require('./axios-config.js');

// Url request
const urlListarUmaCobranca = "cobranca/index?idCondominio=2&id=3913&comDadosDasApropriacoes=1&comDadosDasContasEReceitas=1&getEncargosRaw=1"
const urlListarCobranca = "cobranca/index?status=validos&apenasColunasPrincipais=1&exibirPgtoComDiferenca=1&comContatosDaUnidade=1&filtrarpor=liquidacao&dtInicio=01/01/2018&dtFim=06/30/2018&idCondominio=2&itensPorPagina=50&pagina=1&comDadosDasUnidades=1&exibirDadosDoContato=1";
const urlCadastrarCobranca = "cobranca/"

async function listarCobrancas(){
    return axios({
        method: 'GET',
        url: urlListarCobranca,
        headers: {
            'access_token': process.env.ACESS_TOKEN_APP,
            'app_token': process.env.TOKEN_APP,
            'Content-Type': 'application/json'
        },
        json: true
    });
}

async function cadastrarCobrancas(valor, dataVencimento){

    var data = {}

    data.ID_CONDOMINIO_COND = 2;
    data.ID_UNIDADE_UNI = 44;
    data.DT_VENCIMENTO_RECB = dataVencimento;
    data["RECEITA_APROPRIACAO[0][ST_CONTA_CONT]"] = 1.4;
    data["RECEITA_APROPRIACAO[0][VL_VALOR_REC]"] = valor;
    data.VALOR_TOTAL = 10;
    data.NUMERO_PERCELAS = 0;
    data.ALTERAR_ENCARGOS = 0;
    data.NM_TXJUROS_COND = 2;
    data.NM_TXMULTA_COND = 3;
    data.NM_TXDESCONTO_COND = 0;
    data.FL_TIPOCOB_COT = 0;
    data.ID_CONTABANCO_CB = 38;
    data.ID_FORMAPAGAMENTO_RECB = 0;
    data.DT_COMPETENCIA = '05/30/2019';

    return axios({
        method: 'POST',
        url: urlCadastrarCobranca,
        data: qs.stringify(data),
        headers: {
            'access_token': process.env.ACESS_TOKEN_APP,
            'app_token': process.env.TOKEN_APP,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
}

module.exports = {
    listarCobrancas : listarCobrancas,
    cadastrarCobrancas : cadastrarCobrancas
}


