let color = document.getElementById("color-phone");
let capacidad = document.getElementById("capacidad-telefono");
let cantidad = document.getElementById("cantidad-compra");
let imagenCelular = document.getElementById("phone-img");
let display = document.getElementById("result");


function validarColor(){
    if(color.value == "0"){
        display.style.backgroundColor = "rgb(255, 0, 0)";
        display.innerText = "Debe elegir un color";
        return false;
    }else{
        return true;    
    }
}

function validarCapacidad(){
    if(capacidad.value == "0"){
        display.style.backgroundColor = "rgb(255, 0, 0)";
        display.innerText = "Debe elegir la capacidad del teléfono"
        return false;
    }else{
        return true;
    }
}

function validarCantidad(){
    if(cantidad.value <= 0 || cantidad.value > 10){
        display.style.backgroundColor = "rgb(255, 0, 0)";
        display.innerText = "Debe seleccionar una cantidad de entre 1 y 10 dispositivos a comprar";
        return false;
    }else{
        return true;
    }
}

function changeProductImage(){
    if(color.value == "graphite"){
        imagenCelular.setAttribute("src", "/img/iphone_13_graphite.png");
    }else if(color.value == "gold"){
        imagenCelular.setAttribute("src", "/img/iphone_13_gold.png");
    }else if(color.value == "silver"){
        imagenCelular.setAttribute("src", "/img/iphone_13_silver.png");
    }else if(color.value == "sierra"){
        imagenCelular.setAttribute("src", "/img/iphone_13_sierra.png");
    }
}

function calculatePrice(){
    let valorCapacidad;
    let total;
    display.style.display = "block";
    
    display.style.fontWeight = "bold";

    if(validarColor()){
        if(validarCapacidad()){
            if(validarCantidad()){
                if(capacidad.value == "128"){
                    valorCapacidad = 150000;
                }else if(capacidad.value == "256"){
                    valorCapacidad = 165000;
                }else if(capacidad.value == "512"){
                    valorCapacidad = 180000;
                }
                display.style.backgroundColor = "rgb(32, 170, 32)";
                total = valorCapacidad * cantidad.value;
                display.innerText = "Cotización: $ " + total;
            }
        }
    }
}