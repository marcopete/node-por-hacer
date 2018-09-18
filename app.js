const argv = require('./config/yargs').argv;

const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case 'crear':

        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('==========Por Hacer=========='.green);
            console.log(tarea.descripcion);
            console.log('Estado :', tarea.completado);
            console.log('============================='.green);
        }

        break;

    case 'listarFiltro':

        let listadoFiltro = porHacer.getListadoFiltro(argv.completado);
        console.log('object :', listadoFiltro.length);
        for (let tareaFiltro of listadoFiltro) {
            console.log('==========Por Hacer (BETA)=========='.green);
            console.log(tareaFiltro.descripcion);
            console.log('Estado :', tareaFiltro.completado);
            console.log('============================='.green);
        }

        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('Tarea actualizada'.green, actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log('Tarea borrada'.green, borrado);
        break;

    default:
        console.log('Comando no es reconocido');

}