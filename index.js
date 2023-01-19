var x = 10;
var x = 20;
var x = 30
console.log("X Value is: " + x);
console.log(x); // here using var duplicate x is possible

let y = 10;
y = 70;
console.log(y);
// let y=20; here duplicate y is not possible

const z = 10;
//const z=40; not possible
//z=90; here i am getting error because we cannot assign value to constant variable
console.log(z);


function myName() {
    let name = "Saranraj";
    console.log("my name is", name);
}

//console.log(name);// i am getting error because block scope

myName()

var myNames = "Saranraj";

var yourName = () => console.log('Your name is', myNames);

yourName()

var xyz = true

// if(false){    if condition is false it will not execute
//  console.log(myNames);
// }
console.log('.............................');

console.log(name);
var name = "Raju" // undefined

//console.log(n); cannot access before initialization
let n = 10;

let exName;
console.log(exName); // both  var and let keyword get undefined
exName = "Saravana"

//const name; once we declare varible using const keyword it's mandatory to initialize value 
exeName()

function exeName() {
    let name = "Raj";
    console.log(name);
}

console.log('.................');
var names = "Original name";
var age = 50;
if (age > 18) {
    console.log('before modification', names);
    var names = "Modified name";
    console.log('after modification', names);
}

console.log('.................................');

console.log(names);
let a = 10;
a += 30;
console.log(a);

console.log('................');


console.log(typeof 10);
console.log(typeof Number);// function
console.log(typeof String);//function
console.log(typeof null); // object
console.log(typeof Object);
console.log(typeof {});
console.log(typeof []);
console.log(typeof undefined);  // undefined
console.log(typeof '');//String
console.log(typeof true);

var x = 5;
console.log(Math.pow(x, 2));
console.log(x);

console.log(6 >> 2);
console.log(10 >>> 9);

let arr = [1, 2, 3, 4, 5, 6]
console.log(...arr);

let userObject = {
    name: "Saranraj",
    age: 22,
    native: "Tiruvannamalai"
}

//console.log(...userObject);
let spread = { ...userObject };
console.log(spread);

const array = [1, 2, 3, 4];
const obj = { ...array }
console.log(obj);
console.log('.....................');

let dateFields = [1940, 11, 8];
let d = new Date(...dateFields)
console.log(d);

const obj1 = { study: "B.E CSE", native: "Tiruvannamalai" }
const obj2 = { name: "Saravana", age: 26 }
const mergedObject = { ...obj1, ...obj2 }
console.log(mergedObject);


function myFun(one, two, ...remaining) {
    console.log(one);
    console.log(two);
    console.log(remaining);
}

myFun('one', 'two', 'three', 'four', 'five')

console.log(Math.min(1, 2, 3)
);

let spreadExample = [1, 2, , 3, 4, , 5]
console.log(Math.max(...spreadExample));

var myObj = {};

Object.assign(myObj, { a: 10, b: 20 }, { c: 40, d: 50 })
console.log(myObj);


function someOne(a, b) {
    return a + b;
}

let myA = [5, 5]
console.log(someOne(...myA));

function sumValue(...args) {
    let sum = 0;
    for (let iteartor of args) {
        sum += iteartor
    }
    return sum
}

let callSum = [1, 2, 3, 4, 5,]
console.log('Sum of value is: ', sumValue(...callSum));

console.log(`text line 1
text line 2`);

let score = 75;
let result = score > 45 ? "Passed" : "Failed";
console.log(`Student ${result} the exam`);

let country = 'IND';

switch (country) {
    case 'IND':
        console.log("I love India");
        break;

    case 'USA':
        console.log("United states America!");
        break;

    case 'CAN':
        console.log("Canada");
        break

    default:
        console.log("Cannot find the country");
}

let day = new Date().getDay()
console.log(day);

switch (day) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log("Today is Woking day");
        break;

    case 1:
    case 7:
        console.log("Enjoy your weekends");
        break;


    default:
        console.log("🤣");
}

console.log('...............................');
let greet = (user) => {
    console.log("Hello: " + user);
}

greet("Saran")

let add = (num1, num2) => num1 + num2;
let res = add(10, 20);
console.log("Addition of two number is: ", res);


let adding = (number1, number2) => {
    if (number1 < 0) {
        number1 = number1 * -1;
    }

    if (number2 < 0) {
        number2 = number2 * -1;
    }

    return number1 + number2;
}

let getAdd = adding(10, -20)
console.log("The result of adding two number is: ", getAdd);


declaration()
function declaration() {
    console.log("Declaration function it will invoke before ");
}

