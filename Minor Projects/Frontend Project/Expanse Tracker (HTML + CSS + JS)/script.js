let expenses = [];

let expenseNameInput = document.getElementById("expense-name");
let amountInput = document.getElementById("amount");
let categoryInput = document.getElementById("category");

let addExpenseButton = document.getElementById("add-expense");

let totalAmount = document.getElementById("total-amount");
let expenseList = document.getElementById("expense-list");

let emptyMessage = document.getElementById("empty-message");
let emptySubtext = document.getElementById("empty-subtext");


addExpenseButton.addEventListener("click", function () {

    let expenseName = expenseNameInput.value.trim();
    let amount = Number(amountInput.value);
    let category = categoryInput.value;

    if (expenseName === "" || amount <= 0) {
        alert("Please enter valid expense details");
        return;
    }

    let expense = {
        expenseName: expenseName,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    expenseList.innerHTML = "";

    let total = 0;

    for (let i = 0; i < expenses.length; i++) {

        total = total + expenses[i].amount;

        let expenseItem = document.createElement("div");
        expenseItem.classList.add("expense-item");

        let name = document.createElement("p");
        name.textContent = expenses[i].expenseName;

        let amountText = document.createElement("p");
        amountText.textContent = "₹ " + expenses[i].amount;

        let categoryText = document.createElement("p");
        categoryText.textContent = expenses[i].category;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");

        deleteButton.addEventListener("click", function () {

            expenses.splice(i, 1);

            expenseItem.remove();

            let newTotal = 0;

            for (let j = 0; j < expenses.length; j++) {
                newTotal = newTotal + expenses[j].amount;
            }

            totalAmount.textContent = "₹ " + newTotal;

            if (expenses.length === 0) {
                emptyMessage.style.display = "block";
                emptySubtext.style.display = "block";
            }
        });

        expenseItem.append(name);
        expenseItem.append(amountText);
        expenseItem.append(categoryText);
        expenseItem.append(deleteButton);

        expenseList.append(expenseItem);
    }

    totalAmount.textContent = "₹ " + total;

    emptyMessage.style.display = "none";
    emptySubtext.style.display = "none";

    expenseNameInput.value = "";
    amountInput.value = "";
});