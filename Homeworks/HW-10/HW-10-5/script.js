function addToLocalStorage(arrayName, objToAdd) {
    let arr = JSON.parse(localStorage.getItem(arrayName));
    if (!Array.isArray(arr)) {
        arr = [];
    }

    arr.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(arr));
}



addToLocalStorage("users", {name: "Саша", age: 30});
addToLocalStorage("users", {name: "Вася", age: 40});

const users = JSON.parse(localStorage.getItem("users"));
console.log(users);

