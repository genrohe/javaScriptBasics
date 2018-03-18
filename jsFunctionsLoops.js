/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture: variables 2

/* var name = 'John';
var age = 26;

//console.log(name + age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;


console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty five';
job = 'driver';

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

//var lastName = prompt('What is the last name?');

//console.log(lastName);

alert(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');
*/

// Lecture: Operators
/*
var now = 2016
var birthYear = now - 26;

birthYear = now - 26 * 2;

console.log(birthYear);

birthYear = 2016 - 26 *2;

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
console.log(ageJohn);
console.log(ageMark);

ageJohn++;
console.log(ageJohn);

ageMark *= 2
console.log(ageMark);
*/


// Lecture: if/else statements

/*var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes'){
    console.log(name + ' is married');
} else {
    console.log(name + ' will marry soon');
}

isMarried = true;


if (isMarried) {
    console.log('Yes');
} else {
    console.log('No');
}


if(isMarried) {
    console.log('Yes');
}

if (23 === "23") {
    console.log('Something to print');
}
*/



// Lecture: boolean logic and switch

/* var age = 20;

if (age < 20) {
    console.log('John is a teen')
} else if (age >= 20 && age < 30 ){
    console.log('John is a young man');
} else {
    console.log('John is an adult');
}

var job = 'teacher';

job = prompt('What does John do?');
switch (job) {
    case 'teacher':
        console.log('John teaches');
        break;
    case 'driver':
        console.log('John drives a cab');
        break;
    case 'cop':
        console.log('John fights crime');
        break;
    default:
        console.log('John does something else'); 
} */

// Coding Challenge

/* let heightJohn = 170;
let ageJohn = 20;

let heightBob = 170;
let ageBob = 20;

let heightSara = 170;
let ageSara = 29;

let scoreJohn = heightJohn + (ageJohn * 5)
console.log(scoreJohn);

let scoreBob = heightBob + (ageBob * 5)
console.log(scoreBob);

let scoreSara = heightSara + (ageSara *5)
console.log(scoreSara);

if (scoreJohn > scoreBob && scoreJohn > scoreSara) {
    console.log('John is the winner with ' + scoreJohn)
} else if (scoreBob > scoreJohn && scoreBob > scoreSara) {
    console.log('Bob is the winner with ' + scoreBob)
} else if (scoreSara > scoreJohn && scoreSara > scoreBob) {
    console.log('Sara is the winner with ' +scoreSara)
} else
    console.log('John, Bob and Sara are tied')
*/


///
// Lecture: Functions


/*
function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);



function yearsToRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years')
    } else {
    console.log(name + ' has already retired');
    }
}

yearsToRetirement ('John', 1990);
yearsToRetirement ('Mike', 1969);
yearsToRetirement ('Mary', 1948);

*/

///
//Lecture: Statements & Expressions

//Statements perform an action, don't produce values
/* function someFun(par) {
    //code
}

if (x === 5) {
    //do something
}
//Expressions produces a value/output

var someFun = function(par){
    //code
}
3 + 4;
var x = 3;
*/

///
// Lecture: Arrays

/*var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
//push adds element to end of array

john.unshift('Mr.');
//unshift adds element to beginning of array

john.pop();
//pop removes last element from an array

john.shift();
//shift removes first element from an array
console.log(john);

//alert(john.indexOf('Smith'));
//returns the index of the element in an popup

if (john.indexOf('teacher') === -1) {
    console.log('John is not a teacher.');
}
*/

//
//Lecture: Objects

/*var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1900,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller'
john['job'] = 'programmer'

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['job'] = 'retired'
jane['isMarried'] = true;

console.log(jane);
*/

//
//Lecture: Objects and methods

//v1
/* var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        //function expression: calculateAge = key
        //same as: var calculateAge = function(yearOfBirth) {
        return 2016 - this.yearOfBirth;
    }
};


//console.log(john.calculateAge(1990));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;
console.log(john);
*/

//v2

/* 
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth 
    }
};

john.calculateAge();
console.log(john);


var mike = {
    yearOfBirth: 1950,
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
}

mike.calculateAge();
console.log(mike);

alert(mike['age']);
//empty parameter for function()

//console.log(john.family[2]);
//console.log(john.calculateAge(1990));
//console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john)
*/

//////
// Lecture: Loops

/* for (var i = 0; i < 10; i++) {
    console.log(i);
}
*/
 //var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// for loops
/* for(var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length - 1; i >= 0 ; i--) {
    console.log(names[i]);
}


//while loops
 var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

for (var i = 1; i <=5; i++) {
    console.log(i);
    
    if(i === 3) {
        break;
    }
}

for (var i = 1; i <=5; i++) {
    if(i === 3) {
        continue;
    }
     console.log(i);
}

*/

////
// Coding challenge 2

/*var years = [1950, 1960, 1970];

function calculateAge(years) {
    var age = [];
    for (var i = 0; i < years.length; i++){
    age.unshift(years[0]);
    }
    return age;
}
*/

//for(var i = 0; i < names.length; i++) {
  //  console.log(names[i]);

//