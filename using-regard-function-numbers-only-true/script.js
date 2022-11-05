let numstr="12a3nh49087",
od=numstr.replace(/[^0-9]/g,"");
console.log(od,"true");
let eve=numstr.replace(/[^a-z]/g,"");
console.log("false");