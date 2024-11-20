Array.prototype.myForEach = function(callback) {
    const newArray = this;
    for (const element of newArray) {

        callback (element)
    }

};
    [1, 2, 3].myForEach ((x) => console.log(x));

    Array.prototype.myFilter = function(callback) {
        const result = [];
        for (let i = 0; i < this.length; i++) {
            if (callback(i, this[i], this)) {
                result.push(this[i]);
            }
        }
        return result;
    };
let numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = numbers.myFilter((num) => num % 2 !== 0);
console.log(evenNumbers);