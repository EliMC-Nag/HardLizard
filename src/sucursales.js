const fs = require('fs')

module.exports = {
    bd : './data/theaters.json',
    titulo1:"➢ Nuestras Salas.",
    titulo2:"➢ Total de salas​:",
    titulo3:"➢ Listados de salas:",
    dir:"• Direccion:",
    name:"★ Nombre:",
    descri:"• Descripción:",
    leerJSON : function() {
        
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'));
        
    } 
}