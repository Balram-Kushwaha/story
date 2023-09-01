console.log("this is tutorial 53");



function greet(name,greetText="Greeting from JavaScript"){
    let name1 ="name1";
    console.log(greetText + "" + name);
    console.log( name + " is a good boy");
    
}

function sum(a,b,c){
    let d=a+b+c;
    return d;
}

let name = "balram";
let name2 = "sager";
let name3= "rohandas";
let name4= "bos";
let greetText="good morning";

greet(name,greetText);
greet(name2,greetText);
greet(name3,greetText);
greet(name4);

// let returnval = greet(name3);
// console.log(returnval);


let returnval = sum(1,2,3);
console.log(returnval);

console.log( name + " is a good boy")
console.log( name2 + " is a good boy")
console.log( name3 + " is a good boy")
console.log( name4 + " is a good boy")