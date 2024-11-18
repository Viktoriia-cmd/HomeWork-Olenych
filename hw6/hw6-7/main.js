let nums = [11,21,3];
function sortNums(array,direction) {
    return array.sort((a, b) => a-b);
}

console.log(sortNums(nums));

function sortNumsDesc(array,direction) {
    return array.sort((a, b) => b-a);
}
console.log(sortNumsDesc(nums));