const fs = require('fs')
/* Ruta del archivo */

const ubicacionArchivo = './citas.json'

/* Funcion para registrar nueva cita */
function registrar(nombre, edad, animal, color, enfermedad) {
    const nuevaCita = { nombre, edad, animal, color, enfermedad }

    /* Leer archivo JSON */
    const data = fs.existsSync(ubicacionArchivo) ? fs.readFileSync(ubicacionArchivo, 'utf8') : '[]'
    const citas = JSON.parse(data)

    /* Agregar la nueva cita al arreglo */
    citas.push(nuevaCita)

    /* Guardar las citas actualizadas en el archivo */
    fs.writeFileSync(ubicacionArchivo, JSON.stringify(citas, null, 2))
    console.log('Cita registrada de manera exitosa', nuevaCita)
}

/* Funcion para leer las citas registradas */
function leer() {
    if (fs.existsSync(ubicacionArchivo)) {
        const data = fs.readFileSync(ubicacionArchivo, 'utf8')
        const citas = JSON.parse(data)
        console.log('Citas registradas:', citas)
    } else {
        console.log('No hay citas registradas.')
    }
}

/* Exportar funciones */
module.exports = { registrar, leer }