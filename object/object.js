//object are reference type attay are good but not sufficent
//for real world data object stroe key value pairs object dont have index

//how to create object object are create by {} : the colon are the keys 

const people = {name :"ebad" , age : 19};

//to check the type 
console.log(typeof people)

//printting the vlaue 
console.log(people);

//how to acess the data from the object
console.log(people.age);
console.log(people.name);

//how to add key value in pair to object

people.gender ="male"

//print to check the value
console.log(people)

//to add array in the object

const person = {
    name : "shariq" ,
    age : 187,
    hobbies : ["dnace","cricket","talking"]
} 
//printting and checking type
console.log(person);
console.log(typeof person);

//accesing the array by []
console.log(person ["hobbies"]);
console.log(person ["name"]);

//adding the name by []
person ["person"] = "slaman";
console.log(person)