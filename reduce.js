let numbers = [1, 2, 3, 4, 6, 7];
// reduce (accumulator Funcation , initial value)
// accumulator Function use two parameters
//let total = numbers.reduce((previus, current) => previus + current, 0);
let total = numbers.reduce((previus, current) => {
    console.log(previus , current);
   return  previus + current
},0 );
console.log(total);