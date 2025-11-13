const createParagraph = text => {
    const p = document.createElement('p');
    p.textContent = text;
    return p;
};
const myParagraph = createParagraph('hello world');
console.log(myParagraph);


