const { registrar, leer } = require('./operaciones')

/* Obtener los argumentos desde la línea de comandos */
const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2)

if (operacion === 'registrar') {
    if (nombre && edad && animal && color && enfermedad) {
        registrar(nombre, edad, animal, color, enfermedad)
    } else {
        console.log('Por favor se solicita proporcionar todos los datos: Nombre, Edad, Animal, Color y Enfermedad')
    }
} else if (operacion === 'leer') {
    leer()
} else {
    console.log('Operación no reconocida. Utilice "registrar" o "leer".')
}