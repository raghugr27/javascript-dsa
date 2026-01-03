//  scope chain example
function x() {
    let a= 10
    function y() {
       
        function z() {
            let c = 30;
            console.info(a+b+c)
        }
         let b = 20;
        z()
    }
    y()
}
x()


// closures
// function x() {
//     let a = 10;
//     return function y() {
//         let b = 20;
//         console.log("a",a);
//         return function z() {
//             console.log("a & b",a, b);

//         }
//     }
// }
// const z1 = x();
// const z2 = z1();
// z2();
// const z3 = x()()();
// z3;
// const xyz = (x) => (y) => (z) => console.log(x, y, z);
// console.log(xyz(10)(20)(30))