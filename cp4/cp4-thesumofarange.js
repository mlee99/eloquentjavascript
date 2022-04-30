// The Sum of a Range

function range (start, end) {
    let arr = [];

    for (let i = start ; i <= end ; i++) {
        arr.push(i);
    }

    return arr;
}

console.log(range(1,10));

// let newArr = range(1,10);

// console.log(newArr);

/*

Testing out if the logic of my function works... and it does.

let arr = [1,2,3,4,5,6,7,8,9,10];

let lastNumber = 0, sum = 0;

for (i = 0; i < arr.length ; i++) {
    lastNumber = arr[i];
    sum += lastNumber;
    console.log(sum);
}
*/

/*

Using the spread operator "...", it was take an array as a whole and essentially make it one object
and not treat each item within the array individually

This is probably why my sum and lastNumber variables wouldn't work in this case.

function sum (...arr) {
    let sum = 0, lastNumber = 0;
    
    for (i = 0 ; i < arr.length ; i++) {
        lastNumber = arr[i];
        sum += lastNumber;
        //console.log(sum);
    }

    return sum;

}

*/

/*
 This function below, sum2, allows for any type of arguement to be passed, and since it's an array
 I can go ahead and use the forEach callback function to treat an individual element within
 an array and utilize my sum and lastNumber variables.
*/

function sum2 (arr) {
    let sum = 0, lastNumber = 0;

    arr.forEach(element => {
        lastNumber = element;
        sum += lastNumber;
    });

    return sum;
}

console.log(sum2(range(1,10)));

function rangeIncrement (start, end, increment) {
    let arr = [];

    if (increment > 0) {
        for (let i = start ; i <= end ; i += increment) {
            arr.push(i);
        }
    }
    else {
        
        for (let i = start ; i >= end ; i -= Math.abs(increment)) {
        arr.push(i);
    }
    }
    return arr;
}

console.log(rangeIncrement(5, 1, -1));;

//console.log(sum2(rangeIncrement(5,2,-1)))