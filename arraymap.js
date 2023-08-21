let names = ['liza', 'mitu', 'tituuuuu', 'nischay'];
let view = names.map(nam => nam[0]);
let countletter = names.map(nam => nam.length);
//console.log(countletter);

let products = [
    { id: 1, name: 'laptop', price: 75000 },
    { id: 2, name: 'pc', price: 12000 },
    { id: 3, name: 'mobile', price: 7000 },
];
let items = products.map(product => product[1].price);
console.log(items);