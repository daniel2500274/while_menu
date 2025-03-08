/*
MENÚ DE OPCIONES: DE CALCULADORA, DEBE MOSTRAR AL USUARIO LAS
OPCIONES POSIBLES Y ATRÁVES DEL CÓDIGO QUE ESCOJA EL USUARIO, DEBE
PERMITIRLE REALIZAR ESA OPRACION.
• CÁLCULO DE PROMEDIO DE NOTAS (4 NOTAS)
• CÁLCULO DE ÁREA DE UN RECTÁNGULO
• SUMA DE DOS NÚMEROS
• RETORNO DE NOMBRE DEL DÍA SEGÚN NÚMERO DE DÍA
MUCHA SUERTE! RECUERDEN "DIVIDE Y VENCERÁS"
*/

let opciones = prompt(`Ingrese la opción que desea realizar: 
    1. Cálculo de promedio de notas (4 notas) 
    2. Cálculo de área de un rectángulo 
    3. Suma de dos números 
    4. Retorno de nombre del día según número de día`
)

do {

    switch (opciones) {
        // Cálculo de promedio de notas (4 notas)
        case '1': {
            let totalNotas = 4
            let sumaNotas = 0
            for (let i = 1; i <= totalNotas; i++) {
                let nota = parseFloat(prompt(`Ingrese la nota ${i}: `))
                sumaNotas += nota
            }
            let promedio = sumaNotas / totalNotas
            alert(`El promedio de las notas es: ${promedio}`)
            break
        }
        // Cálculo de área de un rectangulo
        case '2': {
            let base = parseFloat(prompt('Ingrese la base del rectángulo: '))
            let altura = parseFloat(prompt('Ingrese la altura del rectángulo: '))

            if (isNaN(base) || isNaN(altura)) {
                alert("Error: Ingrese un número válido.")
                break;
            } else if (base <= 0 || altura <= 0) {
                alert("Error: Ingrese un número mayor a cero.")
                break;
            } else {
                let area = base * altura
                alert(`El área del rectángulo es: ${area}`)
            }
            break
        }
        // Suma de dos números
        case '3': {
            let num1 = parseFloat(prompt('Ingrese el primer número: '))
            let num2 = parseFloat(prompt('Ingrese el segundo número: '))
            if (isNaN(num1) || isNaN(num2)) {
                alert("Error: Ingrese un número válido.")
                break;
            } else {
                let suma = num1 + num2
                alert(`La suma de los números es: ${suma}`)
            }
            break;
        }
        // Retorno de nombre del día según número de día       
        case '4': {
            const dia = parseInt(prompt('Ingrese el número del día de la semana: '))
            const diasSemana = ['Número de día no válido', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
            if (dia >= 1 && dia <= 7) {
                alert(diasSemana[dia])
            } else {
                alert(diasSemana[0])
            }
            break
        }
        default:
            alert('Opción no válida intente de nuevo')
            break
    }

    opciones = prompt(`Ingrese la opción que desea realizar: 
    0. Salir
    1. Cálculo de promedio de notas (4 notas) 
    2. Cálculo de área de un rectángulo 
    3. Suma de dos números 
    4. Retorno de nombre del día según número de día`, opciones)

} while (opciones != '0')