// Recursion

/* 
Zero is even
One is odd
Any other number N, its eveness is the same as N - 2
*/

/*

let isEven = (n) => {
  if (n % 2 == 0) {
    Boolean = true;
  } else {
    Boolean = false;
  }

  return Boolean;
};

console.log(isEven(-1));

*/

// While the above function works, it's not applying any recursion

/*
let isEven2 = (n) => {
    function isIt(x) {
    if (n % 2 == 0) {
      return true;
    } else if (n % 2 == 1) {
      return false;
    } else {
      return isIt(x - 2);
    }
  }

  return isIt(0);
};


isEven2(50);
*/

let isEven3 = (num) => {
    if (num < 1) {
        num = -num;
    }

    if (num === 0) {
        return true;
    }
    else if (num === 1) {
        return false;
    }
    else {
        return isEven3(num - 2);
    }
}

console.log(isEven3(-40));