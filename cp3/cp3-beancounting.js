// Bean Counting

function countBs (string) {
    let count = 0;

    for (let i = 0 ; i < string.length ; i++) {
        if (string.charAt(i) == "B") {
            count += 1;
        }
    }

    return console.log(count);
}

let call = "Mr. Benjamin Button didn't want to bounce back to Bumberland.";

countBs(call);

function countChar (str, char) {
    let n = 0;

    for (let i = 0 ; i < str.length ; i++) {
        if (str.charAt(i) == char) {
            n += 1;
        }
    };

    return console.log(n);
}

countChar("nu theta is too nasty", "t");