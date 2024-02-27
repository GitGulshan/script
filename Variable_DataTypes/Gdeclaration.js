// var
// hoisting possible in var only
function can1() {
  console.log(e);
  var e = 3;
  console.log(w);
  var w = 4;
  console.log(w);
}

// can1();

//let

function can2() {
  // hoisting is not possible.
  let y = 3;
  console.log(y);

  console.log(t); // t cant access before initilize
  let t = 10;
}

//can2();

// const

function can3() {
  //hoisting is not possible in const
  // d can access before initilize
  console.log(d);
  // const doesn't support hoisting
  const d = 5;
  const u = 9;
  // and also this is not working.. if d is not working---------------
  console.log(u);
}

can3();

/// var , let , const

//LET

let a = -3;

a = 0;
// this give the new a ;

console.log(a);

//VAR
// var d = 45;
// console.log(d);

// THIS GIVES UNDEFINED..
// console.log(g);
// var g = 5;
// console.log(g);

//CONST

// const duration = 10;
// duration = 28;  assignment to constatnt variable...
// console.log(duration);

//dataTypes

//string , number, boollen, null , undefined.

const FullName = "Gulshan";
const conatact = 7447048304;
const isTalented = false;
const isWorkHard = true;
const paisa = null;

const Ship = undefined;

// console.log(typeof FullName);
// console.log(typeof conatact);
// console.log(typeof Ship);
// console.log(typeof isTalented);
// console.log(typeof isWorkHard);
// console.log(typeof conatact);
// console.log(typeof paisa);

//Concatination

// console.log("My fullname is " + FullName + " and my conatact is " + conatact);

//tenplate method--
// console.log(`My fullname is  ${FullName}  and my conatact is  ${conatact}`);

const intro = `My fullname is  ${FullName}  and my conatact is  ${conatact}`;
console.log(intro);

//String length

// console.log(intro.length);

// console.log(intro.toUpperCase());
// console.log(intro.toLowerCase());

// //suBstring

// console.log(intro.substring(4, 45));

// console.log(intro.substring(3, 40).toUpperCase());

// string split

console.log(intro.split()); // length is one..

console.log(intro.split(""));

const color = "red, green, blue, black";
const dark = "red, green, blue, black,";

console.log(color.split("")); // this makes a string to every individual letter.
console.log(color.split(",")); // and the lenght is 4
console.log(dark.split(",")); // this makes an array
console.log(dark.split(",")); // the lenght is 5 beacuse of comma.

//
console.log(intro.split());
