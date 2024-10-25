function isPerfect (num) {
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

function findPerfectNumber (n) {
    let perfectNumbers = [];

    for (let i = 1; i <= n; i++){
        if (isPerfect(i)) {
            perfectNumbers.push(i);
        }
    }
    return perfectNumbers;
}

let n = 1000;
console.log(findPerfectNumber(n));