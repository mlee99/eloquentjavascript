// Fizzbuzz - Prints numbers from 1 to 100, while #s divisible by 3 print 'Fizz' and numbers divisible by 5 print Buzz

let x = 1;
let three = "Fizz";
let five = "Buzz";

/* 

While the loop was determined quickly, I Looked up a hint and unfortunately found the answer on accident. 
Attempting to find 2nd method with the given book hint.

*/

do {
    if (x % 3 == 0) {
        console.log(three)
    } 
    else if (x % 5 == 0) {
        console.log(five)
    } 
    else {
        console.log(x)
    }

    x += 1;
} while (x <= 100)


/*
let fizzBuzz = "";

do {
    
} while (x <= 100)

*/