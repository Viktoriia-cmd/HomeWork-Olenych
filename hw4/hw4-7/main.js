function foobar (text,counter) {
    document.write(`<ul>`)
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
        
    }
    document.write(`</ul>`)

    
}
foobar(`I will know all this someday.`,50);