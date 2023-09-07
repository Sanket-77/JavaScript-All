/* Input Array: [11, 7, 2, 4, 17, 14, 12, 5, 22, 1, 10, 16, 21, 6]
findSecondLargest(inputArray)
or return -1
e.g. [12, 12, 12] => func should return -1
[3,4,1] => func should return 3 */
var inputarr =  [11, 7, 2, 4, 17, 14, 12, 5, 22, 1, 10, 16, 21, 6]

var resultget = secondHighest([12, 12, 12])

console.log( resultget !== -Infinity ? resultget : -1);
function secondHighest(arrval){
    let max = -Infinity, result = -Infinity;
    for(let items of arrval){
        let checknum = Number(items)
        if(checknum > max){
          [result, max] = [max, checknum]
        }else if(checknum < max && checknum > result){
          result = checknum
        }
    }
    return result
}