// Arrow Functions
// Ternary Operators
// Objects
// Map, Filter...
// Async-Await, Promises, Fetch

// normal functions

export default function hello (){
    return null;
}

//  arrow function

export const hello = () => {
    return null;
} // -> here you can just drop the "default" keyword,
// also it will be more usefull while we use callback function

export const React = () => {
    // you can just return "Html elements to, which is what we do in react"
    return(
        <div></div>
    );
}

// anonyamous function
export const anonyamous = () => {
    return(
        // you can just write the function over here
        <button onClick={
            () => {
                console.log("HelloWorld!")
            }
        }>
        </button>
    )
} 

// 2. Ternary operators

// Instead of using very long if else statements you can just use ternary operators

const age = 18;
// here if age is >= 18, it prints major else minor
let name = (age >= 18) ? "major" : "Minor";
console.log(name);

// 3. Objects

// you can create objects in js

const Person = {
    name: "bobby",
    age: 22,
    isWorking: false
}
// you can access all these using dot operator

console.log(Person.name);
// And also you can use spread operator

const Person2 = {...Person}
// And if only want to change the name of the 2nd person 

const Person3 = {...Person2, name: "Abhishek"}


// 3. There are 3 major functions are there higher order functions

// map, filter, reduce

// 3.1 -> map

// Map is basically a function which is used to loop through the array and modify its elements using a callback function

const numbersMap = [10,20,30,40,50];
const add = numbersMap.map(() => {
    return numbersMap * 2;
})

console.log(add);

// 3.2 -> filter function

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the filter function to get even numbers from the array
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

// evenNumbers now contains [2, 4, 6, 8, 10]
console.log(evenNumbers);

// 3.3 Reduce function is to reduce array into single value it uses two operators accumulator and currentIndex

const arr = [4,56,797,34,2,33]

const max = arr.reduce((max, cur) => {
    if(cur > max){
        max = cur
    }
    return max;
})

console.log(max);

//  Asyn-await, promise, fetch
