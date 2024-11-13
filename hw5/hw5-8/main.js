let foobar = (arrayOfPrimitives) => {
    document.write('<ul>');
    for (const item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}
foobar([1, 2, 3, 4, 5, `java script`, false]);