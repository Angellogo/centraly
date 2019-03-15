const express = require ('express'); // esta llamando a Express en una variable
const app = express(); // Esta ejecutando express

const port = 8080; //Definir en una constante el puerto
const chalk = require('chalk'); // sirve para pintar de colores la consola -- https://www.npmjs.com/package/chalk

//Esuchar peticiones en un puerto
app.listen(port, () =>{
	console.log(`escuchando en el puerto ${port}`);
	console.log(chalk.red(`http://localhost:${port}`)); //aqui se imprime el color de la consola inicando a dondse será  
}); 

// Rutas
app.get('/', (req,res) => {
	res.send('Aquí estoy');
});
// app.post()
// app.put()
// app.delete()

