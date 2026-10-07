let expenses = [
    {
        expenseName: "Lunch",
        amount: 800,
        category: "Food"
    },
    {
        expenseName: "Bus",
        amount: 150,
        category: "Travel"
    },
    {
        expenseName: "Bought a shirt",
        amount: 1500,
        category: "Shopping"
    },
    {
        expenseName: "Electric bill",
        amount: 2050,
        category: "Bills"
    },
];

if (expenseName.length === 0 && expenses.amount > 0) {
    console.log("Please enter a valid data");
} else {
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
        total = total + expenses[i].amount;
    }
    console.log(total);
}






