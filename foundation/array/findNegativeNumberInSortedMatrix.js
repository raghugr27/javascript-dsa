/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count =0;
    for(let arr of grid){
       for(let i= arr.length-1;i>=0;i--){
        if (arr[i]>=0) break;
        count+=1;
       }
    }
    return count
};