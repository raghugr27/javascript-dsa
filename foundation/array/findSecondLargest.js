let arr = [ 41, 55, 6, 2,8,-1,97,93,97];

const findSecondLargest = (arr) => {
    let first = -Infinity;
    let second = -Infinity;
    for (const num of arr){
        if (num > first) {
            second = first;
            first = num;
        }
        else if ( num<first && num > second) {
            second =num
        }
    };
    return second
}
console.log(findSecondLargest(arr))