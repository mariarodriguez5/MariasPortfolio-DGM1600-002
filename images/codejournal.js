import { format, parseISO } from "https://cdn.skypack.dev/date-fns@2.23.0";

let result = format(new Date(), "dd/MM/yyyy");

let parsed = parseISO("2021-07-15T19:44:03.727Z");

console.log(format(parsed, "dd/MM/yyyy"));

/* Variables - containers that store values */

var name; // a declared variable, but not initialized (no value) and it's in the global scope (BAD)

let foo; // a declared variable that can be changed

const bar = "Bar"; // a declared variable that cannot be changed - short for 'constant'
// '=' is the assignment operator, read it as "is assigned the value of..."

const ANSWER = 42;

// Strings

let string1 = "Hello World!";

let string2 = "Hello Utah!";

let string3 = new String("Hello New World!");

// Numbers

let myNum = 239874928734;

let myNum2 = 75.43;

"1" == 1; // true, because of type coercion and loose equality checking
"1" === 1; // false because this is strict equality checking

// Boolean

let myBool = false;

// Array

let myArray = []; // this is an empty array

//              0     1      2        3     4
let myArray2 = [42, "Bob", myBool, ANSWER, true];

let secondElement = myArray2[1];

let lastItem = myArray2[myArray2.length - 1];

myArray2.push("Thor"); // added an element to the end of myArray2

myArray2.unshift("Hello World!");

let myLongString =
  "woiru4875875nswiufiuro248u5kdsjfowieurewlkjfoweurlehroihsfdadfasdf";

myLongString.length;

// Object

let minObject = {};

const myCar = {
  make: "Chevrolet",
  color: "Red",
  year: "1965",
  vin: "204385u4oirskjwoiru94839492owi9u390"
};

myCar.numDoors = 2;

const anotherObject = {
  wordz: ["foo", "bar", "baz"],
  car: {
    make: "McLaren",
    model: "675LT"
  },
  awesome: true
};

// Functions

function myFunction() {
  return "My greeting to you...";
}

function sumTwoThings(one, two) {
  return one + two;
}

// Arrow Functions

const theFunction = () => "I am awesome";

// a higher order function is a function that accepts another function as a parameter.
// filter, map and reduce are the most popular, but forEach, every, find, and some are also HOFs

// Filter method example.  Filter returns an array of all elements that 'pass the test'

const pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels"
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire"
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire"
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels"
  }
];

const rebels = pilots.filter((pilot) => pilot.faction === "Rebels");
const empire = pilots.filter((pilot) => {
  return pilot.faction === "Empire";
});

// Array helper method 'map'

const pilotsWithDate = pilots.map((pilot) => {
  let date = new Date();
  pilot.date = date.toLocaleDateString("en-US");
  return pilot;
});

let filmURLs = [
  "https://swapi.co/api/films/",
  "https://swapi.co/api/films/5/",
  "https://swapi.co/api/films/4/this one is longer... even longer",
  "https://swapi.co/api/films/6/",
  "https: ",
  "https://swapi.co/api/films/1/"
];

const filmLengths = filmURLs.map((filmURL) => filmURL.length);

const filmPlusMore = filmURLs.map((filmURL) => {
  let filmObj = {
    index: filmURL,
    foo: "Bar"
  };
  return filmObj;
});

// Reduce example

const swpilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22
  }
];

const totalYears = swpilots.reduce((acc, pilot) => acc + pilot.years, 0); // add all pilot years to acc

const mostExpPilot = swpilots.reduce((oldest, pilot) => {
  return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});

// Ternary operator syntax: condition ? exprIfTrue : exprIfFalse

// Now we combine map, reduce, and filter

var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true
  }
];

let jediPersonnel = personnel.filter((person) => person.isForceUser);

let jediScores = jediPersonnel.map(
  (jedi) => jedi.pilotingScore + jedi.shootingScore
);

let totalJediScore = jediScores.reduce((acc, score) => acc + score, 0);

const totalJediScoreChained = personnel
  .filter((person) => person.isForceUser)
  .map((jedi) => jedi.pilotingScore + jedi.shootingScore)
  .reduce((acc, score) => acc + score, 0);

const totalJediScoreReduced = personnel.reduce(
  (acc, person) =>
    person.isForceUser
      ? acc + person.pilotingScore + person.shootingScore
      : acc,
  0
);

function addCasenSpace(str) {
  let words = str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return words.join(" ");
}
const anotherObject = {
    wordz: ["foo", "bar", "baz"],
    car: {
      make: "McLaren",
      model: "675LT"
    },
    awesomeness: true
  };
  // Arrow Functions

  element => console.log(element) // implicit 'return' when only one line for the function
  element => {
    let foo = 'bar' + 'baxz'

    return console.log(element) // explicit 'return' because of multiple lines
  }
  (num1, num2) => num1 + num2

  // basic syntax is num => 'The Num'

// a higher order function is a function that accepts another function as a parameter.
// filter, map and reduce are the most popular, but forEach, every, find, and some are also HOFs

const theFunction = () => {
  //multiple lines use curly braces and 'return' keyword
  return "I am awesome";
};