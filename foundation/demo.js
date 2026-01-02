// const numbers = [1, [2, [3, [4, 5]]]];;
// console.log(numbers.toString().split(",").map(val=>parseInt(val)));

// const flatArray = (numbers) => {
//     let arr = [];
//     for (let val of numbers) {
//         if (Array.isArray(val)) {
//             arr.push(...flatArray(val))
//         }
//         else {
//             arr.push(val)
//         }
//     }
//     return arr
// }
// console.log(flatArray(numbers))

// const eligibleToVote = age => (age <= 0 && "invalid input") || (age >= 18 ? "eligible" : "not eligible");
// console.log(eligibleToVote(12));
const isEvenOdd = number => number % 2 === 0 && "even" || "odd";
console.info(isEvenOdd(12))
