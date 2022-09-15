let result = document.querySelector(".calculator .result");
let clearAll = document.querySelector(".clearAll");
let deleteNbr = document.querySelector(".calculator .btn.delete");
let nbr = document.querySelectorAll(".calculator .number .btn");
let operationBtn = document.querySelectorAll(
  ".calculator .child:nth-child(3) .btn:not(:last-child)"
);
operationBtn = Array.from(operationBtn);
let same = document.querySelector(
  ".calculator .child:nth-child(3) .btn:last-child"
);
let mod = document.querySelector(".calculator .mod");
operationBtn.push(mod);
let firstElement = "";
let op = "";
let nb = 0;
clearAll.onclick = () => {
  result.innerHTML = "";
  firstElement = "";
  op = "";
  nb = 0;
};
deleteNbr.onclick = () => {
  result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length - 1);
};
nbr.forEach((e) => {
  e.onclick = () => {
    if (nb != 0) {
      result.innerHTML = "";
    }
    result.innerHTML += e.textContent;
    nb = 0;
  };
});

operationBtn.forEach((e) => {
  e.onclick = () => {
    firstElement = "";
    firstElement = result.innerHTML;
    op = e.dataset.val;
    nb = nb + 1;
  };
});

same.onclick = () => {
  if (op == "*") {
    result.innerHTML = parseFloat(firstElement) * parseFloat(result.innerHTML);
  } else if (op == "/") {
    result.innerHTML = parseFloat(firstElement) / parseFloat(result.innerHTML);
  } else if (op == "+") {
    result.innerHTML = parseFloat(firstElement) + parseFloat(result.innerHTML);
  } else if (op == "-") {
    result.innerHTML = parseFloat(firstElement) - parseFloat(result.innerHTML);
  } else if (op == "%") {
    result.innerHTML = parseFloat(firstElement) % parseFloat(result.innerHTML);
  }
  op = "";
  firstElement = "";
  nb = 0;
};