const expression = function () {
    console.log("Expression it will invoke after");
}

expression()
console.log('...............................');
const square = a => a * a;
console.log(square(3));

const ad = (a, b) => a + b;
console.log(ad(10, 23));

RegularFun()
function RegularFun() {
    console.log(arguments);
}

//const arrowFun = () => console.log(arguments);
//arrowFun()

function fun(a, a, a) {
    console.log(a);
}

fun(1, 2, 3)

function myFunction() {
    var z = 4;
    console.log(z * z);
}

human("Sina")
human("qoli")

function human(name) {
    function sayName() {
        console.log(`Hi, My name is ${name}`);
    }

    function sayHowYouFeel() {
        console.log(`${name} is Feeling Good!`);
    }
    sayName()
    sayHowYouFeel()
}

let alpha = ["Saranraj", "Rajkumar", "Velan"]
//let { a, b } = alpha;
console.log(alpha[0]);
console.log(alpha[1]);
console.log(alpha[3]);
console.log(alpha[2]);

let animal = {
    animalName: "Lion",
    category: "Cat Family",
    Des: "King of Forest"
}

const { animalName = "Cannot find", ...resting } = animal;
console.log('................');
console.log(animalName);
console.log(resting);
console.log('................');


function ani(gettingAnimal) {
    let { animalName, category } = gettingAnimal;
    let modified = { animalName, category }
    console.log(modified);
    console.log(animalName);
    console.log(category);
    return modified;
}

let newAnimal = ani(animal)
console.log(newAnimal);

let alphabet = ['A', 'B', 'C', 'D', 'E']
let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
let newArrays = [...alphabet, ...numbers]
console.log("new Arrays", newArrays);
let newArray = alphabet.concat(numbers)
console.log("The new Array: " + newArray);
let [cc, dd, ...rest] = alphabet;
console.log(cc);
console.log(dd);
console.log(rest);

//console.log(...alphabet);


function sumMultiply(a, b) {
    return [a + b, a * b, a / b]
}

const [sum, multiply, division = 'No Division'] = sumMultiply(10, 20);
console.log(sum);
console.log(multiply);
console.log(division);

const personOne = {
    name: "Sina",
    age: 123,
    favouriteFood: "Chicken",
    favouriteDrink: "Thumsup"
}
gettingPerson(personOne)

function gettingPerson({ name, age, favouriteFood }) {
    console.log(`My name is ${name} and I am ${age} years old and my Favourite food is ${favouriteFood}`);
}

const items = [
    { name: "Bike", Model: "R15 V3", Price: 20000 },
    { name: "Mobile", Model: "Apple 14 Pro", Price: 780000 },
    { name: "Laptop", Model: "Apple Macbook Pro", Price: 2000000 },
    { name: "HeadSet", Model: "Boat Airpods 141", Price: 1670 }
]


const filterItems = items.filter((item) => {
    return item.Price < 50000;
})

console.log(filterItems);

const itemNames = items.map((item) => {
    return item.name;
})

const itemModels = items.map((item) => {
    return item.Model;
})

const findItem = items.find((item) => {
    return item.name = "Bike";
})

const everyItems = items.every((item) => {
    return item.Price >= 2000;
})

console.log("Every Items: " + everyItems);

console.log('Find item is: ', findItem);

items.forEach((item) => {
    console.log(item.name, item.Price);

})

const hasExpensiveItems = items.some((item) => {
    return item.Price >= 50000;
})


const total = items.reduce((currentTotal, item) => {
    return item.Price + currentTotal
}, 0)
console.log("The Total Cast Item: " + total);
console.log("Expensive Items: ", hasExpensiveItems);
console.log(itemModels);
console.log(itemNames);

let item = [1, 2, 3, 4, 5]
console.log(item.includes(10));

let m = 10;
let nx = m;
nx = 20;
console.log(m);
console.log(nx);

let ob1 = { Name: "Saranraj", age: 20 }
ob1 = null

let ob2 = ob1;
//ob2.Name = "Raju";
console.log(ob1);
console.log(ob2);


console.log('.......................');
let ax = [1, 2]
let bx = ax;
bx.push(10)
console.log(bx);
bx = null;
console.log(ax === bx);
console.log(ax);
console.log(bx);

let p = new Promise((resolve, reject) => {
    let a = -1;
    if (a > 0) {
        resolve("Suceess")
    } else {
        reject("Failure")
    }
})

p.then((message) => {
    console.log("This is an then: " + message);
}).catch((message) => {
    console.log("This is an Catch: " + message);
})


