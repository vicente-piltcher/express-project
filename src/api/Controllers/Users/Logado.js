const jsonwebtoken = require('jsonwebtoken');

async function Logado(req, res, next){
    //CATCH COOKIES
    Auth = req.cookie.Token || null;

    //VERIFY IF EXIST
    if(typeof(Auth) == 'undefined' || Auth == '' || Auth == null) {
        return res.send({erro: {login: 'Não autorizado'}});
    } else {
        //TRY READ TOKEN
        try {
            //IF TRUE, GARANT ACCESS
            Token = await jsonwebtoken.verify(Auth, 'PassToProtectTheToken');
            next();
        } catch(err) {
            //IF FALSE, BLOCK ACCESS
            return res.send({erro: {login: 'Não Autorizado.'}});
        }
    }
}

module.exports = Logado;