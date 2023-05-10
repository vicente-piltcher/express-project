const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');

const User = require('../../User');

async function Logar(body){
    //CATCH USER DATA
    const user = body.user;
    const pass = body.pass;

    //VERIFY DATA
    if (!user || !pass){
        return {erro: 'Dados insuficientes ou incorretos.'}
    }

    //FIND IN DB
    Find = await User.find({user, pass})
    .then(response => {
        return response;
    }).catch(erro => {
        return {erro: erro}
    });

    //VERIFY IF DATA HAS BEEN FOUND
    if(Find == '' || Find.erro) {
        return {erro: 'Usuário ou senha incorretos.'}
    }

    //IF FOUNDED, MAKE WEBTOKEN
    Token = await jsonwebtoken.sign({
        id: Find[0]._id,
        nome: Find[0].nome,
        user: Find[0].user,
    },  'PassToProtectTheToken');

    //SAVE TOKEN
    res.cookie('Token', Token);
    res.sendStatus(200);
}

module.exports = Logar;