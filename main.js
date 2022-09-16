// All Elements
let result = document.querySelector(".calculator .result");
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
let finalResult = "";

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
    firstElement = "";
    firstElement = result.innerHTML;
    op = e.dataset.val;
    nb = true;
    result.innerHTML = op;
  };
});
neg.onclick = () => {
  if (parseFloat(result.innerHTML) > 0) {
    result.innerHTML = parseFloat(result.innerHTML) * -1;
  }
};
equal.onclick = (e) => {
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
        finalResult = parseFloat(firstElement) * parseFloat(secondElement);
        break;
      case "/":
        finalResult = parseFloat(firstElement) / parseFloat(secondElement);
        break;
      case "+":
        finalResult = parseFloat(firstElement) + parseFloat(secondElement);
        break;
      case "-":
        finalResult = parseFloat(firstElement) - parseFloat(secondElement);
        break;

      default:
        break;
    }
    result.innerHTML = finalResult;

    op = "";
    firstElement = "";
    nb = false;
  }
};
toggle.onclick = () => {
  span.classList.toggle("active");
};
