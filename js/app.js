
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

function play(){
    let resultado = 0
   let precio_play = 650000
   
    function iva(){
        return precio_play * 0.21
    }
    do{

        resultado =  precio_play + iva()
       
        alert(`precio total de su pedido: \nplay 5: $${precio_play} \nCon iva: ${resultado}`)
        class Play {
            constructor(nombre, precio){
                this.nombre = nombre 
                this.precio = precio
            }
            descuento(){
                this.precio = (this.precio + iva()) * 0.7;
            }
            
        }
        const play = []
        play.push(new Play("play 5", 650000))

        for (producto of play){
            producto.descuento();
            alert(`Total con 30% OFF: $${producto.precio} `)
        }
        rta = prompt("Escriba 'salir' para finalizar el pedido").toLowerCase()
    }while(rta != "salir")

 
    

}
function button2(){
    play();
}


function lg(){
    let resultado = 0
   let precio_lg = 850000
   
    function iva(){
        return precio_lg * 0.21
    }
    do{

        resultado =  precio_lg + iva()
       
        alert(`precio total de su pedido: \nTelevison LG Oled Evo: $${precio_lg} \nCon iva: ${resultado}`)
        class Lg {
            constructor(nombre, precio){
                this.nombre = nombre 
                this.precio = precio
            }
            descuento(){
                this.precio = (this.precio + iva()) * 0.95;
            }
            
        }
        const lg = []
        lg.push(new Lg("Tv Lg Oled Evo", 850000))

        for (producto of lg){
            producto.descuento();
            alert(`Total con 5% OFF: $${producto.precio} `)
        }
        rta = prompt("Escriba 'salir' para finalizar el pedido").toLowerCase()
    }while(rta != "salir")

 
    

}
function button3(){
    lg();
}



 const productos = [
     {nombre: 'Play 5', precio: 650000},
     {nombre: 'Heladera Samsung', precio: 1000000},
     {nombre: 'Television Samsung', precio: 500000},
     {nombre: 'Television Lg Oled Evo', precio: 850000},
 ]

 const resultado = productos.filter((el) => el.nombre.includes ("Television"))
 const resultado2 = productos.filter((el) => el.precio >=850000) 

 console.log(resultado)
 console.log(resultado2)
 



