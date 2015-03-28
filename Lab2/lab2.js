/* Array en JavaScript */

var my_array= new Array(); 

var other_array=[1,2,3,3,4,4,4,4,4,4,4,44]; 

console.log(my_array); 

console.log(my_array[3]); 

other_array = ['a', 'n', 'ggjggjjggjgj', 'fjfjfjf'];

console.log(other_array);

/* metodos sobre los arreglos */

// Agregando elemento despues de la ultima posicion


my_array.push(39); 

other_array.push('hola mundo');

console.log(other_array);

console.log(my_array);

// Eliminar el ultimo elelmento

my_array.pop(); 
other_array.pop(); 

//Eliminar el primer elememento 

my_array.shift();

other_array.shift();

console.log(other_array);

console.log(my_array);


// Organizar elementos+
my_array.sort();

other_array.sort();

console.log(other_array);

console.log(my_array);

var tasks = ['comer', 'dormir', 'jugar'];

console.log(tasks);

tasks.splice(1,3, "Estudiar", "saltar", "correr");

console.log(tasks);