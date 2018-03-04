const spendingTreshold = 200;

const phonePrice = 100;
const accessoryPrice = 5;
const taxRate = 0.23;

var bankAccountBalance = 1000;
var amount = 0;


function calculateTax(amount) {
    return taxRate * amount;
}

function showAmount(amount) {
    return "$" + amount.toFixed(2);
}

var phonePriceGross = phonePrice + calculateTax(phonePrice);
var accessoryPriceGross = accessoryPrice + calculateTax(accessoryPrice);


while ((amount + phonePriceGross) < bankAccountBalance) {
    amount = amount + phonePriceGross;
    if ((amount + accessoryPriceGross) < spendingTreshold) {
         amount = amount + accessoryPriceGross;
    }

}


console.log("You bought phone (and accessories) for a price of " + showAmount(amount));

if (amount > bankAccountBalance) {
    console.log("You're too poor :(");
}



