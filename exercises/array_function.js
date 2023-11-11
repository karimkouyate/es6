function pair(tab){
    let arr = [];
    for(let i=0;i<tab.length;i++){
        if(tab[i] % 2 == 0){
            arr.push(tab[i]);
        }   
    }
    return arr;
}


// console.log(pair([4,5, 7, 8, 18])); // [4, 8, 18]


let result = [4,5, 7, 8, 18].filter((elt)=> {return elt % 2 == 0});

// console.log(result);


let res = [4,5, 7, 8, 18].map((elt)=> {return elt});

console.log(res);

let r = [4,5, 7, 8, 18].reduce((acc, elt) => {return acc + elt});

console.log(r)

