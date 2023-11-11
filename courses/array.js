let tab =  [4, 1, 2];


function maxElement(arr){

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(max<arr[i]){
            max = arr[i];
        }
    }

    return max;

}

function pairElement(arr) {

    let result = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i]%2 == 0) {
            result.push(arr[i]);
        }
    }


    return result;

}



console.log(tab.filter(elt => elt > 3)); // [4]

console.log(tab.map(elt => elt*2)); // [8,2,4]

console.log(tab.reduce((acc, curr) => curr + acc)); // 7