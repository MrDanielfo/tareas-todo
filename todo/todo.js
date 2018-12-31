const fs = require('fs');

let listadoPorHacer = []; 

const crear = (descripcion) => {

    cargarDB(); 

    let porHacer = {
        descripcion: descripcion,
        completado: false,
    };

    listadoPorHacer.push(porHacer); 
    guardarDB(); 

    return porHacer; 

}


const guardarDB = () => {

        let data = JSON.stringify(listadoPorHacer); 
        
        fs.writeFile(`db/data.json`, data, err => {
          if (err) {
            throw new Error('No se pudo grabar', err);
          } else {
            console.log('Base de datos actualizada'); 
          }
        }); 

}

const cargarDB = () => {

    // Para evitar que cuando el archivo JSON esté vacíp no tire un error

    try {
        // Esto es lo necesario para mantener nuestros datos en el archivo JSON
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = []; 
    }
}


const getListado = () => {

    /* try {
      tareas = require('../db/data.json');

      tareas.forEach(tarea => {
          console.log(tarea.descripcion);
          console.log(tarea.completado); 
      });
      
    } catch (error) {
      tareas = [];
    }

    return tareas;*/ 

    cargarDB();
    return listadoPorHacer; 
}

const actualizarTarea = (descripcion, completado = true) => {

    cargarDB();

    // Validar si la descripción coincide con la que estamos aportando

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion
      /* Si regresa -1 significa que no lo encontró y que la descripción no coincide, porque toma como posición los arreglos que empiezan en 0 */
    );
    if(index >= 0) {
        listadoPorHacer[index].completado = completado; 
        console.log("Tarea eliminada"); 
        guardarDB(); 
        return true; 
    } else {
        return false; 
    }
}

const borrarTarea = (descripcion, borrar = false) => {
    cargarDB();

    /* también se puede utilizar la función .filter(); 
        Ver clase 47 del curso de Node de Fernando Herrera
    */ 

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);  

    if(index >= 0 && borrar) {
        listadoPorHacer.splice(index, index); 
        guardarDB(); 
        return true; 
    } else {
        return false; 
    }
}

/* Pendiente nueva función para que sólo filtre tareas completadas */ 

module.exports = {
    crear: crear,
    getListado: getListado,
    actualizarTarea: actualizarTarea,
    borrarTarea: borrarTarea
}

