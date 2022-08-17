// Este desafio se trata sobre que el cliente debe elegir el servicio que desea diciendome el precio que dice en la paginal y el descuento. Con la funcion promocion saque el descuento y con la funcion precio final reste el costo del servicio con la promocion a lo ultimo use el ciclo while para preguntarle al cliente si necesita algo mas.

let servicio = parseInt(prompt("Bienvenidos a Barberia el Patron, ingrese el servicio que desea 1,2,3"));
let costo_servicio = parseInt(prompt("Ingrese el costo del servicio"));
let descuento = parseInt(prompt("Estas de suerte,ingrese el descuento que dice en el servicio que seleccionaste"));


function promocion(costo_servicio,descuento) {
    let costo = ((costo_servicio*descuento)/100);
    return costo
}
promocion()

function precio_final() {
    if (servicio == 1) {
        let servicio_uno = costo_servicio - promocion(costo_servicio, descuento);
        let mensaje = "Decidiste por el corte de pelo pasate por la barberia que tenes un descuento del: " + descuento + "%" + " " + "el precio final es: "+ "$" + servicio_uno;
        alert(mensaje);
    }
    else if (servicio == 2) {
        let servicio_dos = costo_servicio - promocion(costo_servicio,descuento);
        let mensaje_dos = "Decidiste por el corte de pelo mas barba pasate por la barberia que tenes un descuento del: " + descuento + "%" + " " + "el precio final es: " + "$" + servicio_dos;
        alert(mensaje_dos);
    }
    else if (servicio == 3) {
        let servicio_tres = costo_servicio - promocion(costo_servicio,descuento);
        let mensaje_tres = "Decidiste por el corte de pelo mas color pasate por la barberia que tenes un descuento del: " + descuento + "%" + " " + "el precio final es: " + "$" + servicio_tres;
        alert(mensaje_tres);
}
}
precio_final() 

let pregunta = prompt("¿Necesitas algo mas? si o no");

while (pregunta != "no") {
    prompt("Que necesitas");
    pregunta = prompt("¿Algo mas?")
}
