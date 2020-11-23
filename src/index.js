let homePage = require('./homePage')
let enCartelera = require('./enCartelera')
let masVotadas = require('./masVotadas')
let sucursales = require('./sucursales')
let contacto = require('./contacto')
let preguntasFrecuentes = require('./preguntasFrecuentes')


let movies = homePage.leerJSON()
let cartelera = enCartelera.leerJSON()
let mas = masVotadas.leerJSON()
let sucursal = sucursales.leerJSON()
let preguntas = preguntasFrecuentes.leerJSON()

module.exports = {
    homePage : function(req,res){
        
        res.write(`\n\n`)
            res.write(homePage.titulo1+`\n\n`)            
			res.write(`\n\n`)
			res.write(homePage.titulo2+" "+`${movies.total_movies} \n\n`)
            
            res.write(`\n`+homePage.titulo3+`\n\n`)

            let titilosOrdenados = homePage.listarPelis() 

            titilosOrdenados.forEach(movie => {
                res.write(`\n★ ${movie}\n\n`)
            })
            
			res.write(`\n\n`)
			res.write(homePage.titulo4+`\n\n`+"   "+homePage.titulo5+`\n\n`+"   "+homePage.titulo6+`\n\n`+"   "+homePage.titulo7+`\n\n`+"   "+homePage.titulo8+`\n\n`+"   "+homePage.titulo9)
        
        res.end()        

    },
    enCartelera : function(req,res){

        res.write(enCartelera.titulo1+`\n\n`)
		res.write(enCartelera.titulo2+`${movies.movies.length} \n\n`) 
        res.write(enCartelera.titulo3+`\n\n`)

        movies.movies.forEach(movie => {
            res.write(`\n★ Titulo: ${movie.title}\n
          \n▸ Reseña:\n${movie.overview}\n\n`)
        });  		
		res.end()

    },

    masVotadas : function(req,res){
        
		res.write(`\n\n`)
		res.write(masVotadas.titulo1+`\n\n`)
		res.write(masVotadas.titulo2+" "+masVotadas.cantidad()+`\n`)		
		res.write(masVotadas.titulo3+" "+masVotadas.promedio().toFixed(2)+`\n`)
		res.write(masVotadas.titulo4+`\n`)
		masVotadas.maSvotadas().forEach(function(movie){
				res.write(`\n★ ${movie.title.toUpperCase()}\n\n`)
				res.write(masVotadas.rating+" "+`${movie.vote_average}\n`)
				res.write(masVotadas.reseña+" "+`${movie.overview}\n`)
			});

        res.end()

    },

    sucursales : function(req,res){

        res.write(sucursales.titulo1+`\n\n`)
		res.write(sucursales.titulo2+" "+`${sucursal.theaters.length} \n\n\n`) 
        res.write(sucursales.titulo3+`\n`)
        
        sucursal.theaters.forEach(suc => {
            res.write(`\n`+sucursales.name+" "+`${suc.name}
		     \n`+sucursales.dir+" "+`\n${suc.address}
			 \n`+sucursales.descri+`\n${suc.description}\n\n`)
            });
		
        res.end()

    },

    contacto : function(req,res){
        res.write(contacto.titulo1+`\n\n\n`)
        res.write(contacto.titulo2+`​\n\n\n`)
        res.write(contacto.titulo3+`​\n`)

        res.end()

    },

    preguntasFrecuentes : function(req,res){
        res.write(preguntasFrecuentes.titulo1+`\n\n`)
		res.write(preguntasFrecuentes.titulo2+" "+`${preguntas.faqs.length} \n\n`)
        res.write(preguntasFrecuentes.titulo3+`\n\n`)            
    
        preguntas.faqs.forEach(question => {
            res.write(`\n ${question.faq_title}
          \n• ${question.faq_answer}\n\n`)
            });
    
            
        res.end()

    }

}