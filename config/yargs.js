const opciones = {
  descripcion: {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
  },
  completado: {
    default: true,
    alias: 'c',
    desc: 'Marca como completada la tarea'
  },
  borrado: {
    default: false,
    alias: 'b',
    desc: 'Elimina tarea'
  }
};



const argv = require('yargs')
            .command('crear', 'Crea una tarea por hacer', opciones )
            .command('actualizar', 'Actualiza el estado de una tarea', opciones)
            .command('borrar', 'Borra la tarea seleccionada', opciones)
            .help()
            .argv; 

module.exports = {
    argv: argv 
}
