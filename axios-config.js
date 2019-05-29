// Carregar variáveis de ambiente
require('dotenv').config()

const axios = require('axios');
const http = require('http');
const https = require('https');

module.exports = axios.create({
  
  // url base
    baseURL: "https://" + process.env.LICENCA + ".superlogica.net/condor/atual/",

  //60 segundos de timeout
  timeout: 60000,

  // keepAlive agrupa e reutiliza conexões TCP, portanto, é mais rápido
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
  
  // seguir até 10 redirecionamentos HTTP 3xx
  maxRedirects: 10,
  
  // limite o tamanho máximo do conteúdo que aceitaremos para 50MBs
  maxContentLength: 50 * 1000 * 1000
});