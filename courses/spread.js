// spread operator ...

let tab = [4, 2, 3, "salut"];

// console.log(...tab);

function add(x, y, z) {
    return x + y + z;
}


// console.log(add(4, 5, 3)) // 12
console.log(add(...tab)); // 9

let array = [...tab]; // copie du tableau tab

console.log(array); //



