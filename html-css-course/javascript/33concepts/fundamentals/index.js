var number = 5

//Javascript primitive types

// JavaScript has exactly 7 primitive types
const str = "hello";           // string
const num = 42;                // number
const big = 9007199254740993n; // bigint
const bool = true;             // boolean
const undef = undefined;       // undefined
const nul = null;              // null
const sym = Symbol("id");      // symbol

console.log(typeof str);   // "string"
console.log(typeof num);   // "number"
console.log(typeof nul);   // "object" — Wait, what?!

//Primitives vs Objects: How JavaScript Values Actually Work

const original = {
    name: "Alice"
}

const copy = original

copy.name = "Joao"

console.log(original.name)

let arr1 = [1,2,3,4,5] 
let arr2 = arr1;

arr2.push(4)
console.log(arr1)



console.log("5" + 3)
console.log("5" - 3)

//How convere 

// YOU decide when and how to convert
Number("42")      // 42
String(42)        // "42"
Boolean(1)        // true

parseInt("42px")  // 42
parseFloat("3.14") // 3.14