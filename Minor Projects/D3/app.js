let prices = [120, 80, 250, 60, 300];
let total = 0;
for(let i = 0; i < prices.length; i++) {
    if(prices[i] > 100) {
        total = total + prices[i];
        console.log(prices[i]);
        console.log(total);
    }
}
