async function Deslogar(res) {
    //CLEAR COOKIE CACHE
    res.clearCookie('Token');
    res.redirect('/');
}

module.exports = Deslogar;