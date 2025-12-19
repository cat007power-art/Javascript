const items = ['Main','Products','About us','Contacts'];

const ul = document.createElement("ul");

items.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
});

document.body.appendChild(ul);
