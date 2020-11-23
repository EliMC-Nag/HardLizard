const fs = require('fs')

module.exports = {
    bd : './data/movies.json',
    leerJSON : function() {
        
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'));
        
    },
    titulo1:"➢ ​En Cartelera",
    titulo2:"➢ Total de películas​: ",
    titulo3:"➢ Listados de películas​:" 
}