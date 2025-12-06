Array.prototype.forEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
let numbers = [1, 2, 3, 4];
numbers.forEach((item, index) => {
    console.log(`Елемент ${index}: ${item}`);
});

// --------------------------------------

// Array.prototype.filter = function(callback) {
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             result.push(this[i]);
//         }
//     }
//     return result;
// };
// let numbers = [10, 25, 30, 45, 50];
// let filtered = numbers.filter(num => num > 30);
//
// console.log(filtered); // [45, 50]