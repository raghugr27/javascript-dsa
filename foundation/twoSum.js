let arr = [2, 4, 6, 8, 4];
let target = 14;
const sumOfTwo = (arr, target) => {
    let pairs = new Map();
    for (let index = 0; index < arr.length; index++){
        let value = arr[index];
        let compliment = target - value;
        if (pairs.has(compliment)) {
            return [pairs.get(compliment),index]
        }
        pairs.set(value,index)
    }
    return []
}
console.log(sumOfTwo(arr,target))