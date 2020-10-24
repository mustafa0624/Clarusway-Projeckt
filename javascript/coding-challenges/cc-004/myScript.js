function Merge(array1, array2) {
    const resultArray = [...array1, ...array2];
    const neww = []
    for (let i = 0; i < resultArray.length; i++) {
        if (resultArray[i] == "") delete i;
        else {
            neww.push(resultArray[i])
        }
    }
    console.log(neww.sort((a,b)=>a-b))


}
Merge([12, 14, [], 16], [11, 13,24,[], 17])