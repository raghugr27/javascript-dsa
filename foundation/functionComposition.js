var compose = function(functions) {
    
    return function(x) {
     return   functions.reduceRight((acc,fn)=>fn(acc),x)
        // let value = x;
        // for(let i=functions.length-1;i>=0;i--){
        //     value = functions[i](value)
        // }
        // return value
    }
};
const fn = compose([x => x + 1, x => x * x, x => 2 * x])
console.log(fn(4))