const budgetEle = document.querySelector("div section .budget");
let budgetInput = Number(prompt("Enter you budget"));
budgetEle.innerHTML = ` ₹${budgetInput}`;
const addBtnEle = document.getElementById("addBtn");
const budgetEnteredEle = document.getElementById("budgetEntered");
const Expense_title_Ele = document.querySelector(
  "div section div .Expense-title"
);
const Expenditure_ele = document.querySelector("div section div .Expenditure");
addBtnEle.addEventListener("click", function () {
  if (budgetInput > 0 && Expenditure_ele.value <= budgetInput) {
    if (Expense_title_Ele.value || Expenditure_ele.value) {
      budgetEnteredEle.innerHTML += `
  <li class="border-black border-2 my-[2px] px-[10px] rounded border-gray-800">
  <strong><em>${Expense_title_Ele.value}</em></strong> = ₹${Expenditure_ele.value}
  </li> `;
      budgetInput = budgetInput - Number(Expenditure_ele.value);
      console.log(budgetInput);
      budgetEle.innerHTML = budgetInput;
      Expense_title_Ele.value = "";
      Expenditure_ele.value = "";
    } else alert("Please fill all details");
  } else alert("Ran out of budget!");
});
