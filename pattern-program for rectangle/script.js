let row = 5,
  column = 5,
  str = "";
for (i = 1; i <= row; i++) {
  for (j = 1; j <= column; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);
