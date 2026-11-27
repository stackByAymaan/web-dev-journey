let expenses = [];

let expenseNameInput = document.getElementById("expense-name");
let amountInput = document.getElementById("amount");
let categoryInput = document.getElementById("category");

let addExpenseButton = document.getElementById("add-expense");

let totalAmount = document.getElementById("total-amount");
let expenseList = document.getElementById("expense-list");

let emptyMessage = document.getElementById("empty-message");
let emptySubtext = document.getElementById("empty-subtext");


// Function to add an expense
addExpenseButton.addEventListener("click", function () {

    // Get input values
    let expenseName = expenseNameInput.value.trim();
    let amount = Number(amountInput.value);
    let category = categoryInput.value;

    // Validate input
    if (expenseName === "" || amount <= 0) {
        alert("Please enter valid expense details");
        return;
    }


    // Create expense object
    let expense = {
        expenseName: expenseName,
        amount: amount,
        category: category
    };

    // Add expense to list
    expenses.push(expense);

    // Clear existing expense list
    expenseList.innerHTML = "";

    // Calculate total amount
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {

        total = total + expenses[i].amount;

        // Create expense item
        let expenseItem = document.createElement("div");
        expenseItem.classList.add("expense-item");

        // Add expense details
        let name = document.createElement("p");
        name.textContent = expenses[i].expenseName;

        let amountText = document.createElement("p");
        amountText.textContent = "₹ " + expenses[i].amount;

        let categoryText = document.createElement("p");
        categoryText.textContent = expenses[i].category;

        // Add delete button
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");

        deleteButton.addEventListener("click", function () {

            // Remove expense from list
            expenses.splice(i, 1);


            // Remove expense item from list
            expenseItem.remove();


            // Calculate new total amount
            let newTotal = 0;

            for (let j = 0; j < expenses.length; j++) {
                newTotal = newTotal + expenses[j].amount;
            }

            // Update total amount display
            totalAmount.textContent = "₹ " + newTotal;

            // Check if list is empty
            if (expenses.length === 0) {
                emptyMessage.style.display = "block";
                emptySubtext.style.display = "block";
            }
        });

        // Add expense item to list
        expenseItem.append(name);
        expenseItem.append(amountText);
        expenseItem.append(categoryText);
        expenseItem.append(deleteButton);

        expenseList.append(expenseItem);
    }

    // Update total amount display
    totalAmount.textContent = "₹ " + total;

    // Hide empty message
    emptyMessage.style.display = "none";
    emptySubtext.style.display = "none";

    // Clear input fields
    expenseNameInput.value = "";
    amountInput.value = "";
});