const users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// // Користувачі зі статусом true
// for (const user of users) {
//     if (user.status === true) {
//         document.write(`<div>${user.name}, ${user.age}, ${user.status}</div>`);
//     }
// }
//
// // Користувачі зі статусом false
// for (const user of users) {
//     if (user.status === false) {
//         document.write(`<div>${user.name}, ${user.age}, ${user.status}</div>`);
//     }
// }

// Користувачі, які старші за 30 років
for (const user of users) {
    if (user.age > 30) {
        document.write(`<div>${user.name}, ${user.age}, ${user.status}</div>`);
    }
}