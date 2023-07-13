let resultado = 0
let rta = ""
let ticket = ""

function heladera(){
    function iva(precio){
        return precio * 0.21
    }
    do{
        let producto_heladera = "Heladera Samsung" 
        let precio_heladera = "1000000"
        resultado = resultado + precio_heladera + iva(precio)
        let ticket = "precio final de su pedido: \n "+producto_heladera+"\t$" + (precio_heladera + iva(precio)) 
        rta = prompt("Escriba 'salir' para finalizar el pedido").toLowerCase()
    }while(rta != "salir")
    
    if(resultado >= 1000000){
        resultado = resultado * 0.9
    }
    alert(ticket + "\n\total: $"+resultado)

}

function button(){
    heladera();
}




const Min_num = 50
const Max_num = 100
const Numero_random = Math.ceil(Math.random()*(Max_num - Min_num) + Min_num);


    function jugar(){
    let Numero_jugador = 0;
    let Intentos = 5
    for(let i = 1; i <= Intentos; i++){

    Numero_jugador = parseInt(prompt("Encontra el numero entre el 50 y 100:"));

    if(Numero_jugador === Numero_random) {
        alert("Acertaste el numero era " + Numero_jugador);
        return;
    }
    if(Numero_jugador < Numero_random) {
        alert("El numero es mayor a " + Numero_jugador)
    }
    else {
        alert("el numero es menor a " + Numero_jugador)
    }
}
if(Intentos=5){
    alert("Game over")
}
    }
    
   
    
    function comenzar(){
        jugar();
    }