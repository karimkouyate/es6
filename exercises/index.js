
//1- template literal (``)

// console.log('salut, comment vas tu ?');

// console.log(`salut, 
// comment vas tu ?,
// je vais super bien`)

let name = "Karim";
let email = "karim@gmail.com";
// console.log("Mon nom est : " + name +  " et mon email est : " + email);

// console.log(`Mon nom est : ${name} et mon email est : ${email}`);

// 2-arrow function / fonction fléchée : () => {};

function add(x, y){
  return x +y;
}

let addition = (x, y) => {
    return x + y;
}

console.log(add(1, 2)) // 3;
console.log(addition(4, 7))//11;