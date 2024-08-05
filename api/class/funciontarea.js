//Calcular los numero de cuentas
//Crear numero de tarjeta 
//Crear el numero de CVV
//Creación de la fecha de expiración para la tarjeta

//Ignore esto maestro estoy en prueba y error, de rato me regaña
class FuncionesTarjeta{
    constructor(
        numCuenta,
        numTar,
        cvv,
        FechExp
    ){
        this.numCuenta = numCuenta;
        this.numTar = numTar;
        this.cvv = cvv;
        this.FechExp = FechExp;
    }
}

//////////////////////////////////////////////////////////////////Calcular los numero de cuentas/////////////////////////////////////////////


class numCuenta {
    constructor(count) {
        this.count = count;
        this.numberss = new Set();      // Usamos Set para asegurar que todos sean unicos  
    }

    newNumer() {
        while (this.numberss.size < this.count) {
            const randomNumber = Math.floor(Math.random() * 9 ); //     Genera un número aleatorio entre 0 y 9
            this.numberss.add(randomNumber);  //    Los Sets solo almacenan valores únicos
        }
        return Array.from(this.numberss); //    Convertimos el Set en un array (para poder obtener la cadena de numeros generados)
    }
}

//    Instancia de la clase y generar 11 números aleatorios únicos
const addNumCu = new numCuenta(11);
const addCuentaa = addNumCu.newNumer();

console.log(addCuentaa);


////////////////////////////////////////////////////////////Crear numero de tarjeta//////////////////////////////////////////////////////////// 

class numTar {
    constructor(count) {
        this.count = count;
        this.numbers = new Set();      // Usamos Set para asegurar que todos sean unicos  
    }

    newNumer() {
        while (this.numbers.size < this.count) {
            const randomNumber = Math.floor(Math.random() * 9 ); //     Genera un número aleatorio entre 0 y 9
            this.numbers.add(randomNumber);  //    Los Sets solo almacenan valores únicos
        }
        return Array.from(this.numbers); //    Convertimos el Set en un array (para poder obtener la cadena de numeros generados)
    }
}

//    Instancia de la clase y generar 16 números aleatorios únicos
const addNum = new numTar(16);
const addTarjeta = addNum.newNumer();

console.log(addTarjeta);

////////////////////////////////////////////// Crear el numero de CVV ////////////////////////////////////////////////////////////////

class numCVV {
    constructor(count) {
        this.count = count;
        this.numbers = new Set();      // Usamos Set para asegurar que todos sean unicos  
    }

    newNumer() {
        while (this.numbers.size < this.count) {
            const randomNumber = Math.floor(Math.random() * 9 ); //     Genera un número aleatorio entre 0 y 9
            this.numbers.add(randomNumber);  //    Los Sets solo almacenan valores únicos
        }
        return Array.from(this.numbers); //    Convertimos el Set en un array (para poder obtener la cadena de numeros generados)
    }
}

//    Instancia de la clase y generar 3 números aleatorios únicos
const addNumb = new numCVV(3);
const addTarCVV = addNumb.newNumer();

console.log(addTarCVV);

////////////////////////// Creación de la fecha de expiración para la tarjeta //////////////////////////////////////////////////////////////

class expirationDate{
    constructor(){
        const mes = Math.floor(Math.random() * 12) + 1; 
        const año = new Date().getFullYear() + 3;
        // Crea el formato el mes y el año en formato MM/AA
        return `${mes.toString().padStart(2, '0')}/${año.toString().slice(-2)}`;
    }
}

// .toString()  = convierte los datos a un string (texto)/// 123 = "123"
// .padStart() = se encarga de rellenar la cadena de caracteres para tener la longitud deseada


