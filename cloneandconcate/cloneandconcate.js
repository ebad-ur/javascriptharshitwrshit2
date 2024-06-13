//this is used to make the clone same value of array 
//declare variable 
let array1 = ["item1","item2"];

//to make clone there are three method first method is write same as it is
// let array2 = ["item1","item2"];

//second slice method 
// let array2 =array1.slice(0);

//third concat method 
// let array2 = [].concat(array1);

//fourth and last spread method 
let array2 = [...array1];

//pushing the value 
array1.push("item3");

//printting the vlaue 
console.log(array1);
console.log(array2);

//this is used to make concrate the value of array 

//by using the value 
let array3 = ["item5","item6"];

//by using first method of slice
// let array4 = array3.slice(0).concat("item7","item8");

//by using second method of concat
// let array4 = [].concat(array3, ["item7","item8"]);

//by using third method of spread we will make one new array and spread the value 

let newarray = ["item7" ,"item8"];
let array4 = [...array3,...newarray];


//printting the value 
console.log(array3);
console.log(array4);