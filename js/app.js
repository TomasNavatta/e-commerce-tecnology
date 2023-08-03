
function heladera(){
    let resultado = 0
   let rta = ""
   let ticket = ""
   let precio = ""
   let precioHeladera = 1000000
   
    function iva(precio){
        return precioHeladera * 0.21
    }
    do{
        let productoHeladera = "Heladera Samsung" 
        let precioHeladera = 1000000
        resultado = resultado + precioHeladera + iva(precio)
        let ticket = "precio final de su pedido: \n "+productoHeladera+"\t$" + (precioHeladera + iva(precio)) 
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
   let precioTelevision = 500000
   
    function iva(precio){
        return precioTelevision * 0.21
    }
    do{
        let productoTelevision = "Television Samsung" 
        let precioTelevision = 500000
        resultado = resultado + precioTelevision + iva(precio)
        let ticket = "precio final de su pedido: \n "+productoTelevision+"\t$" + (precioTelevision + iva(precio)) 
        alert(ticket + "\n\ total: $"+resultado)
        rta = prompt("Escriba 'salir' para finalizar el pedido").toLowerCase()
    }while(rta != "salir")
    
    if(resultado >= 500000){
        resultadoConDescuento = resultado * 0.75
        alert(ticket + "\n\ total: $"+resultado+ "\nTotal con descuento: $"+resultadoConDescuento)
    }
    

}

function buttonTelevision(){
    television();
}

function play(){
    let resultado = 0
   let precioPlay = 650000
   
    function iva(){
        return precioPlay * 0.21
    }
    do{

        resultado =  precioPlay + iva()
       
        alert(`precio total de su pedido: \nplay 5: $${precioPlay} \nCon iva: ${resultado}`)
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
   let precioLg = 850000
   
    function iva(){
        return precioLg * 0.21
    }
    do{

        resultado =  precioLg + iva()
       
        alert(`precio total de su pedido: \nTelevison LG Oled Evo: $${precioLg} \nCon iva: ${resultado}`)
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
 



