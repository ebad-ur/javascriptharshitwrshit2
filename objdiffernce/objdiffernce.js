// difgfernce between dot and beracket notation

//creating obj 

const person = {
    name : "shariq" ,
    age : 187,
   "person hobbies ": ["dnace","cricket","talking"]
} 

//the first difference is when we give space btw any thing the dot method does not apply 
//the dot method is used  for any obj there is no space btw 
console.log(person["person hobbies "])


//creating obj 
const persons = {
    name : "shariq" ,
    age : 187,
   personhobbies: ["dnace","cricket","talking"]
} 

console.log(persons.personhobbies);

//second differnce when we have two variable and we want the variable store in the 
//variable define we use [] isted of .


//creating obj 

//creating obj and two vraiable 

const key= "email" 
const personss = {
    name : "shariq" ,
    age : 187,
   "personss hobbies ": ["dnace","cricket","talking"]
} 
console.log(personss)

//i want to add email inside the person first we using . method

personss.key="ebad63@gmail.com";

//printtning the out put is comming the name of key insted of email for email we use
//[]
console.log(personss);

//same thing with email

personss[key]="ebad63@gmail.com";
console.log(personss);
