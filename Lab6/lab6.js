function compare(a,b) {

	if(a>b){
		alert("El numero mayor es: a= "+a); 
	}else if(a===b){
		alert("Son Iguales: b=a "+b + " = "+a); 
	}
	else {
		alert("El numero mayor es: b= "+b); 
	}

}

compare(4,4); 





x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
    var i, max = 0;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}





 /* Uso de funciones, variables y estructuras de control */

var number_one = 2;

var number_two = 22828282;

// Declarando la función max()
function max(){
	if(number_one > number_two){
		alert("El número " + number_one + " es mayor que número " + number_two);
	} else {
		alert("el número de la variable 'number_two' " + number_two + " es mayor que el número de la variable 'number_one' " + number_two);
	}
}

// Haciendo uso de la funcion `max()`
max();
