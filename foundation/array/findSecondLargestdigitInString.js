/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let max =-Infinity;
    let secondMax =-Infinity;
    for( let char of s){
      if(isNaN(char) || char ===' ') continue;
        let num = Number(char)
        if(num>max){
            secondMax = max;
            max =num;

        }
        else if (num < max && num> secondMax){
             secondMax = num;
        }
    };
    return secondMax !==-Infinity ? secondMax : -1
};