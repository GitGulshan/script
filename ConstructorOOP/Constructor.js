// // CONSTRUCTOR

// //CONSTRUCTOR ME HUMESHA FUNCTION NAME CAPITAL LETTER RAHEGA.

// // function Sahu(firstName, middleName, city, dob) {
// //   this.firstName = firstName;
// //   this.middleName = middleName;
// //   this.city = city;
// //   this.dob = new Date(dob);
// // }

// // // INSTANTIATE OBJECTS

// // const sahu1 = new Sahu("Vinay", "kumar", "dmt", "2-6-2000");
// // const sahu2 = new Sahu("Nishant", "kumar", "Korba", "2-26-1997");
// // const sahu3 = new Sahu("Gulshan", "kumar", "dhamtari", "12-16-2000");

// // // console.log(sahu1.firstName, sahu2.firstName, sahu3.firstName);
// // console.log(sahu2.dob);

// // add methods which are basically just function to this person.

// // function Sahu(firstName, middleName, city, dob) {
// //   this.firstName = firstName;
// //   this.middleName = middleName;
// //   this.city = city;
// //   this.dob = new Date(dob);
// //   this.getBirthYear = function () {
// //     return this.dob.getFullYear();
// //   };
// //   this.getFullName = function () {
// //     return `${firstName} ${middleName}`; ///---- this.firstname kyu jab direct access ho raha to---- BHAIYA
// //   };
// // }

// // // INSTANTIATE OBJECTS

// // const sahu1 = new Sahu("Vinay", "kumar", "dmt", "2-6-2000");
// // const sahu2 = new Sahu("Nishant", "kumar", "Korba", "2-26-1997");
// // const sahu3 = new Sahu("Gulshan", "kumar", "dhamtari", "12-16-2000");

// // console.log(sahu1);
// // console.log(sahu1.getBirthYear());

// // console.log(sahu2.getFullName());

// /// PROTOTYPE

// // function Sahu(firstName, middleName, city, dob) {
// //   this.firstName = firstName;
// //   this.middleName = middleName;
// //   this.city = city;
// //   this.dob = new Date(dob);
// // }

// // Sahu.prototype.getBirthYear = function () {
// //   return this.dob.getFullYear();
// // };

// // Sahu.prototype.getFullName = function () {
// //   return `${this.firstName} ${this.middleName}`;
// // };

// // // INSTANTIATE OBJECTS

// // const sahu1 = new Sahu("Vinay", "kumar", "dmt", "2-6-2000");
// // const sahu2 = new Sahu("Nishant", "kumar", "Korba", "2-26-1997");
// // const sahu3 = new Sahu("Gulshan", "kumar", "dhamtari", "12-16-2000");

// // console.log(sahu1.getBirthYear());
// // console.log(sahu1);

// ///CLASS

// class Sahu {
//   constructor(firstName, middleName, city, dob) {
//     this.firstName = firstName;
//     this.middleName = middleName;
//     this.city = city;
//     this.dob = new Date(dob);
//   }

//   getBirthYear() {
//     return this.dob.getFullYear();
//   }
//   getFullName() {
//     return `${this.firstName} ${this.middleName}`;
//   }
// }

// // INSTANTIATE OBJECTS

// const sahu1 = new Sahu("Vinay", "kumar", "dmt", "2-6-2000");
// const sahu2 = new Sahu("Nishant", "kumar", "Korba", "2-26-1997");
// const sahu3 = new Sahu("Gulshan", "kumar", "dhamtari", "12-16-2000");

// console.log(sahu1.getBirthYear());
// console.log(sahu1);
