// Chessboard

let hashTag = "";
let size = 8;

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      hashTag += " ";
    } else {
      hashTag += "#";
    }
  }
  hashTag += "\n";
}

console.log(hashTag);
