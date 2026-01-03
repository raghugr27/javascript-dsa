const reduceFn = (acc, curr) => acc + curr;
let arr = [1, 2, 3, 4]
let init =0
const customReduce = (init) => {
    let acc =init
    for (let val of arr) {
        acc = reduceFn(acc,val)
    }
    return acc
}
console.info(customReduce(init))