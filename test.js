// import linker from "./linker.json" assert { type: "json" };

// console.log(linker);
// const objStr = JSON.stringify(linker);
// console.log(obj);
// const obj = JSON.parse(objStr);
// const linkerStr = linker.JSON.parse();
// console.log(linkerStr);

// document.getElementById("over-here").innerHTML = obj;

// function clicked() {
//   console.log("Clicked!");
// }

// var h = document.getElementById("hello");
// // h.onclick = console.log("Clicked!");
// h.addEventListener("click", clicked());
// export { clicked };

updateUI();

if (typeof Storage != undefined) {
  console.log("It stores!");
}

function updateUI() {
  let values = [];
  let keys = Object.keys(localStorage);
  let i = keys.length;

  document.getElementById("ls-content").textContent = "";

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }

  // Experimental

  values.forEach((el) => {
    let content1 = document.getElementById("ls-content");

    // const fragment = document.createDocumentFragment();
    let li1 = content1.appendChild(document.createElement("p"));
    li1.textContent = el;
    console.log(li1);
    console.log(el);
  });
}

function updateUIreload() {
  let values = [];
  let keys = Object.keys(localStorage);
  let i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }

  console.log(values);
  const content = document.getElementById("ls-content");

  const fragment = document.createDocumentFragment();
  const li = content.appendChild(document.createElement("p"));
  li.textContent = values;
}

/* 
Button functions
  - CHECK it needs to get the input field to put to localStorage
  - CHECK it needs to generate a random key *using date* @todo develop to use uuid
  - it needs to add to localStorage with a link
  
  - validation for links:
    - can't be empty
*/
function clicked() {
  // console.log("clicked!");
  window.localStorage.setItem(
    generateKey(),
    document.getElementById("link-box").value
  );
  updateUI();
}

function generateKey() {
  return Date.now();
  // console.log(Date.now());
}

const button = document.getElementById("hello");
button.addEventListener("click", clicked);
