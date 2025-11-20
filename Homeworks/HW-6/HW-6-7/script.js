function sortNums(array, direction) {
    const sort = array.sort((a, b) => a - b);
    if (direction === 'ascending') {
        return sort;
    }
    if (direction === 'descending') {
    return sort.reverse();}
}
let nums = [11, 21, 3];

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));





