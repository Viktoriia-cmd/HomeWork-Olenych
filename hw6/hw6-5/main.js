let str = `Ревуть воли як ясла повні`;
function stringToArray(str) {
    if (str){
    let strArray;
    strArray = str.split(' ');
    return strArray;
    }
    return [` `]
}

console.log(stringToArray(str));



