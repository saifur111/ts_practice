"use strict";
console.log("hi saifur");
const con = "I Love Bangladesh.";
console.log(con);
let playerName = "Sakibal Hasan";
console.log(playerName);
const mult = (a, b) => {
    return a * b;
};
console.log(mult(20, 37));
let fruits = ["apple", "banana", "Lichy"];
fruits.push("Jackfruit");
console.log(fruits);
// Explicit & Union Types
let a;
a = "Saifur";
let arr = [];
let b;
let d = [];
let c;
c = {
    name: "Md saifur rahman"
};
// Dynamic Typpe Or any Type
let obj = { x: 0 };
let array = [];
array.push({
    name: "Md saifur rahman",
    age: 26,
});
console.log(array);
// Use Functions
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
const names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
let myFunc = (a, b) => {
    console.log(`Hello ${a} .How about ${b}.`);
};
myFunc("Md Saifur Rahman", "yourself");
const voidFunc = (a, b, c = "true") => {
    console.log(c);
    console.log(`Hello ${a} ${b}`);
};
voidFunc("A", "B", "C");
// Type Aliases {common kore dey same jinis golo}
const userDetails = (id, user) => {
    console.log(`User id is ${id}, Name is ${user.name} and Age is ${user.age}.`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};
const sayHelloByOwnAliases = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};
const userDetailsByOwnAliases = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}.`);
    sayHelloByOwnAliases(user);
};
userDetailsByOwnAliases(234, { name: "Md Saifur Rahman", age: 26 });
//Function Signature 
let myFuncSyVoid; // Its not a arrow function this is a syntex .. 
let myFuncSyString; // Its not a arrow function this is a syntex .. 
myFuncSyString = (a, b) => {
    return `User id is ${a}, Name is ${b}`;
};
console.log(myFuncSyString('Sjdj67', "Sabbir Rahman"));
let userDetailsFunc;
userDetailsFunc = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}.`);
    sayHelloByOwnAliases(user);
};
// Class in ts
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
    }
}
