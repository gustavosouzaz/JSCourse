const numbers = [1, 2, 3, 4];

console.log(includes(1));

function includes(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
        return false
}