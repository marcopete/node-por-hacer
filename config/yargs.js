// const opcionesCrear = {
//     descripcion: {
//         alias: 'd',
//         demand: true,
//         desc: 'Descripción de la tarea por hacer'
//     }
// }

// const opcionesActualizar = {
//     descripcion: {
//         alias: 'd',
//         demand: true,
//         desc: 'Descripción de la tarea por hacer'
//     },
//     completado: {
//         alias: 'c',
//         default: true,
//         desc: 'Marca como completadoo pendiente la tarea'
//     }
// }

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea un nuevo elemento para completar', {
        descripcion
    })
    .command('actualizar', 'Modifica el estado de un elemento', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento existente en el archivo', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}

// comando crear 'Crear un elemento por hacer'
// --descripcion -d

// comando actualizar 'Actualiza el estado completado de una tarea'
// --descripcion -d
// --completado -c por defecto true

// --help