// A list - COME BACK TO THIS ONE

let givenArr = [1, 2, 3];

let arrayToList = (arr) => {
  let list = {};
  let holder = {};

  if (arr.isArray(arr)) {
    let holder = list;

    for (let item of arr) {
      let newListItem = {
        value: item,
        rest: null,
      };
    if (typeof holder.rest === 'undefined') {
        list = newListItem;
    } else {
        holder.rest = newListItem;
    }
    holder = newListItem;
  }
}

  /*
 
  First attempt

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == arr.length - 1) {
      list = {
        value: arr[i],
        rest: null,
      };
    } else {
      holder = list;
      list = {
        value: arr[i - 1],
        rest: {
          value: arr[i],
          rest: null,
        },
      };
    }
*/
  return console.log(list);
};

arrayToList(givenArr);

/*
function newFunction() {
  // Understanding; how; a; binaryTree; is; built; within; an; object; model.

  // binaryTree.left && || binaryTree.right;

  let binaryTree = {
    node: 1,
    left: {
      node: 2,
      left: {
        node: 4,
      },
      right: {
        node: 5,
      },
    },
    right: {
      node: 3,
      left: {
        node: 6,
      },
      right: {
        node: 7,
        right: {
          node: 8,
        },
      },
    },
  };

  console.log(binaryTree);
}
*/
