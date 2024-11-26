function clone(obj) {
    if (obj === null) return null;
    if (obj === undefined) return undefined;
    if (typeof obj === "number" && isNaN(obj)) return NaN;

    if (obj) {
        let functions = []
        for (let key in obj) {
            if (typeof obj[key] === "function") {
                const funClone = obj[key].bind({});
                functions.push({funClone, key});
            }
        }
        console.log(functions);
        const cloneObj = JSON.parse(JSON.stringify(obj));

        console.log(cloneObj);
        cloneObj [functions [0].key] = functions[0].funClone;
        cloneObj [functions [1].key] = functions[1].funClone;
        return cloneObj
    }
    throw new Error(`Error`)
}

const cloner =  {name: "Vika", age: 38 , skills: ['HTML', 'CSS'], greet: function () {console.log('Hello')}, foo: function (){console.log(`bar`)}};
console.log(cloner);
const cloned = clone(cloner);



