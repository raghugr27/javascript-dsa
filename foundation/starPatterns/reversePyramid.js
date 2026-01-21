const reversePyramid = (n) => {
    for (let row = 0; row < n; row++){
        let printRow = "";
        for (let col = n; col > row; col--){
            // console.log(col)
            
            printRow+="*"
            
        }
        console.log(printRow)
    }
}
reversePyramid(5)