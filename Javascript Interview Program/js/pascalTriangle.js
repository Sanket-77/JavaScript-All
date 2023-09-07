const pascalTriangle = n => {
    const arr = [];
    debugger
    for (let i = 0; i < n; i++) {
        const row = [1]
        for (let j = 1; j < i; j++) {
            const res = arr[i - 1][j - 1] + arr[i - 1][j];
            row.push(res)
        }
        if (i > 0) row.push(1)
        arr.push(row)
    }
    return arr
}
const storeRes = pascalTriangle(5);
for(let i=0; i < storeRes.length; i++){
    console.log("* "+storeRes[i]);
}
console.log(pascalTriangle(5))