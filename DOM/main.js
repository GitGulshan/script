// console.log(window);

// /// SINGLE ELEMENT

// console.log(document.getElementById("my-form"));
// const form = document.getElementById("my-form");
// console.log(form);

// //query selector select anything

// console.log(document.querySelector(".container"));
// console.log(document.querySelector(".item"));
// console.log(document.querySelector("label"));

// ///MULTIPEL ELEMENT

// console.log(document.querySelectorAll(".item")); /// this gives NODE LIST
// console.log(document.getElementsByClassName("item")); /// IT'S AN HTML COLLECTION WE CAN MANUALLLY CONVERTED ARRAY METHOD ON IT.
// console.log(document.getElementsByTagName("li")); /// IT'S AN HTML COLLECTION WE CAN MANUALLLY CONVERTED ARRAY METHOD ON IT.

/// loop thorung it..

// const hold = document.querySelectorAll(".item");

// hold.forEach((item) => console.log(hold));

////MANUPULATION THE DOM

const ul = document.querySelector(".items");

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.remove();
// ul.firstElementChild.textContent = "1 machlii ";

// ul.children[1].textContent = "panni me gai";
// ul.lastElementChild.innerHTML = "<h2>chapppak</h2>"; /// if we can you html dianamically then we use inner html

// const ntm = document.querySelector(".btn");
// ntm.style.background = "green";

/// EVENT LISTNER

// const ntm = document.querySelector(".btn");

// ntm.addEventListener("mouseout", (e) => {
//   e.preventDefault(); /// we have stop the prevent default behaviour
//   //   console.log(e.target.className);
//   //   console.log(e.target.id);

//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector(".items").lastElementChild.innerHTML = "<h1>ARUN</h1>";
// });

///FORM SCRIPT

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg"); // for empty div we use .msg
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  //   console.log(nameInput); // it give the actual element
  //   console.log(nameInput.value); // it give me this actual value

  if (nameInput.value === "" || emailInput.value === "") {
    // alert("please enter the credentials");

    msg.classList.add("error");
    msg.innerHTML = "please enter the credential";

    //setTimeOut
    setTimeout(() => msg.remove(), 5000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);

    ///CLEAR FIELD

    nameInput.value = "";
    emailInput.value = "";
  }
}
