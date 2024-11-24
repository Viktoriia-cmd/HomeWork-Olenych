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
        for (const item in functions) {
            cloneObj[item.key] = item.funClone;
        }
        console.log(cloneObj);
        return cloneObj
    }
    throw new Error(`Error`)
}

const cloner =  {name: "Vika", age: 38 , skills: ['HTML', 'CSS'], greet: function () {console.log('my name is')},
    foo: function (){console.log(`my skills is`)}};
console.log(cloner);
const cloned = clone(cloner);
cloned.greet();
cloned.foo();


