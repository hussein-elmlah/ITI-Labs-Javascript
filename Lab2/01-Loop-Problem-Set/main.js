
console.log(`1. Print all numbers between -10 and 19`);
for (let i = -10; i < 20; i++) {
    console.log(`${i}`);
}

console.log(`2. Print all even numbers between 10 and 40`);
for (let i = 10; i <= 40; i+=2) {
    console.log(`${i}`);
}

console.log(`3. Print all odd numbers between 300 and 333`);
for (let i = 301; i <= 333; i+=2) {
    console.log(`${i}`);
}

console.log(`4. Print all numbers divisible by 5 AND 3 between 5 and 50`);
for (let i = 5; i <= 50; i++) {
    if ( i%3 == 0 && i%5 == 0){
        console.log(`${i}`);
    }
}


