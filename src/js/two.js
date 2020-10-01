// Av Åsa Lodesjö

console.log("Hi from testtwo.js");

function multiplier(factor) {
    return x => x * factor;
}

let doubler = multiplier(2);
console.log(doubler(4));