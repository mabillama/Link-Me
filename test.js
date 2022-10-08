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

function clicked() {
  console.log("clicked!");
  window.localStorage.setItem("name", "suzan");
  updateUI();
}

const button = document.getElementById("hello");
button.addEventListener("click", clicked);

if (typeof Storage != undefined) {
  console.log("It stores!");
}

function updateUI() {
  let values = [];
  let keys = Object.keys(localStorage);
  let i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }

  console.log(values);
  document.getElementById("ls-content").textContent = values[1];
}
