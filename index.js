const express = require('express')
const app = express()


app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (request, response) => {
    // console.log(new Date())
    // response.send('Ola Fullstack')
    response.render('home', {
        date: new Date()   
    })
})

app.get('/vaga', (request, response) => {
    response.render('vaga')   
})

app.get('/portifolio', (request, response) => {
    response.render('portifolio')   
})

app.listen(3000, (err) => {
    if(err){
        console.log('Nao foi possivel iniciar nessa porte')
    }else{
        console.log('Servidor do Jobify rodando.')
    }
})