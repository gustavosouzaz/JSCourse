const numbers = arrayFromRage(1, -4);

console.log(numbers);

function arrayFromRange(min, max) {
    const output = [];
    for(let i = min; i <= max; 1++)
        output.push(i);
    return output;
}