let foobar = (text) => {
        document.write(`
       <ul>
         <li> ${text}</li>
           <li>${text}</li>
           <li>${text}</li>
        </ul>
         `);
}
foobar(`I am learning Javascript`);