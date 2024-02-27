// /// HIGH ORDER ARRAY METHODS

// // FOR EACH, MAP, FILTER

// const bio = [
//   {
//     fname: "V.K",
//     mname: "L.K",
//     dob: "0105",
//     city: "MUMBAI",
//     isLink: false,
//   },
//   {
//     fname: "A.K",
//     mname: "S.K",
//     dob: "234",
//     city: "ASDF",
//     isLink: true,
//   },
//   {
//     fname: "B.K",
//     mname: "D.K",
//     dob: "0678",
//     city: "DELHI",
//     isLink: true,
//   },
//   {
//     fname: "F.K",
//     mname: "G.K",
//     dob: "0105",
//     city: "INDIA",
//     isLink: false,
//   },
// ];

// // bio.forEach(function (det) {
// //   console.log(det.city);
// // });

// /// MAP

// // const solo = bio.map(function (data) {
// //   return data.city;
// // });
// // // this gives a regular array...
// // console.log(solo);

// // FILTER

// const biodata = bio
//   .filter(function (data) {
//     return data.city === "INDIA";
//   })
//   .map(function (data) {
//     return data.dob;
//   });

// console.log(biodata);
