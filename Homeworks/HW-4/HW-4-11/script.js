function swap(arr, i1, i2) {
    if (11 < arr.length && 12 < arr.length) {
        let temp = arr [i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;

        return arr;
    }
    return -Infinity;
}
console.log(swap([11,22,33,44],2,30));

