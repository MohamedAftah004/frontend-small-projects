// document.getElementById("calculate-btn").addEventListener("click", () => {
//   const bill = parseFloat(document.getElementById("bill-amount").value);
//   const tip = parseFloat(document.getElementById("tip-percentage").value);
//   const result = document.getElementById("calculated-amount");

//   if (isNaN(bill) || isNaN(tip) || bill < 0 || tip < 0) {
//     return (result.textContent = "Invalid input!");
//   }

//   result.textContent = `$${(bill + bill * (tip / 100)).toFixed(2)}`;
// });


document.getElementById("bill-amount").addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^0-9.]/g, ""); 
});
document.getElementById("tip-percentage").addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, ""); 
});

document.getElementById("calculate-btn").addEventListener("click", () => {
  const bill = parseFloat(document.getElementById("bill-amount").value);
  const tip = parseFloat(document.getElementById("tip-percentage").value);
  const result = document.getElementById("calculated-amount");

  if (isNaN(bill) || isNaN(tip) || bill < 0 || tip < 0) {
    return (result.textContent = "Invalid input!");
  }

  result.textContent = `$${(bill + bill * (tip / 100)).toFixed(2)}`;
});