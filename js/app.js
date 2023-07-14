
function heladera(){
    let resultado = 0
   let rta = ""
   let ticket = ""
   let precio = ""
   let precio_heladera = 1000000
   
    function iva(precio){
        return precio_heladera * 0.21
    }
    do{
        let producto_heladera = "Heladera Samsung" 
        let precio_heladera = 1000000
        resultado = resultado + precio_heladera + iva(precio)
        let ticket = "precio final de su pedido: \n "+producto_heladera+"\t$" + (precio_heladera + iva(precio)) 
        alert(ticket + "\n\ total: $"+resultado)
        rta = prompt("Escriba 'salir' para finalizar el pedido").toLowerCase()
    }while(rta != "salir")
    
    if(resultado >= 1000000){
        resultadoCondescuento = resultado * 0.9
        alert(ticket + "\n\ total: $"+resultado+ "\nTotal con descuento: $"+resultadoCondescuento)
    }
    

}

function button(){
    heladera();
}


function television(){
    let resultado = 0
   let rta = ""
   let ticket = ""
   let precio = ""
   let precio_television = 500000
   
    function iva(precio){
        return precio_television * 0.21
    }
    do{
        let producto_television = "Television Samsung" 
        let precio_television = 500000
        resultado = resultado + precio_television + iva(precio)
        let ticket = "precio final de su pedido: \n "+producto_television+"\t$" + (precio_television + iva(precio)) 
        alert(ticket + "\n\ total: $"+resultado)
        rta = prompt("Escriba 'salir' para finalizar el pedido").toLowerCase()
    }while(rta != "salir")
    
    if(resultado >= 500000){
        resultadoCondescuento = resultado * 0.75
        alert(ticket + "\n\ total: $"+resultado+ "\nTotal con descuento: $"+resultadoCondescuento)
    }
    

}

function button_television(){
    television();
}




