// // CONSTRUCTOR

// // function Person(firstName, lastName, location, dob) {
// //   this.firstName = firstName;
// //   this.lastName = lastName;
// //   this.location = location;
// //   this.dob = new Date(dob);
// // }

// // // INSTANTIATE OBJECTS

// // const person1 = new Person("AKASH", "GOYAL", "RAIPUR", "5-14-2009");
// // const person2 = new Person("debu", "singh", "durg", "8-14-2019");

// // console.log(person1, person2);
// // console.log(person1.lastName);

// ///

// /// the function is also comes in the console area

// // function Person(firstName, lastName, location, dob) {
// //   this.firstName = firstName;
// //   this.lastName = lastName;
// //   this.location = location;
// //   this.dob = new Date(dob);
// //   this.getBirthYear = function () {
// //     return this.dob.getFullYear;
// //   };
// //   this.getFullName = function () {
// //     return `${firstName} ${lastName}`;
// //   };
// // }

// // // INSTANTIATE OBJECTS

// // const person1 = new Person("AKASH", "GOYAL", "RAIPUR", "5-14-2009");
// // const person2 = new Person("debu", "singh", "durg", "8-14-2019");

// // console.log(person1, person2);
// // console.log(person1.lastName);

// ///PROTOTYPE

// // function Person(firstName, lastName, location, dob) {
// //   this.firstName = firstName;
// //   this.lastName = lastName;
// //   this.location = location;
// //   this.dob = new Date(dob);
// //   // this.getBirthYear = function () {
// //   //   return this.dob.getFullYear;
// //   // };
// //   // this.getFullName = function () {
// //   //   return `${firstName} ${lastName}`;
// //   // };

// //   Person.prototype.getBirthYear = function () {
// //     return this.dob.getFullYear;
// //   };

// //   Person.prototype.getFullName = function () {
// //     return `${firstName} ${lastName}`;
// //   };
// // }

// // // INSTANTIATE OBJECTS

// // const person1 = new Person("AKASH", "GOYAL", "RAIPUR", "5-14-2009");
// // const person2 = new Person("debu", "singh", "durg", "8-14-2019");

// // console.log(person1, person2);
// // console.log(person1.lastName);

// // CLASS
// class Person {
//   constructor(firstName, lastName, location, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.location = location;
//     this.dob = new Date(dob);
//   }

//   getBirthYear() {
//     /// this is called syntactic sugar
//     return this.dob.getFullYear;
//   }
//   getFullName() {
//     /// this is called syntactic sugar
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// // // INSTANTIATE OBJECTS

// const person1 = new Person("AKASH", "GOYAL", "RAIPUR", "5-14-2009");
// const person2 = new Person("debu", "singh", "durg", "8-14-2019");

// console.log(person1, person2);
// console.log(person1.lastName);
// console.log(person2.lastName, person2.dob);
