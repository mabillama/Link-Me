updateUI();

// localStorage functionality test
if (typeof Storage != undefined) {
  console.log("It stores!");
}

// RELOADS UI
function updateUI() {
  let values = [];
  let keys = Object.keys(localStorage);
  let i = keys.length;

  document.getElementById("ls-content").textContent = "";

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }

  // Experimental

  // make a div + p + 2 buttons and append

  // build interface structure

  values.forEach((el) => {
    /**
     * Create a function to organize this part of the code
     * as it is only useful to build the UI and it only needs one
     * parameter.
     * @TODO transform into function
     */

    const content1 = document.getElementById("ls-content");

    const divParent = document.createElement("div");
    divParent.classList.add("ls-row");

    const pChild = document.createElement("p");
    pChild.classList.add("ls-favourite");

    const pChildText = document.createTextNode(el);
    pChild.appendChild(pChildText);
    console.log(pChild);

    const copyButton = document.createElement("button");
    copyButton.classList.add("btn", "btn-copy");
    const textCopyButton = document.createTextNode("Copy to Clipboard");
    copyButton.appendChild(textCopyButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-delete");
    const textDeleteButton = document.createTextNode("Delete");
    deleteButton.appendChild(textDeleteButton);

    const li1 = content1.appendChild(divParent).appendChild(pChild);
    divParent.appendChild(copyButton);
    divParent.appendChild(deleteButton);
  });
  document.getElementById("link-box").value = "";
}

// RELOADS UI
function updateUIreload() {
  let values = [];
  let keys = Object.keys(localStorage);
  let i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }

  // console.log(values);
  const content = document.getElementById("ls-content");

  const fragment = document.createDocumentFragment();
  const li = content.appendChild(document.createElement("p"));
  li.textContent = values;
}

/* Button functions
  - CHECK it needs to get the input field to put to localStorage
  - CHECK it needs to generate a random key *using date* @todo develop to use uuid
  - it needs to add to localStorage with a link
  
  - validation for links:
    - can't be empty
*/
function clicked() {
  const linkBoxText = document.getElementById("link-box").value;
  let validLink = false;

  // Basic validation: size and valid url
  linkBoxText.length > 13 && validateUrl(linkBoxText)
    ? (validLink = !validLink)
    : null;

  if (validLink) {
    window.localStorage.setItem(
      generateKey(),
      document.getElementById("link-box").value
    );
    updateUI();
  } else {
    console.log("error");
    updateUI();
  }
}

// UTIL FUNCTIONS

function generateKey() {
  return Date.now();
  // console.log(Date.now());
}

function validateUrl(value) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );
}

const button = document.getElementById("hello");
button.addEventListener("click", clicked);
