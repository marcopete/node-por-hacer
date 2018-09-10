const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err)
            throw new Error('No se pudo grabar', err);
    });
}

const borrarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.deleteFile('db/data.json', data, (err) => {
        if (err)
            throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(

        tarea => tarea.descripcion === descripcion
        //metodo abreviado para reemplazar llaves {} y return
    );

    if (index >= 0) {

        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const getListadoFiltro = (completado = true) => {
    console.log('y el objeto eeeees :', completado);
    cargarDB();
    console.log('Listado previo :', listadoPorHacer);
    // let nuevoListadoFiltro = listadoPorHacer.filter(tarea =>
    //     tarea.completado === completado
    //     //metodo abreviado para reemplazar llaves {} y return
    // );

    let nuevoListadoFiltro = listadoPorHacer.filter(tareaFiltro =>
        tareaFiltro.completado = completado
    );

    console.log('Listado posterior :', nuevoListadoFiltro);

    return nuevoListadoFiltro;

}

const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea =>
        tarea.descripcion !== descripcion
        //metodo abreviado para reemplazar llaves {} y return
    );

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        console.log('cambio el arreglo :');
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}


module.exports = {
    crear,
    getListado,
    getListadoFiltro,
    actualizar,
    borrar
}

// const actualizar = (descripcion, completado = true) => {
//     console.log('posicion del arreglo 1:', index);
//     cargarDB();

//     let index = listadoPorHacer.findIndex(tarea => {

//         // tarea => tarea.descripcion === descripcion 
//         //metodo abreviado para reemplazar llaves {} y return
//         return tarea.descripcion === descripcion;
//     })

//     console.log('posicion del arreglo 2:', index);

//     if (index >= 0) {

//         listadoPorHacer[index].completado = completado;
//         guardarDB();
//         return true;
//     } else {
//         console.log('el index no tienr numero');
//         return false;
//     }

// }