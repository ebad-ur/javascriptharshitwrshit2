
//there are two method 
//for in 
//objeect.key 

const person = {
    name : "shariq" ,
    age : 187,
    hobbies : ["dnace","cricket","talking"]
} 

//applybing for in loop when we want only key we will use key 
for (let key in person){
    console.log(person[key])
}

//we want all things in out put

for (let key in person){
    console.log(`${key} : ${person[key]}`)
}

//object.key same things 
const persons = {
    name : "shariq" ,
    age : 187,
    hobbies : ["dnace","cricket","talking"]
} 


//applybing for in loop when we want only key we will use key 
for (let key in persons){
    console.log(persons[key])
}

//we want all things in out put
for (let key in persons){
    console.log(`${key} : ${persons[key]}`)
}





