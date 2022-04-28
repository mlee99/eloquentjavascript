function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    }
    else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2,3));

console.log("Hello");

function zeroToOneHundred() {
    let i = 0;

    do {
        i += 1;

        if (i % 15 == 0) {
            console.log('FizzBuzz');
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    } while (i < 100);
}

zeroToOneHundred();

function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);

    let chickenString = String(chickens);

    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}

printFarmInventory(97, 13);
printFarmInventory(7, 13);
printFarmInventory(123, 123);

