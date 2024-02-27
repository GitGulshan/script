/*
// var

function fun1() {
  // hoisting possible in var
  console.log(a);
  var a = 4;
  console.log(a);
}

// fun1();

// let

function fun2() {
  // no hoisting possible

  let a;
  console.log(a);
  a = 5;
  console.log(a);
}

// fun2();

// const

function fun3() {
  // hoisting not in const
  const a = 5;
  console.log(a);
  a = 0;
  console.log(a);
}

// fun3();

function fun4() {
  let a = 1;
  var b = 10;
  const c = a / b;
  console.log(c);
}

// fun4();

console.log("hello world");
// console.warn("heyyy");
// console.assert("ASSETS");
// console.clear();
// console.timeStamp();

//variables

// var, let , const

// let a = 20;
// a = 209;
// console.log(a);

//const

// const a = 2;
// console.log(a);

//var

var a = 4;
console.log(a);

const score = 3;

// score = 30;

console.log(score);

//dataTypes

//string , number, boollen, null , undefined.

const name = "Gulshan";
const age = 26;
const isChodu = false;
const x = null;
const y = undefined;
const rating = 4.5;

// console.log(y);
// console.log(age);
// console.log(nam);

// console.log(typeof age);
// console.log(typeof isChodu);
// console.log(typeof y);
// console.log(typeof x);
// console.log(typeof nam);
// console.log(typeof rating);

// Concatenation

//1st method
console.log(`My name is ` + name + `and my age is ` + age);

//2nd method or Templete sting

console.log(`My name is  ${name} and my age is ${age}`);

const hello = `my name is ${name} and my age is ${age}`;

console.log(hello);

//String length

const s = "hello world this is the new coder";

console.log(s.length);

//UPPER CASE-
console.log(s.toUpperCase());
//LOWER  CASE-
console.log(s.toLowerCase());

//CAMELCASE CASE-
console.log(s.toLocaleUpperCase());

//Substring

console.log(s.substring(0, 20).toUpperCase());
console.log(s.substring(0, 11).toLowerCase());

//split string

console.log(s.split(""));

// it give a normal array and where lenght is 1.
console.log(s.split());

//string to take a array from it.
const t = "bike, cars, paisa, travel, "; // lenght is 5
const r = "bike, cars, paisa, travel "; // lenght is 4

console.log(t.split(","));
console.log(r.split(","));



*/
