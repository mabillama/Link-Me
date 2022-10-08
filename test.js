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
}

const button = document.getElementById("hello");
button.addEventListener("click", clicked);

if (typeof Storage != undefined) {
  console.log("It stores!");
}
