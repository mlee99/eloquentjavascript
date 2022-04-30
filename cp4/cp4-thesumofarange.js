// The Sum of a Range

function range (start, end) {
    let arr = [];

    for (let i = start ; i <= end ; i++) {
        arr.push(i);
    }

    return console.log(arr);
}

range(1,10);

function sum (numbers, box) {
    let sum = 0, lastNumber = 0;

    for (let numbers of box) {
        console.log(`$box.length`)
    }
    return console.log(sum);
}


sum(range(1,10));
