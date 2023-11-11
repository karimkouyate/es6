let tab = [1, 5, 7 ];

console.log(...tab);


function add(a, b, c) {
    return a + b + c;
}

console.log(add(...[5, 8, 2]));//15

console.log(Math.max(...[5, 8, 2]));

let array = [1, 2, 3, 4, 5, ...[6, 7, 7]];
console.log(array);