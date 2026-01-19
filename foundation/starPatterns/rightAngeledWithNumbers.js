
const rightAngeledWithNumbers = (n) => {
    for (let row = 1; row <= n; row += 1){
        let printRow =""
        for (let col = 1; col < row + 1; col += 1){
            // console.log(row,col)
            printRow+=` ${row}`
        }
        console.log(printRow)
    }
    
}
rightAngeledWithNumbers(5)