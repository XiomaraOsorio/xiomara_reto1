'use strict'

// VARIABLES 
var titulo = "Xiomara y su familia"

var persona = {
	nombres: "Xiomara Melissa",
	apellidos: "Osorio Castillo",
	edad: "24",
}

var familia = [
	{
		nombres: "David Emanuel",
		apellidos: "Osorio Castillo",
		edad: "19",
	},
	{
		nombres: "Juan Pablo",
		apellidos: "Osorio Castillo",
		edad: "17",
	
	},
	{
		nombres: "Gladys Zoraida",
		apellidos: "Castillo Gutierrez",
		edad: "50",
	
	},

]

// REQUERIMIENTO DE MODULOS

var express =  require('express');
var swig = require('swig');

//CONFIGURACIONES

// Creación del servidor web con express
var server = express();

// Integracion del motor de templates swig
server.engine('html',swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/views');
swig.setDefaults({cache: false});

// Seteo de dirección de carpeta de archivos estaticos
server.use(express.static(__dirname + '/public'));

// PETICIONES

// Cuando exista una petición en el servidor  
server.get('/',function(req,res){
	res.render('familia.html', {titulo:titulo,persona:persona,familia:familia});
});

// INICIAR SERVIDOR

// Se corre el servidor en el puerto 8000
server.listen(8000, function() {
	console.log('El servidor esta escuchando en el puerto '+ 8000);
});