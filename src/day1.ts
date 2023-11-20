// const a:string = "Hello saifur";
// console.log(a);

// let isDone: boolean = false;
// console.log(isDone);
// let fullName: string ='Md Saifur Rahman';
// let age:number = 25;

// let sentence: string =
//   "Hello, my name is " +
//   fullName +
//   ".\n\n" +
//   "I'll be " +
//   (age + 1) +
//   " years old next month.";
// console.log(sentence);

// //generic array type, Array<elemType>
// let list: Array<number> = [1, 2, 3];
// console.log(list[0]);
// const arr: number[] =[234,56,45,23,34,56,84,23,789];
// const arr2: string[]=["234","56","45","23","34","56","84"];
// type numberString = number | string |boolean;
// const id: numberString = '23';
// const arr3:Array<number|string>=[123,566,"saifur","rahman"]

//  // Declare a tuple type
// let x: [string, number];
// // Initialize it
// x = ["hello", 10]; 

// enum Color {
//   Red,
//   Green,
//   Blue,
// }
// let c: Color = Color.Green;
// console.log(c);

// let notSure: unknown = 4;
// notSure = "maybe a string instead";
 
// console.log(notSure);

// declare function getValue(key: string): any;
// // OK, return value of 'getValue' is not checked
// const str: string = getValue("myString");

// function warnUser(): void {
//   console.log("This is my warning message");
// }

// // Function returning never must not have a reachable end point
// function error(message: string): never {
//   throw new Error(message);
// }
 
// // Inferred return type is never
// function fail() {
//   return error("Something failed");
// }
// fail();
// // Function returning never must not have a reachable end point
// function infiniteLoop(): never {
//   while (true) {}
// }
// function getLowerCase(str: string){
//     return str.toLowerCase();
// }
// console.log(getLowerCase('Sajhklklifur'))

// const b: number = 234;
// function add(n1:number , n2:number):number{
//     return n1+n2;
// }
// console.log(add(23,43));

// const substract = (n1:number , n2:number):number=>{
//     return  n1 -n2;
// }
// console.log(substract(203,143));
// // Array
// const arr:number[] =[234,56,45,23,34,56,84,23,789];
// const arr2:string[]=["234","56","45","23","34","56","84"];

// type numberString = number | string |boolean;

// const id: numberString = '23';
// const arr3:Array<number|string>=[123,566,"saifur","rahman"]
 
// // Imnterface
// interface Person{
//     name:string;
//     age : number;
//     hobby : string
// }

// const person1 : Person = {
//     name : 'Md Saifur Rahman',
//     age : 22,
//     hobby : 'Programming',
// };
// const person2 : Person ={
//     name : 'Saifur Rahman',
//     age : 26,
//     hobby : 'Programming',
// };
// // Enums Predefine copnstant
// const color1 = '#weerrf';

// enum Color {
//     color1= "#weerrf",
//     color2='#hsdjds',
//     color3='#jdfjmm',
// }

// console.log(Color.color2);

// function _concat<T>(a:T,b:T):T{
//     return a+b ;
// }
// _concat<number>(1,3);
// _concat<string>('Md Saifur' ,"Rahman");
