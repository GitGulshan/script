// /// HIGH ORDER ARRAY METHODS

// // FOR EACH, MAP, FILTER

// // for each

// const surname = [
//   {
//     id: 1,
//     last: "sahu",
//     mid: "kumar",
//     isIndian: false,
//   },
//   {
//     id: 2,
//     last: "rajput",
//     mid: "singh",
//     isIndian: true,
//   },
//   {
//     id: 7,
//     last: "sarkar",
//     mid: "gujrati",
//     isIndian: false,
//   },
//   {
//     id: 8,
//     last: "cain",
//     mid: "tamil",
//     isIndian: false,
//   },
//   {
//     id: 9,
//     last: "skand",
//     mid: "nri",
//     isIndian: false,
//   },
// ];

// console.log(surname);

// // //foreach loop
// // surname.forEach(function (haan) {
// //   console.log(haan.last);
// // });

// // // MAP

// // const state = surname.map(function (data) {
// //   return data.mid;
// // });

// // console.log(state);

// //filter

// // const puredata = surname.filter(function (data) {
// //   return data.isIndian === true;
// // });

// // console.log(puredata);

// // multipalfunctionallity [programming] where use filter and map together
// const puredata = surname
//   .filter(function (data) {
//     return data.isIndian === true;
//   })
//   .map(function (data) {
//     return data.last;
//   });

// console.log(puredata);

const india = [
  {
    id: 1,
    capital: "mumbai",
    state: "maharastra",
    islangHindi: false,
  },
  {
    id: 2,
    capital: "raipur",
    state: "chhattisgarh",
    islangHindi: true,
  },
  {
    id: 3,
    capital: "bangalore",
    state: "karnataka",
    islangHindi: false,
  },
];

console.log(india);

// india.forEach(function (data) {
//   console.log(data.islangHindi);
// });

// const country = india.map(function (data) {
//   return "this is " + data.capital;
// });

// console.log(country);

const country = india.filter(function (data) {
  return data.state;
});

console.log(country);

const world = country.filter(function (data) {
  return data.islangHindi === true;
});

console.log(world);
