const axios =  require('axios')


// Rota teste
axios.get('/teste')
.then(function (response)
{
    response.write('Hello World!!!')
    console.log(response);
})
.catch(function (error)
{
    console.log(error);
});