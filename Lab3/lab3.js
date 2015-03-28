/* objetos y funciones */


var my_object= new Object(); 

var other_object= {}; 

my_object={
	firstName: 'Juan',
	lastName: 'Ocampo',
	phone: 123313131313,

}; 

console.log(my_object.firstName);
console.log(my_object['lastName']);  

var key;

for(key in my_object){
	console.log(my_object[key]);
}


