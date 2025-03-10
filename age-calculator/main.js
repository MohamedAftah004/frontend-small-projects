
document.getElementById("btnCalculation").addEventListener("click",  function()
{
  const birthDateInput = document.getElementById("birthDate").value;
  const resultElement = document.getElementById("answer");

  if(!birthDateInput)
  {
    let styledText = document.getElementById("answer");
    resultElement.style.color = "red";
    resultElement.innerText = "Please select your date of birth ⚠️";
    return;
  } 

  resultElement.style.color = "green"
  const age = calculateAge(birthDateInput);
  resultElement.innerText = `Your age is ${age} years old 🎉`;
})

function calculateAge(selectedDate)
{
  let today = new Date();
  const birthDate = new Date(selectedDate);

  let age = today.getFullYear()-birthDate.getFullYear();
return age;
}