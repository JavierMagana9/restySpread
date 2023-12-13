//1.Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los argumentos.



const sumEveryOther = (...numeros) => {
    let resultado = 0;
    /* for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i]
    }
    */
   numeros.reduce(()=>{

   })
   return resultado
   
}

//console.log(sumEveryOther(6, 8, 2, 3))

//2.Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings) y retorne la suma solo de los números.

const addOnlyNums = (...todo) => {
    let sumaNumeros = 0;

    todo.forEach((items)=> {
    if(typeof items === "number") {
        sumaNumeros += items
         }
    })  
        return sumaNumeros

}

//console.log(addOnlyNums(1, "perro", 2, 4, 6))


//3.Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

const countTheArgs = (...argumentos) => {

    return argumentos.length

}

//console.log(countTheArgs("gato", "perro", "pollo", "oso", 2))

//4.Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

const combineTwoArrays = (...argumento) => {

    return argumento

}

//console.log(combineTwoArrays(...["perro", 1, 5, true], ...[2, "jefe", false]))

//5.Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

const onlyUniques = (...unicos) => {

    return unicos.filter((arg1, arg2) =>
        unicos.indexOf(arg1) === arg2
    )

}

//console.log(onlyUniques(...["gato", "pollo", "cerdo", "cerdo"], ...[1, 1, 2, 2, 3, 6, 7, 8]))

//6.Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

const combineAllArrays = (...argumento) => {

    return argumento.flat(Infinity)

}

//console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1], [2, 7, 3, 1], [2, 7, 4, 12]))

//7.Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

const sumAndSquare = (...argumento) => {

    let resultado = 0;

    argumento.forEach((item)=>{
        resultado += Math.pow(item, 2)
    })
    return resultado
}

//console.log(sumAndSquare(...[3, 6], "2", 2))