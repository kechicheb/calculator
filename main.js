// All Elements
let result = document.querySelector(".calculator .result span");
let operationBtn = document.querySelectorAll(".calculator .op");
let nbr = document.querySelectorAll(".calculator .btn.nbr");
let reset = document.querySelector(".reset");
let del = document.querySelector(".calculator .btn.del");
let equal = document.querySelector(".calculator .equal");
let neg = document.querySelector(".calculator .neg");
let toggle = document.querySelector(".toggle");
let span = document.querySelector(".toggle span");

// variables
let firstElement = "";
let secondElement = "";
let op = "";
let nb = false;

// Delete everything
reset.addEventListener("click", resetAll);

// delete number
del.onclick = () => {
  fixedProblems();
  result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length - 1);
};
nbr.forEach((e) => {
  e.onclick = () => {
    fixedProblems();
    if (nb == true) {
      result.innerHTML = "";
    }
    result.innerHTML += e.textContent;
    let myNumber = result.innerHTML;
    nb = false;
    if (/^0+/gi.test(myNumber)) {
      result.innerHTML = myNumber.toString().replace(/(^0+)/gi, "0");
    }
  };
});

// Keep the first number and the operation
operationBtn.forEach((e) => {
  fixedProblems();
  e.onclick = (ele) => {
    if (result.innerHTML == "") {
      ele.preventDefault();
    } else {
      if (op == "") {
        firstElement = result.innerHTML;
      }
      op = e.dataset.val;
      nb = true;
      result.innerHTML = op;
    }
  };
});

// Make the Number negative
neg.onclick = () => {
  result.innerHTML = parseFloat(result.innerHTML) * -1;
};
// The result of the calculation
equal.onclick = (e) => {
  fixedProblems();
  if (
    result.innerHTML == "/" ||
    result.innerHTML == "*" ||
    result.innerHTML == "-" ||
    result.innerHTML == "+"
  ) {
    e.preventDefault();
  } else {
    secondElement = result.innerHTML;
    switch (op) {
      case "*":
        result.innerHTML = parseFloat(firstElement) * parseFloat(secondElement);
        break;
      case "/":
        result.innerHTML = parseFloat(firstElement) / parseFloat(secondElement);
        break;
      case "+":
        result.innerHTML = parseFloat(firstElement) + parseFloat(secondElement);
        break;
      case "-":
        result.innerHTML = parseFloat(firstElement) - parseFloat(secondElement);
        break;
    }
    op = "";
    firstElement = "";
    nb = false;
  }
};

// DarK Mode
window.onload = function () {
  darkMode(localStorage.getItem("active"));
};
toggle.addEventListener("click", () => {
  span.classList.toggle("active");
  if (span.classList.contains("active")) {
    localStorage.setItem("active", "dark");
    darkMode(localStorage.getItem("active"));
  } else {
    localStorage["active"] = "white";
    darkMode(localStorage.getItem("active"));
  }
});
// Toggle Dark  Mode With Local Storage
function darkMode(value) {
  if (value == "dark") {
    span.classList.add("active");
    document.documentElement.style.setProperty("--bg-body-color", "#17062a");
    document.documentElement.style.setProperty("--result-color", "#1e0836");
    document.documentElement.style.setProperty("--bg-row-btn-color", "#1e0836");
    document.documentElement.style.setProperty("--bg-btn-color", "#321b4c");
    document.documentElement.style.setProperty("--border-btn-color", "#7b2291");
    document.documentElement.style.setProperty("--del-reset-color", "#56077d");
    document.documentElement.style.setProperty(
      "--border-del-reset-color",
      "#a923db"
    );
    document.documentElement.style.setProperty("--bg-equal-color", "#00dfcf");
    document.documentElement.style.setProperty(
      "--border-equal-color",
      "#89e8f2"
    );
    document.documentElement.style.setProperty("--black-color", "#f3de60");
    document.documentElement.style.setProperty("--bg-toggle-color", "#1e0836");
  } else {
    document.documentElement.style.setProperty("--bg-body-color", "#e6e6e6");
    document.documentElement.style.setProperty("--result-color", "#eeeeee");
    document.documentElement.style.setProperty("--bg-row-btn-color", "#d3cdcd");
    document.documentElement.style.setProperty("--bg-btn-color", "#e5e4e0");
    document.documentElement.style.setProperty("--border-btn-color", "#a29e96");
    document.documentElement.style.setProperty("--del-reset-color", "#378285");
    document.documentElement.style.setProperty(
      "--border-del-reset-color",
      "#24666d"
    );
    document.documentElement.style.setProperty("--bg-equal-color", "#ce4030");
    document.documentElement.style.setProperty(
      "--border-equal-color",
      "#902720"
    );
    document.documentElement.style.setProperty("--black-color", "#383732");
    document.documentElement.style.setProperty(
      "--bg-toggle-color",
      "#ce40301a"
    );
  }
}

function fixedProblems() {
  if (result.innerHTML == "Infinity" || result.innerHTML == "NaN") {
    resetAll();
  }
}
function resetAll() {
  result.innerHTML = "";
  firstElement = "";
  secondElement = "";
  op = "";
  nb = false;
}
