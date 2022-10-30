let n = 5;
let str = "";
for (i=1; i<=n; i++) {
  for (j=0; j<i; j++) {
    str+= "*";
  }
  str+= "\n";
}
console.log(str);