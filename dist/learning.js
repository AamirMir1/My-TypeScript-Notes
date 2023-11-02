"use strict";
// Topic 1: The beginning of typescript 🔴
//@ts-ignore
let numb = 5;
numb = 10;
// Topic 2: Configuration file in typescript 🔴
// Todo 1: Write a program to add two numbers.
// Todo 2: How to catch Errors & solve it?
// Todo 3: TS Configuration file => that is used to specify various compiler options and settings for your TypeScript project. This file allows you to define how TypeScript should compile your code,
// tsc --init => to initialize the ts configuration file
// tsc --noEmitOnError filename.ts => if you use --noEmitOnError flag the .js file will not be created if there is an error in your .ts file but first you've to enable --noEmitOnError in your ts configuration file
const sum = (a, b) => {
    return a + b;
};
console.log(sum(1, 5));
// Topic 3: Type Annotations in typescript 🔴
// Type Annotation => is a way of specifying the desired type of a variable, function parameter, or function return value.
// Defining the type of variables
// Strings
let dish = "biryani";
let addition = 43;
let bool = true;
let firstName = "Aamir";
let lastName = "Mir";
let fullName = firstName + " " + lastName;
console.log(fullName);
// Numbers
let inte = 30;
let inte2 = 50;
let addInte = inte + inte2;
console.log(addInte);
// Assignments
// 1: Declear a variable longText of type string and assign it a long sentence. Extract the first 10 characters from longText and store them in a variable called shorttext
let longText = "My name is aamir and I'm a software developer I've been coding for 2 years";
let shortText = longText.slice(0, 10);
console.log(shortText);
// 2: Declare two variables str1 and str2 of type string and assign them different sentences. Compare the two strings and store the result (true of false) in a variable called areEqual.
let str1 = "Aamir";
let str2 = "Mir";
let areEqual = str1 === str2 ? true : false;
console.log(areEqual);
// 3: Write a typescript function called isDivisibleBy4And8 takes a number as a parameter and returns if the number is divisible both 4 and 8.
const isDivisibleBy4And8 = (userInput) => {
    return (userInput % 4 === 0 && userInput % 8 === 0) ? true : false;
};
console.log(isDivisibleBy4And8(80));
// 4: Write a typescript function called isEven that takes a number as a parameter and returns true if the number is even and false otherwise.
const isEven = (userNum) => {
    return userNum % 2 === 0 ? true : false;
};
console.log(isEven(50));
// BigInits in typescript
let bigInteger1 = 9007199254740991433243n;
let bigInteger2 = 9007199254740991433243n;
let addBigIntegers = bigInteger1 + bigInteger2;
console.log(addBigIntegers);
// Topic 4: Differences Between ANY vs UNKNOWN Types 🔴
// Any type => The any type is the most flexible type in typescript. It essentially turns off all type checking for the variables or expresssions it is applied to
// Use Cases of "Any type" => Working with dynamic data: when dealing with data from dynamic sources like user inputs, network responses, or deserialized JSON objects, the any type can be useful.
// Migration from JavaScript: When migrating an existing JavaScript code to TypeScript, using the any type can be a convenient way to quickly defined variables and functions without immediately specifying their type
// e.g
let myNum = 5;
myNum = "Aamir";
myNum = true;
console.log(myNum);
// myNum.map((e:number)=>{  // this will throw you error because you can't use map() on boolean
//     console.log(e)
// }) 👈👈👈
// Unknown type => is a safer alternative to "any" because it still enforces type checking and type safety. Variables of type "unknown" can hold values of any type, but you must perform type checks or type assertions before using them in specific ways.
// e.g 1
let myStr2 = 5;
myStr2 = ["Aamir", "rohan"];
if (Array.isArray(myStr2)) { // If you try to take any action before checking its type it will throw you error, so you've to check the type of unknown variable before applying a method on it
    myStr2.forEach((e) => {
        console.log(e);
    });
}
// e.g 2
let noIdea = 10;
noIdea = "This is a car"; // If you try to take any action before checking its type it will throw you error, so you've to check the type of unknown variable before applying a method on it
if (typeof noIdea === "string") {
    noIdea.slice(0, 5);
}
// Topic 5: Functions in TypeScript 🔴
const sayWelcomeToUser = (user) => {
    return `Welcome ${user}`;
};
console.log(sayWelcomeToUser("Aamir"));
// Practice 1: Find a string is palindrome or not
const isPalindrome = (data) => {
    const checkPalin = data.split("").reverse().join("");
    return data === checkPalin;
};
console.log(isPalindrome("123454321"));
// Practice 2: Write a function to find average of numbers
const calculateAverage = (arr) => {
    const total = arr.reduce((acc, currentVal) => {
        return acc + currentVal;
    }, 0);
    return total / arr.length;
};
console.log(calculateAverage([23, 53, 23, 53, 65]));
// Practice 3: Write a function to find maxValue from an array
const maxValue = (max) => {
    const maxVal = Math.max(...max);
    return maxVal;
};
console.log(maxValue([34, 53, 100, 64, 64,]));
// Topic 5: Type Inference in TypeScript 🔴
// Type inference in typescript refers to the ability of the typescript compiler to automatically determine and assign types of variables, expressions, and function return values based on their usage and context in the code.
// What are some best practices for using type inference in typescript?
/*
1: Use type reference for simple cases where the assigned value clearly indicates the intended type.
2: When in doubt, provide explicit type annotations to make your intentions clear
3: Avoid relying too heavily on type inference when the assigned value is complex or ambiguous.
4: Regularly review and refactor your code to ensure that inferred types align with your intentions
*/
// Topic 5: Optional and Default Parameters In TypeScript 🔴
// Default Parameters
const defaultParams = (name, age = 19) => {
    return `My name is ${name} and my age is ${age}`;
};
console.log(defaultParams("Aamir"));
// Optional Parameters
const optionalParams = (name, role) => {
    if (role) {
        return `My name is ${name} and my role is ${role}`;
    }
    else {
        return `My name is ${name}`;
    }
};
console.log(optionalParams("Aamir", "Programmer"));
// Topic 6: Arrays in TypeScript 🔴
// In TypeScript we can create and initialize arrays using various approaches
// a) Using square brackets
let arr1 = [30, 40, 20, 40, 20];
// b) Using the Array constructor
let arr2 = new Array("Aamir", "Aliyan", "Rahul", "Roshan");
// c) Using the Array.of method
let arr3 = Array.of({ name: "Aamir", role: "Programmer" }, { name: "Rahul", role: "Developer" }, { name: "Ayan", role: "Software Developer" });
// d) Bonus method
let arr4 = [true, false, false, true];
// Accessing elements using index
console.log(arr1[1]);
// Topic 7: Objects In TypeScript 🔴
// e.g 1
let person = {
    name: "Aamir",
    age: 19,
    isStudent: true
};
person.isStudent = false;
console.log(person);
// e.g 2
let person2 = {
    name: "Aamir",
    age: 19,
    address: {
        city: "Gilgit",
        postalCode: 923,
        country: "Pakistan"
    },
    role: "Software Developer",
    isStudent: true
};
console.log(person2);
const student = {
    name: "Aamir",
    age: 19,
    roleNo: 19,
    gender: "Male",
    isRich: true
};
const student2 = {
    name: "Rohan",
    age: 20,
    roleNo: 15,
    gender: "Male",
    isRich: false
};
const student3 = {
    name: "Aleena",
    age: 22,
    roleNo: 30,
    gender: "Female",
    isRich: true
};
const product1 = {
    name: "GTX 1050 ti",
    price: 50000,
    quantity: 4
};
const calculateTotalPrice = (product) => {
    return product.price * product.quantity;
};
console.log(calculateTotalPrice(product1));
const person1 = {
    name: "Aamir",
    age: 20,
    gender: "Male",
    greet: (msg) => {
        return `Welcome ${person1.name}, your age is ${person1.age} and you're a ${person1.gender} and your message is ${msg}`;
    }
};
console.log(person1.greet("Hi bro how are you"));
// Topic 10: Enums In TypeScript 🔴
// Enums in TypeScript are commonly used when you want to represent a set of related values and choose one value from multiple options. Enums provide a convenient way to defineea set of named values and associate them with specific meanings.
// In TypeScript, when enum constants are not explicitly assigned numeric values, they are automatically assigned incremental numeric values starting from 0. The default numeric value for the first enum constant is 0, and subsequent enum constants receive values incremented by 1.
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const stu1 = {
    name: "Aamir",
    age: 20,
    role: Roles.admin
};
const stu2 = {
    name: "Aliyan",
    age: 19,
    role: Roles.user
};
const isAdmin = (objs) => {
    return objs.role === "admin" ? `${objs.name} is allowed to access this resource` : `${objs.name} is not allowed to access this resource`;
};
console.log(isAdmin(stu1));
console.log(isAdmin(stu2));
const personInfo = ["Aamir", 19, true, "male"];
const personInfo2 = ["Ayesha", 22, false, "female"];
const tellMePersonInfo = (personInformation) => {
    const [name, age, isStudent, gender] = personInformation;
    return `Person name is ${name} and ${gender === "male" ? "his" : "her"} age is ${age} and ${gender === "male" ? "he" : "she"} is ${isStudent ? "a" : "not a"} student `;
};
console.log(tellMePersonInfo(personInfo));
console.log(tellMePersonInfo(personInfo2));
const pro1 = ["LCD", 3000, 5];
const pro2 = ["Graphics Card", 60000, 4];
const showProductDetails = (prod) => {
    const [pro1Name, pro1Price, pro1Quantity] = prod;
    return `\nProduct name: ${pro1Name}\nProduct price: ${pro1Price}\nProduct Quantity: ${pro1Quantity}\n`;
};
console.log(showProductDetails(pro1));
console.log(showProductDetails(pro2));
pro1.push("Aamir"); // You can add a array method on tuple to modify it until you pass the "readOnly" keyword. if you will pass "readOnly" you will not be able to modify the array
console.log(pro1);
const specialPerson = ["Aamir", 19, true];
// specialPerson.unshift() // You can't modify the tuple because you've passed the readOnly keyword
// Topic 12: Union and Intersection In TypeScript 🔴
// Union types allow you to specify that a variable can hold values of multiple types. You use the | (pipe) symbol to define a union
// In TypeScript, when using a union type, it is essential to ensure that at least one of the types in the union includes all the required properties. Failure to do so will result in a type error during complilation.
// Union Example
const unionExample = (val) => {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    else if (typeof val === "number") {
        return val + 10;
    }
    else if (typeof val === "boolean") {
        return !val;
    }
    else {
        return new Error("Input data is invalid");
    }
};
console.log(unionExample(5));
const boy = {
    name: "Aamir",
    age: 19,
    id: 928858238,
};
console.log(boy);
const girl = {
    name: "Ayesha",
    age: 20,
    isStraight: true,
};
const girlInfor = {
    phoneNo: 349382958,
    address: "Gilgit",
    isRich: true
};
const girlInfo = (girll, girllInfo) => {
    // return `Name is ${girll.name} age is ${girll.age} phone no is ${girllInfo.phoneNo}`
    return { ...girll, ...girllInfo };
};
const getInfo = girlInfo(girl, girlInfor);
console.log(getInfo);
// Topic 13: Generics In TypeScript 🔴
// Generics in TypeScript allow you to create reusable components or functions that can work with multiple data types
// Without Using Generics
const adding = (a, b) => {
    return `${a} ${b}`;
};
console.log(adding("Aamir", "Mir"));
console.log(adding(50, 30));
console.log(adding(true, false));
// Using the generic function with different types
const generics = (value) => {
    return value;
};
console.log(generics("Aamir"));
console.log(generics(50));
console.log(generics(true));
// Topic 14: Solving Function Overloading In TypeScript 🔴
// IMP: when we use generic and non generic type together then while calling the function we need to define the type in a manner but with non generics we don't 
const genericExample = (value, value2, value3) => {
    return `First value is ${value}\nSecond value is ${value2}`;
};
console.log(genericExample(40, "Aamir", true));
// 
const genericExample2 = (age, name) => {
    return `Name is ${name} age is ${age}`;
};
console.log(genericExample2(40, "Rohan"));
const car = {
    name: "Ferrari",
    speed: "320kmph",
    price: 90393939,
    isExpensive: true
};
const getCarDetails = (carr) => {
    const { name, speed, price } = carr;
    return `${name} speed is ${speed} and it's price is ${price}`;
};
console.log(getCarDetails(car));
// Topic 16: Object Oriend Programming In TypeScript 🔴
// A class is terms of OOP is a blueprint for creating objects
// A class is like a blueprint for creating similar things.
// In TypeScript, there is a convention to use PasalCase(also known as UpperCamelCase) fro class names. This means that class names should start with a capital letter and each subsequent word in the class name should also begin with a capital letter.
class Bike {
    names;
    prices;
    speedd;
    has2Tiress;
    constructor(name, price, speed, has2Tires) {
        this.names = name;
        this.prices = price;
        this.speedd = speed;
        this.has2Tiress = has2Tires;
    }
    introduce() {
        return `${this.names} price is ${this.prices} and it's speed is ${this.speedd}`;
    }
}
const bike1 = new Bike("Honda", 500000, "320kmph", true);
const bike2 = new Bike("CD", 40000, "120kmph", true);
console.log(bike1.introduce());
console.log(bike2);
// Topic 17: Inheritance In TypeScript 🔴
// Inheritance allows a class to reuse the functionality of an existing class without rewriting it.
// Inheritance is a mechanism in which one class acquires the property of another class. For example, a child inherits the traits of his/her parents
class SecondBike extends Bike {
    color;
    weight;
    constructor(name, price, speed, has2Tires, bikeColor, bikeWeight) {
        super(name, price, speed, has2Tires);
        this.color = bikeColor;
        this.weight = bikeWeight;
    }
    introduce() {
        return `${super.introduce()} and the color is ${this.color} and the weight is ${this.weight}`;
    }
}
const bike3 = new SecondBike("Kawasaki", 550000, "420kmph", true, "Red", "100kg");
console.log(bike3.introduce());
// Topic 18: Access Modifiers (Public, Protected, Private) In TypeScript 🔴
// Parent Class    // Child Class        // Outside Class
// Public         ✅        /       ✅          /          ✅
// Protected      ✅        /       ✅          /          ❌
// Private        ✅        /       ❌          /          ❌
class Cycle {
    name; // If you use public access modifier you can use the property in Parent class, Child Class and Outside Class
    price; // If you use public access modifier you can use the property in Parent class and Child Class but you can't use it in outside class 
    weight; // If you use public access modifier you can only the property in parent class
    constructor(cycleName, cyclePrice, cycleWeight) {
        this.name = cycleName;
        this.price = cyclePrice;
        this.weight = cycleWeight;
    }
    showDetails() {
        return `${this.name} price is ${this.price} and it's weight is ${this.weight}`;
    }
}
class SecondCycle extends Cycle {
    color;
    modelNo;
    constructor(cycleName, cyclePrice, cycleWeight, cycleColor, cycleModelNo) {
        super(cycleName, cyclePrice, cycleWeight);
        this.color = cycleColor;
        this.modelNo = cycleModelNo;
    }
    showDetails() {
        return `${super.showDetails()} and it's color is ${this.color} and the model no is ${this.modelNo}`;
    }
}
const cycle1 = new Cycle("Honda", 30000, "30kg");
const cycle2 = new SecondCycle("Honda", 30000, "30kg", "Red", 349);
console.log(cycle1.showDetails());
console.log(cycle2.showDetails());
// Topic 19: Shorthand Properties for Classes In TypeScript 🔴
class Food {
    name;
    price;
    quantity;
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
const food1 = new Food("Biryani", 400, 3);
console.log(food1);
// Topic 20: Getter and Setter in TypeScript
// In TypeScript classes, you can use getter and setter methods to control the access and modification of class properties. Getter methods allow you to retrive the value of a property, while setter methods allow you to set the value of a property with additional logic or validation.
// The get method doesn't take any parameters, and the set method takes only one parameter
class Drink {
    drinkPrice;
    drinkColor;
    drinkName;
    constructor(drinkPrice, drinkColor) {
        this.drinkPrice = drinkPrice;
        this.drinkColor = drinkColor;
        this.drinkPrice = drinkPrice;
        this.drinkColor = drinkColor;
    }
    set validateDrink(name) {
        if (name.toLowerCase() === "alcohol") {
            throw new Error("Your drink is harmful");
        }
        else {
            this.drinkName = name;
        }
    }
    get drinkNaam() {
        if (this.drinkName === undefined) {
            throw new Error("Age is not defined");
        }
        return this.drinkName;
    }
}
const drink = new Drink(5000, "yellow");
// drink.validateDrink = "Alcohol"  // Output will be an error of "Drink is harmful"
// console.log(drink.drinkNaam)  // Output will be "Alcohol" if it's defined
console.log(drink);
// Topic 20: KBs Converter Using Classes In TypeScript 🔴
class Converter {
    kbs = 0;
    set setKbs(kbVal) {
        if (kbVal <= 0) {
            throw new Error("Please enter a valid number");
        }
        this.kbs = kbVal;
    }
    get getKbs() {
        return this.kbs;
    }
    get kbsToMbs() {
        return this.kbs / 1024;
    }
    get kbsToGbs() {
        return this.kbs / 1024 / 1024;
    }
}
const kbs = new Converter();
kbs.setKbs = 5032859032;
console.log(`${kbs.getKbs} KBs = ${kbs.kbsToMbs.toFixed(1)} MBs`);
console.log(`${kbs.getKbs} KBs = ${kbs.kbsToGbs.toFixed(1)} GBs`);
// Topic 21: Password Generator Using Classes In TypeScript 🔴
class PasswordGenerator {
    randomCharacters = "";
    set setRandomCharacters(val) {
        if (val.length <= 0) {
            throw new Error("Please provide a valid data");
        }
        this.randomCharacters = val;
    }
    get weakPassword() {
        const password = [];
        let getLength = Math.floor(Math.random() * this.randomCharacters.length - 1);
        for (let i = 0; i < 8; i++) {
            password.push(this.randomCharacters[getLength].toLowerCase());
            getLength = Math.floor(Math.random() * this.randomCharacters.length - 1);
        }
        return password.join("");
    }
    get normalPassword() {
        const password = [];
        let getLength = Math.floor(Math.random() * this.randomCharacters.length - 1);
        for (let i = 0; i < 20; i++) {
            password.push(this.randomCharacters[getLength]);
            getLength = Math.floor(Math.random() * this.randomCharacters.length - 1);
        }
        return password.join("");
    }
    get strongPassword() {
        const password = [];
        let getLength = Math.floor(Math.random() * this.randomCharacters.length - 1);
        for (let i = 0; i < 35; i++) {
            password.push(this.randomCharacters[getLength]);
            getLength = Math.floor(Math.random() * this.randomCharacters.length - 1);
        }
        return password.join("");
    }
}
const password = new PasswordGenerator();
password.setRandomCharacters = "ibvb#3985%#v5j3vK596JD64Fd9dS:jzdgwKOIegisdjslkgd:LDSF)#&@*(%EW";
console.log(`Weak Password = ${password.weakPassword}`);
console.log(`Normal Password = ${password.normalPassword}`);
console.log(`Strong Password = ${password.strongPassword}`);
// Topic 21: Static Keyword In Classes In TypeScript 🔴
// In TypeScript, static methods and properties belong to the class itself rather than to instances of the class. By making methods and properties static, we can access them directly from the class without needing to instance-specific data.
class Calculation {
    static addition(a, b) {
        return a + b;
    }
    static subtraction(a, b) {
        return a - b;
    }
    static multiplication(a, b) {
        return a * b;
    }
    static division(a, b) {
        return a / b;
    }
}
console.log(Calculation.addition(5, 5));
console.log(Calculation.subtraction(5, 5));
console.log(Calculation.division(10, 2));
console.log(Calculation.multiplication(2, 9));
// Topic 22: Abstract Classes In TypeScript 🔴
// Abstract classes provide a way to define common properties and methods that multiple derived classes can share. This promotes code reuse and helps establish a common interface for related classes.
// Abstract class cannot be instantiated
// Abstract classes focus on class inheritance and sharing common functionality,
// whereas the useContext hook in React focuses on managing global state and allowing components to consume that state.
// Example: Shape Hierarchy
// Suppose you're building a graphics application, and you want to create a hierarchy of different shapes. You can use an abstract base class shape to define common properties methods that all shapes share.
// Practice time
// You need to do the same for Square and Rectangle
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    color;
    radius;
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
const circle = new Circle("red", 5);
console.log(circle.calculateArea());
const movie = {
    name: "Harry Potter",
    actors: ["Harray", "Emmily Watson", "Aamir"],
    budget: 93285933,
    hero: "Aamir",
    heroine: "Aamiri"
};
console.log(movie);
const film = {
    name: "Krrish",
    actors: ["Aamir", "Rahul", "Aliyan"],
    budget: 918595385,
    hero: "Aamir",
    heroine: "Aamera"
};
console.log(film);
// Interface With Classes
class FilmBio {
    name;
    actors;
    budget;
    hero;
    heroine;
    constructor(name, actors, budget, hero, heroine) {
        this.name = name;
        this.actors = actors;
        this.budget = budget;
        this.hero = hero;
        this.heroine = heroine;
    }
}
const filmBio = new FilmBio("Dragon Ball Z", ["Aamir", "Rahul"], 39528532898, "Aamir", "Aamira");
console.log(filmBio);
// Topic 24: Type Safety with typeof In TypeScript 🔴
const checkData = (data) => {
    if (typeof data === "object") {
        let vals = data.map((val) => val * 3);
        return vals;
    }
    else {
        return data;
    }
};
console.log(checkData("Aamir"));
console.log(checkData([3, 5, 2, 5]));
