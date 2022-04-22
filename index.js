const subtotal = 19.75;
const taxRate = 0.07;

function calculateTax(subtotal, taxRate) {
    const tax = subtotal * taxRate;
    return tax;
}
function calculateTotal(subtotal, tax) {
    return subtotal + tax; 
}
const myTax = calculateTax(subtotal, taxRate);



const myTotal = calculateTotal(subtotal, myTax);




console.log('subtotal:      ', subtotal.toFixed(2));
console.log('tax:           ', myTax.toFixed(2));
console.log('-----------');
console.log('Total:     ', myTotal.toFixed(2));

