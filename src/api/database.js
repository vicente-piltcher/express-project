const mongoose = require('mongoose');

/*
mongoose.connect('mongodb://localhost:27017/pmv-ads-2023-1-e1-proj-web-t16-e1-proj-web-t16-time4-portalnoticias')
    .then(() => {
        console.log('MongoDB online.');
    }).catch(erro => {
        console.log(erro);
    });
    


db = mongoose.connection;

module.export = db;*/

module.exports = function(uri) {
    mongoose.connect(uri);

    mongoose.connection.on('connected', function() {
        console.log('Mongoose! Conectado em ' + uri);
    })

    mongoose.connection.on('disconnected', function(){
        console.log('Mongoose! Desconectado em ' + uri);
    })

    mongoose.connection.on('error', function(erro){
        console.log('Mongoose! erro na conexão em ' + erro);
    })

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log('Mongoose! Desconectado pelo termino da ligação!')
            process.exit(0);
        })
    })
}