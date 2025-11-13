const buildList = arr => {
    const ul = document.createElement('ul');
    arr.forEach(item => {
        const li = document.createElement('li');
        li.textContent = String(item);
        ul.appendChild(li);
    });
    return ul;
};
const myList = buildList([10, 'hello', true, false]);
document.body.appendChild(myList);


