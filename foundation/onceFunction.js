const onceFunction = (fn) => {
    let flag = false;
    return function (...args) {
        if (!flag) {
            flag = true;
            return fn(...args)
        }
        return undefined
    }
}
const callOnce = onceFunction((a, b, c) => a + b + c)
console.log(callOnce(1, 2, 3))
console.log(callOnce(1,2,3))