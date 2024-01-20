/*
    Project: Assignment 10: Practice with JavaScript OOP Concepts
    Date: 01/17/24
    Author: Van Do
*/

// STEP 1   ---------------------------------------------------------

//  NAMED DECLARATION - CONSTRUCTOR SYNTAX
console.log('STEP 1.')
function Cat() {
    console.log(`The cat has been created using a Named Declaration.`)
}
//  ANONYMOUS DECLARATION - CONSTRUCTOR SYNTAX
const Dog = function() {
    console.log(`The dog has been created using an Anonymous Declaration.`)  
}
//  ES6 SYNTAX
const Bird = class {
    constructor() {
        console.log(`The bird has been created using ES6 Syntax.`)    
    }
}

// STEP 2    ---------------------------------------------------------
const cat1 = new Cat();	
const dog1 = new Dog();	

console.log('STEP 2.')
const bird1 = new Bird();	

// STEP 3    ---------------------------------------------------------
console.log('STEP 3.')
class Animal {
	constructor() {
		console.log(`The animal has been created.`)
	}
}
const animal = new Animal();

// STEP 4    ---------------------------------------------------------
console.log('STEP 4.')
class Animal1 {
	constructor(species) {
        this._species = species
		console.log(`The ${this._species} has been created.`)
	}
}
const animal1 = new Animal1('turtle');

// STEP 5    ---------------------------------------------------------
console.log('STEP 5.')
function Animal2(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
    console.log(`The ${this._type} has been created.`)
}

const animal2 = new Animal2('Cat', 'Siamese', 'White', '9.5 inches', '18 inches');

// STEP 6    ---------------------------------------------------------
console.log('STEP 6.')
for (const property in animal2) {
    console.log(`${property}: ${animal2[property]}`);
}

// STEP 7    ---------------------------------------------------------
console.log('STEP 7.')
function Animal3(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;

    this.speak = function () {
        return this._type
        ? console.log(`The ${this._color} ${this._type} is barking!`)
        : console.log(`The ${this._color} ${this._type} is meowing!`);
    };
}
const animal3 = new Animal3('Dog', 'Golden Retriever','Golden', '22 inches', '40 inches');
animal3.speak();


// STEP 8    ---------------------------------------------------------
console.log('STEP 8.')
function Animal4 (type, breed, color, height, length) {
    let _type = type;
    let _breed = breed;
    let _color = color;
    let _height = height;
    let _length = length;
    let checkType = function () {
        return _type
    };
    
    this.speak = function () {
        checkType();
        console.log(`The Animal type is a ${_type}.`);
    };
} 
const animal4 = new Animal4('Cat', 'Bombay', 'Black', '11 inches', '19 inches');
animal4.speak();

// STEP 9    ---------------------------------------------------------
console.log('STEP 9.')
const text = new String("The quick brown fox jumped over the lazy dog fox");

String.prototype.findWords = function (word) {
  this._word = word;
  console.log(word);
  // SEARCH FOR WORD
  let searchText = (this._word.match(/[this._word]/g).length);
  result = alert(`The word "${word}" was found ${searchText} times in the text: "${text}"`);

  return result;
};

text.findWords('the');

