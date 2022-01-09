let calc = document.getElementById("calc");

calc.addEventListener("click", function () {
  let amount = document.getElementById("amount").value;
  let tip = document.getElementById("tip").value;
  tip = tip / 100 + 1;
  let ppl = document.getElementById("ppl").value;
  let result = document.getElementById("result");
  result.innerHTML = ((amount * tip) / (ppl || 1)).toFixed(2);
});

let reset = document.getElementById("reset");

reset.addEventListener("click", function () {
  result.innerHTML = "$";
  document.getElementById("amount").value = "";
  document.getElementById("tip").value = "";
  document.getElementById("ppl").value = "";
});
