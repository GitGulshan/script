// // // /// HIGH ORDER ARRAY METHODS

// // // // FOR EACH, MAP, FILTER

// // // // for each

// // // const surname = [
// // //   {
// // //     id: 1,
// // //     last: "sahu",
// // //     mid: "kumar",
// // //     isIndian: false,
// // //   },
// // //   {
// // //     id: 2,
// // //     last: "rajput",
// // //     mid: "singh",
// // //     isIndian: true,
// // //   },
// // //   {
// // //     id: 7,
// // //     last: "sarkar",
// // //     mid: "gujrati",
// // //     isIndian: false,
// // //   },
// // //   {
// // //     id: 8,
// // //     last: "cain",
// // //     mid: "tamil",
// // //     isIndian: false,
// // //   },
// // //   {
// // //     id: 9,
// // //     last: "skand",
// // //     mid: "nri",
// // //     isIndian: false,
// // //   },
// // // ];

// // // console.log(surname);

// // // // //foreach loop
// // // // surname.forEach(function (haan) {
// // // //   console.log(haan.last);
// // // // });

// // // // // MAP

// // // // const state = surname.map(function (data) {
// // // //   return data.mid;
// // // // });

// // // // console.log(state);

// // // //filter

// // // // const puredata = surname.filter(function (data) {
// // // //   return data.isIndian === true;
// // // // });

// // // // console.log(puredata);

// // // // multipalfunctionallity [programming] where use filter and map together
// // // const puredata = surname
// // //   .filter(function (data) {
// // //     return data.isIndian === true;
// // //   })
// // //   .map(function (data) {
// // //     return data.last;
// // //   });

// // // console.log(puredata);

// // const india = [
// //   {
// //     id: 1,
// //     capital: "mumbai",
// //     state: "maharastra",
// //     islangHindi: false,
// //   },
// //   {
// //     id: 2,
// //     capital: "raipur",
// //     state: "chhattisgarh",
// //     islangHindi: true,
// //   },
// //   {
// //     id: 3,
// //     capital: "bangalore",
// //     state: "karnataka",
// //     islangHindi: false,
// //   },
// // ];

// // console.log(india);

// // // india.forEach(function (data) {
// // //   console.log(data.islangHindi);
// // // });

// // const country = india.map(function (data) {
// //   return "this is " + data.capital;
// // });

// // console.log(country);

// // const country = india.filter(function (data) {
// //   return data.state;
// // });

// // console.log(country);

// // const world = country.filter(function (data) {
// //   return data.islangHindi === true;
// // });

// // console.log(world);

// // /// arrow func.

// // const tab = [
// //   {
// //     phone: "samsung",
// //     monitor: "acer",
// //     laptop: "mac",
// //     inTable: false,
// //   },
// //   {
// //     phone: "oneplus",
// //     monitor: "lg",
// //     laptop: "rog",
// //     inTable: false,
// //   },
// //   {
// //     phone: "iphone",
// //     monitor: "mi",
// //     laptop: "legion",
// //     inTable: true,
// //   },
// // ];

// // tab.forEach(function (data) {
// //   console.log(data.laptop);
// // });

// // tab.forEach((data) => {
// //   console.log(data.phone);
// // });

// // const mee = tab.map((item) => {
// //   return item.monitor;
// // });

// // console.log(mee);

// // const you = mee.filter((value) => {
// //   return value.inTable === false;
// // });
// // console.log(you);

// // const cars = ["bwm", "ford", "audi", "bentley"];
// // const list = ["1", "2", "3", "4"];

// // const mergedArray = list.map((number, index) => `${number} - ${cars[index]}`);

// // console.log(mergedArray);

// // const cars = ["bwm", "ford", "audi", "bentley"];
// // const list = ["1", "2", "3", "4"];

// // const mergedArray = cars.concat(list);

// // console.log(mergedArray);

// const cars = ["Swift", "Polo", "Sonet", "Vitara"];
// const suv = ["Thar", "XUV700", "Scorpio", "Fortuner"];

// // const vehical = cars.concat(suv);

// // console.log(vehical);

// const vehical = [...suv, ...cars];
// console.log(vehical);
