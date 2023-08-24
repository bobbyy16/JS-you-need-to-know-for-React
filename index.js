// Arrow Functions
// Ternary Operators
// Objects
// Map, Filter...
// Async-Await, Promises, Fetch
//  What is the DOM? -> virtual dom
//  Import / Export Notation
//  Optional Chaining
//  Template Literals


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

// fetch, Asyn-await, promise, callback, eventloop

// you can just use fetch to fetch data from the api

const data = fetch('dummyData.json');

console.log(data.Person.name);

// async 
async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('An error occurred:', error);
      throw error;
    }
  }

//   await is used to wait for the fetch operation and the parsing of JSON data. The function will not proceed to the next line until these operations are completed.

// Callbacks are functions in JavaScript that are passed as arguments to other functions and are executed after the completion of some asynchronous operation.

function fetchData(url, callback) {
    // Simulate an asynchronous operation (e.g., fetching data from a server)
    setTimeout(() => {
      const data = { name: 'John', age: 30 };
      callback(data);
    }, 1000);
  }
  
  function processData(data) {
    console.log('Received data:', data);
  }
  
  fetchData('https://example.com/api/data', processData);
//   processData is a callback function that gets executed when the fetchData function completes its asynchronous operation and calls the callback function.

// Callback hell occurs when you have multiple nested callback functions within other callback functions, making your code deeply nested and difficult to read. This often happens when dealing with multiple asynchronous operations that depend on the results of previous operations.

readFile('file1.txt', (error, data1) => {
    if (error) {
      handleError(error);
    } else {
      processFile1(data1, (error, result1) => {
        if (error) {
          handleError(error);
        } else {
          writeFile('file2.txt', result1, (error) => {
            if (error) {
              handleError(error);
            } else {
              readFile('file2.txt', (error, data2) => {
                if (error) {
                  handleError(error);
                } else {
                  processFile2(data2, (error, result2) => {
                    if (error) {
                      handleError(error);
                    } else {
                      console.log('Final result:', result2);
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });

//   to overcome this we have promises

// Promises in JavaScript provide a way to work with asynchronous operations in a more organized and manageable manner

function getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      }, 1000);
    });
  }
  
  const promise = getUsers();
  
  promise.then((users) => {
    console.log(users);
  });

//   you can also use then catch method 
const render = () => {
    //...
  };
  
  getUsers()
    .then((users) => {
      console.log(users);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      render();
    }); //To remove this duplicate and execute the render() whether the promise is fulfilled or rejected, you use the finally() method
