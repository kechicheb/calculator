// All Elements
let result = document.querySelector(".calculator .result");
let operationBtn = document.querySelectorAll(".calculator .op");
let nbr = document.querySelectorAll(".calculator  .btn.nbr");
let reset = document.querySelector(".reset");
let del = document.querySelector(".calculator .btn.del");
let equal = document.querySelector(".calculator .equal");

// variables
let firstElement = "";
let secondElement = "";
let op = "";
let nb = false;

reset.onclick = () => {
  result.innerHTML = "";
  firstElement = "";
  op = "";
  nb = false;
};
del.onclick = () => {
  result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length - 1);
};
nbr.forEach((e) => {
  e.onclick = () => {
    if (nb == true) {
      result.innerHTML = "";
    }
    result.innerHTML += e.textContent;
    nb = false;
  };
});

operationBtn.forEach((e) => {
  e.onclick = () => {
    if (op == "-" && result.innerHTML == "") {
      result.innerHTML += "-";
      nb = false;
    } else {
      firstElement = "";
      firstElement = result.innerHTML;
      op = e.dataset.val;
      nb = true;
    }
  };
});

equal.onclick = () => {
  secondElement = result.innerHTML;
  if (op == "*") {
    result.innerHTML = parseFloat(firstElement) * parseFloat(secondElement);
  } else if (op == "/") {
    result.innerHTML = parseFloat(firstElement) / parseFloat(secondElement);
  } else if (op == "+") {
    result.innerHTML = parseFloat(firstElement) + parseFloat(secondElement);
  } else if (op == "-") {
    result.innerHTML = parseFloat(firstElement) - parseFloat(secondElement);
  }
  op = "";
  firstElement = "";
  nb = false;
};
