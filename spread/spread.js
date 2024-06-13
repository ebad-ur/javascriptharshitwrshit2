//making obj

const obj1 = {
    key1 : "value1",
    key2 : "value2"
};

//making second obj it wil, take the key 1 value of string because it take obly one 
//value and the value whioch is given below

const obj2 ={
    //key1 : sttring
    key3 : "value3",
    key4 : "value4"
};

//making new array and using spread method to make clone 

const newobj = {...obj1 , ...obj2};

//printting the value 
console.log(newobj)
