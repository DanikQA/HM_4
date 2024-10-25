let num = parseInt(prompt("Enter number"));
let prime = true;

if (num < 2) {
    prime = false;
} else {
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }
}

if (prime) {
    alert(`Число ${num} є простим числом`);
} else {
    alert(`Число ${num} не є простим числом`);
}