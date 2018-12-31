
const  argv = require('./config/yargs').argv; 
const colors = require('colors')


const  porHacer = require('./todo/todo'); 



let comando = argv._[0];

switch(comando) {

    case "crear":
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea); 
        break;

    case "listar":
        let listado = porHacer.getListado()
        for(let tarea of listado) {
            console.log('=====Por Hacer======'.red)
            console.log(tarea.descripcion);
            console.log('==Estado: =', tarea.completado);
            console.log('=====Por Hacer======'.yellow);
        }

        break;

    case "actualizar":
        let tareaActualizada = porHacer.actualizarTarea(argv.descripcion, argv.completado);
        console.log(tareaActualizada); 
        break; 

    case "borrar": 
        let tareaBorrada = porHacer.borrarTarea(argv.descripcion, argv.borrado); 
        console.log(tareaBorrada); 
        break; 
    
    default: 
        console.log('El comando no es reconocido');

}