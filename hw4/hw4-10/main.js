function arrayMin(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length;i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(arrayMin([35, 47, 93, 13]));