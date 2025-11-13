const createList = (text, count) => {
    const ul = document.createElement('ul');
    for (let i = 0; i < count; i++) {
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }
    return ul;
};
const myList = createList('meow', 5);
document.body.appendChild(myList);

