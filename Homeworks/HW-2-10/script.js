let a = Number(+prompt("Введіть число:"));
let b = Number(+prompt("Введіть число:"));

if (a > b) {
    console.log(`Максимальне число: ${a}`);
} else if (b > a) {
    console.log(`Максимальне число: ${b}`);
} else {
    console.log('===');
}