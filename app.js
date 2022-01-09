const calc = document.getElementById("calc");
const amount = document.getElementById("amount");
const tip = document.getElementById("tip");
const ppl = document.getElementById("ppl");
const result = document.getElementById("result");
const reset = document.getElementById("reset");

calc.addEventListener("click", () => {
  result.innerHTML = (
    (amount.value * (tip.value / 100 + 1)) /
    (ppl.value || 1)
  ).toFixed(2);
});

reset.addEventListener("click", () => {
  amount.value = "";
  tip.value = "";
  ppl.value = "";
});
