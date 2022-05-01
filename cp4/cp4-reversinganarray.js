// Reversing an array

let arrayValue = [1, 2, 3, 4, 5];

let stringArray = ["A", "B", "C"];

function reverse (arr) {

    let newArr = [], number = 0;

    for (let i = 0 ; i < arr.length ; i++) {
        number = arr[i];
        newArr.unshift(number);
    }

    return newArr;
}

//console.log(reverse(arrayValue));

//console.log(reverse(stringArray));


function reverseInPlace (arr) {
    let holder = 0;

    for (let i = 0 ; i < Math.floor(arr.length / 2) ; i++) {
        holder = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr.pop(arr.length - 1 - i);
        arr.push(holder);
        holder = arr[i + 1];
        console.log(arr);
    }

    //console.log(...arr);
}

reverseInPlace(arrayValue);