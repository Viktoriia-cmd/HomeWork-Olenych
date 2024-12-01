function addToLocalStorage(arrayName, objToAdd) {

    let storedArray = JSON.parse(localStorage.getItem(arrayName)) || [];
    if (!Array.isArray(storedArray)) {
        console.error(`Елемент з ключем "${arrayName}" не є масивом.`);
        return;
    }
    storedArray.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(storedArray));
}
addToLocalStorage('sessionsList', {})