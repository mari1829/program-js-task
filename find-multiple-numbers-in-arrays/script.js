

let a = [1, 1, 2, 2, 3, 4, 4],
  obj = {};
a.forEach((para) => {
  obj[para] = (obj[para] || 0) + 1;
});
console.log(obj);
