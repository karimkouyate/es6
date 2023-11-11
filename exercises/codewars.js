

function getCount(str) {
   let vowelsTab = ["a", "e", "i", "o", "u"];
   let count = 0;
   for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < vowelsTab.length; j++) {
            if(str[i] === vowelsTab[j]) {
                count++;
            }
        }
   }
   return count;
}

console.log(getCount("bonjour comment vas tu ?")); // 7