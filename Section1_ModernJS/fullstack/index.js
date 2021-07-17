// const name = "Ryan";
// // name = "Zen";
// alert(name);

// if(true){
//     let name = 'Ryan';
//     alert(name);
// }

/*
let fname = 'Ryan';
let lname = 'D';
let age = prompt("Guess Ryan's age...");

//old way
// let result = fname + ' ' + lname + ' ' + age + ' years old';

// alert(result);

// using template string
// let result = `what ever ... '' ][1] ]\ \ `;
let result = `${fname} ${lname} is ${age} years old`
alert(result);

*/

/*

function welcome(user="Mystery person", message= "Godday"){
    alert(`Hello ${user}, ${message}`);
}

// welcome("Ryan", "Good Morning");
welcome();
*/

/*
function greeting(message){
    return alert(`${message} everyone!`);
}

// let grerting = message => alert(`${message} everyone!`);

let createBlog = (title, body) => {
    if(!title){
        throw new Error('A title is required');
    }
    if(!body){
        throw new Error('Body cant be empty');
    }

    return alert(`${title} - ${body}`);
}

// greeting('Good Morning');

createBlog('Blog Title', 'Blog Body');
*/

/*
let nepal = {
    mountains : ['Everest', 'Fish Tail', 'Annapurna'],

    printWithDash: function(){
        // console.log('inside printwithDash', this);
        setTimeout(()=>{
            console.log(this.mountains.join(" - "));
            // console.log("Inside setTimeout",this);
        }, 3000)
    }
}

// alert(nepal.mountains);
nepal.printWithDash()
*/
/*
let thingsToDo = {
    morning: "Exercise",
    afternoon: "work",
    evening: "Code",
    night : ["Sleep", "Dream"]

}

let {morning, afternoon} = thingsToDo;

morning = "Run";

console.log(morning, ' - ', afternoon);


let uniStudent = ({name, university}) => {
    // let {name, university} = student
    console.log(`${name} from ${university}`);
}

uniStudent({
    name : 'Ryan',
    university: 'University of Sydney'
})
*/
/*
// let [firstMountain] =  ['Everest', 'Fish Tail', 'Annapurna']
// let [,secondMountain] = ['Everest', 'Fish Tail', 'Annapurna'];
let [, ,thirdMountain] = ['Everest', 'Fish Tail', 'Annapurna'];
// console.log(firstMountain); // Everest
// console.log(secondMountain); //Fish Tail
console.log(thirdMountain); //Annapurna


var name = "Everest";
var height = 8848;

var output = function(){
    console.log(`Mt. ${this.name} is ${this.height} meter tall`);
}


var adventureClimbing = {
    name : "Everest",
    height : 8848,
    output(){
        console.log(`Mt. ${this.name} is ${this.height} meter tall`);
    }
}

// var adventureClimbing = {name, height, output};
adventureClimbing.output();

*/

/*

var mountains = ['Everest', 'Fish Tail', 'Annapurna'];
var mountainsFromJapan = ['Fuji'];

var allMountains = [...mountains, ...mountainsFromJapan];

console.log(allMountains);
*/

/*
var day = {
    breakFast: 'toast with milk',
    lunch : 'rice with chicken curry'
}

var night = {
    dinner : 'noodle soup'
}

var picnic = {...day, ...night};

console.log(picnic);

*/

/*
var rivers = ['Sunkoshi', 'Tamakoshi', 'saptakoshi'];
var [first, ...rest] = rivers;

console.log(first);
console.log(rest);
*/

/*
function Holiday(destination, days){
    this.destination = destination
    this.days = days
}

Holiday.prototype.info = function(){
    console.log(this.destination + " ! " + this.days + " days");
}

var Nepal = new Holiday('Nepal', 30);
console.log(Nepal.info());
*/

class Holidays{
    constructor(destination, days){
        this.destination = destination;
        this.days = days;
    }

    info(){
        console.log(`${this.destination} will take ${this.days} days`);
    }
}

// console.log(Holidays.prototype);
const trip = new Holidays("Kathmandu, Nepal",30);
trip.info();

//sub class
class Expedition extends Holidays{
    constructor(destination, days, gear){
        super(destination, days);
        this.gear = gear;
    }

    // overriding the method
    info(){
        super.info();
        console.log(`Bring your ${this.gear.join(" and your ")}`);
    }
}

const tripWithGear = new Expedition("Everest", 30, ["Sunglasses", "Flags", "Camera"]);
tripWithGear.info();