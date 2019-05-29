// Carregar variáveis de ambiente
require('dotenv').config()

// Importar axios config
const axios = require('./axios-config.js');

// Url request
const urlListarUmaCobranca = "cobranca/index?idCondominio=2&id=3913&comDadosDasApropriacoes=1&comDadosDasContasEReceitas=1&getEncargosRaw=1"
const urlListarCobranca = "cobranca/index?status=validos&apenasColunasPrincipais=1&exibirPgtoComDiferenca=1&comContatosDaUnidade=1&filtrarpor=liquidacao&dtInicio=01/01/2018&dtFim=06/30/2018&idCondominio=2&itensPorPagina=50&pagina=1&comDadosDasUnidades=1&exibirDadosDoContato=1";
const urlCadastrarCobranca = 
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

async function cadastrarCobrancas(){

    return axios({
        method: 'POST',
        data: {
            ID_CONDOMINIO_COND: 2,
            ID_UNIDADE_UNI: 44,
            DT_VENCIMENTO_RECB: '30/05/2019',
            RECEITA_APROPRIACAO:
            [
                'ST_CONTA_CONT' => '1.1',
                'ST_DESCRICAO_CONT' => 'Teste tipo-bpo',
                'VL_VALOR_REC' => 10.00
            ],
            VALOR_TOTAL: 10.00,
            NUMERO_PERCELAS: 0,
            ALTERAR_ENCARGOS: 0,
            NM_TXJUROS_COND: 2,
            NM_TXMULTA_COND: 3,
            NM_TXDESCONTO_COND: 0,
            FL_TIPOCOB_COT: 0,
            ID_CONTABANCO_CB: 38,
            ID_FORMAPAGAMENTO_RECB: 0,
            DT_COMPETENCIA: '30/05/2019'
        },
        headers: {
            'access_token': process.env.ACESS_TOKEN_APP,
            'app_token': process.env.TOKEN_APP,
            'Content-Type': 'application/json'
        },
        json: true
    });
}

module.exports = {
    listarCobrancas : listarCobrancas,
    cadastrarCobrancas : cadastrarCobrancas
}


