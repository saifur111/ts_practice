console.log("hi saifur");

const con:string="I Love Bangladesh.";
console.log(con);

let playerName:string = "Sakibal Hasan";
console.log(playerName);

const mult = (a:number, b:number)=>{
    return a*b;
}

console.log(mult(20,37));

let fruits = ["apple","banana","Lichy"]

fruits.push("Jackfruit");
console.log(fruits);

// Explicit & Union Types

let a:string;
a="Saifur";
let arr:string[] = [];
let b : string | number;
let d : (string | number)[]=[];
let c:object;
c={
    name  : "Md saifur rahman"
}

// Dynamic Typpe Or any Type
let obj: any = { x: 0 };
let array:any[]=[];
array.push({
    name  : "Md saifur rahman",
    age : 26,
})

console.log(array);

// Use Functions
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
printCoord({ x: 3, y: 7 });

const names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
let myFunc = (a:string,b:string)=>{
    console.log(`Hello ${a} .How about ${b}.`)
}
myFunc("Md Saifur Rahman","yourself");

const voidFunc =(a:string,b:string ,c:string ="true")=>{
    console.log(c);
    console.log(`Hello ${a} ${b}`);
}

voidFunc("A","B","C");

// Type Aliases {common kore dey same jinis golo}

const userDetails = (
    id : string|number,
    user :{name:string;age:number}
)=>{
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}.`)
};

const sayHello = (user:{name:string;age:number})=>{
    console.log(`Hello ${user.age>50 ? "Sir":"Mr."} ${user.name}`);
}; 

// Nijer banano type

type stringOrNumber = string | number;
type userType = {name:string;age:number}

const sayHelloByOwnAliases = (user:{name:string;age:number})=>{
    console.log(`Hello ${user.age>50 ? "Sir":"Mr."} ${user.name}`);
}; 
const userDetailsByOwnAliases  = (
    id : stringOrNumber,
    user : userType,
)=>{
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}.`)
    sayHelloByOwnAliases(user);
};

userDetailsByOwnAliases(234,{name:"Md Saifur Rahman",age:26})


