let prices = [150, 800, 250, 1200, 450];

function checkPrice(prices) {
    for (let i=0; i < prices.length; i++) {
        if (prices[i] > 500) {
            console.log(`price ${prices[i]} is greater than 500`);
        } 
    }
}

checkPrice(prices);