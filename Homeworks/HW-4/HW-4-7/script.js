function createList(array) {
    document.write('<ul>');
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

const primitives = [42, 'hello', true, 'world', false, 3.14];
createList(primitives);

