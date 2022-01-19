// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let arr = [];
    let count = 0;
    let index=0;
    while(count < array.length) {
        let tempArr = [];
            for(let i=0; i<size; i++) {
                if(array[index]) {
                    tempArr.push(array[index]);
                }
                count++;
                index++;
            }
            arr.push(tempArr);
    }
    return arr;
}

module.exports = chunk;
//console.log(chunk([1,2,3,4,5,6],2));