const fs = require('fs')


module.exports = {
    bd : './data/movies.json',

    titulo1: "                             Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.",
    titulo2: "➢ Total de películas en cartelera​:",
    titulo3: "➢ Listado de peliculas:",
    titulo4: "​➢ Recordá que podés visitar las secciones:",
    titulo5: "▸ En Cartelera",
    titulo6: "▸ Más Votadas",
    titulo7: "▸ Sucursales",
    titulo8: "▸ Contacto",
    titulo9: "▸ Preguntas Frecuentes",

    leerJSON : function() {
        
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'));
        
    },
    
    listarPelis: function(){
        let movies=this.leerJSON()
        let ordenado = []
        
        movies.movies.forEach(function(movie){
			    ordenado.push(movie.title)
              })
        
        return ordenado.sort()
    } 
			
		     
}