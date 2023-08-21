let numbers = [1, 23, 22, 34, 43, 34, 28, 56];
let bignum = numbers.filter(n => n > 20);
let even = numbers.filter(n => n %2 ===0);
//console.log(even);
let findnum = numbers.find(n => n % 23 === 0);
console.log(findnum);

let products = [
    { id: 1, name: 'laptop', price: 75000 },
    { id: 2, name: 'pc', price: 12000 },
    { id: 3, name: 'mobile', price: 7000 },
];
let lowprice = products.filter(p => p.price > 10000);
//console.log(lowprice);

let highprice = products.find(p => p.price > 15000);
console.log(highprice);