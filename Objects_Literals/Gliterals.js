// // // object literals is basically based on key value pair..

// // const person = {
// //   firstName: "Gulshan",
// //   lastName: "Sahu",
// //   contact: "784594",
// //   laptop: "hp victus 15p",
// //   email: {
// //     website: "gmail",
// //     username: "gulshansahu162gmail.com",
// //   },
// //   funTime: ["sports", "cooking", "cleaning", "movies"],
// //   address: "bangalore",
// // };

// // console.log(person);

// // // add properties..

// // person.addskills = "frontend developer"; // true.... --kyunn
// // console.log(person);
// // // find somthing particular

// // console.log(person.laptop);
// // // we can log more than one thing
// // console.log(person.laptop, person.email);
// // // select values in array then
// // console.log(person.funTime[1]);
// // console.log(person.email.username);

// // //Destructing

// // const {
// //   firstName,
// //   lastName,
// //   laptop,
// //   email: { username },
// // } = person;

// // console.log(laptop, lastName, username);

// // //todos

// // const list = [
// //   {
// //     id: "1",
// //     priority: "finish js by traversy media",
// //     isFinished: "false",
// //   },
// //   {
// //     id: "2",
// //     priority: "loops is left",
// //     isFinished: "false",
// //   },
// //   {
// //     id: "3",
// //     priority: "array done",
// //     isFinished: "True",
// //   },
// // ];

// // console.log(list[0]);

// // // if you need to see the array's object value

// // console.log(list[1].priority);

// // const person = {
// //   fullname: "nishant",
// //   lastName: "sahu",
// //   street: "1st cross 1st satge",
// //   contact: "4512876",
// //   age: "26",
// //   hobbies: ["travel", "coding", "carEnthusiast", "music"],
// //   address: {
// //     /// address is an  another object inside the object
// //     city: "Bangalore",
// //     area: "whitefield",
// //   },
// // };

// // console.log(student.age);

// // student.rollno = "303502216023";

// // console.log(student);

// // console.log(student.hobbies[2]);

// // const {
// //   report,
// //   followup,
// //   drName,
// //   test: { bloodTest },
// // } = patient;

// // console.log(bloodTest);
// // const {
// //   fullname,
// //   lastName,
// //   address: { area },
// // } = person;

// // console.log(person);

// const Todos = [
//   {
//     Sno: 100,
//     Tasks: "javascript completed",
//     IsCompleted: true,
//   },
//   {
//     Sno: 200,
//     Tasks: "ARE YOU HIGH",
//     IsCompleted: false,
//   },
//   {
//     Sno: 300,
//     Tasks: "HAD BATH ON TIME TODAY",
//     IsCompleted: true,
//   },
//   {
//     Sno: 400,
//     Tasks: "is today going to gym",
//     IsCompleted: false,
//   },
//   {
//     Sno: 500,
//     Tasks: "html completed",
//     IsCompleted: true,
//   },
//   {
//     Sno: 600,
//     Tasks: "do you smoke",
//     IsCompleted: false,
//   },
//   {
//     Sno: 700,
//     Tasks: "do you cook",
//     IsCompleted: true,
//   },
//   {
//     Sno: 800,
//     Tasks: "you live in delhi",
//     IsCompleted: false,
//   },
// ];

// // console.log(Array.isArray(Todos));

// // for (let goal of Todos) {
// //   console.log(goal.Tasks);
// //   console.log(goal.IsCompleted);
// // }

// // for (i = 0; i < Todos.length; i++) {
// //   console.log(Todos[2].Sno);
// // }

// // Todos.forEach((elements) => {
// //   console.log(elements);
// // });

// const TimeLine = Todos.map((dairy) => {
//   return {
//     Tasks: dairy.Tasks,
//     IsCompleted: dairy.IsCompleted,
//   };
// });

// console.log(TimeLine);

// const Constancy = TimeLine.filter((days) => {
//   return days.IsCompleted === false;
// });
// console.log(Constancy);
