


// function reverseString(str) {

   
//     const arrayStrings = str.split("");
   
    
//     const reverseArray = arrayStrings.reverse();
 

//     const joinArray = reverseArray.join("");
    
  
//     return joinArray;
// }
 

// const string = prompt('Enter a string: ');

// const result = reverseString(string);
// console.log(result);



let n = parseInt(prompt("Give The Value")),
ar=["zero","one","Two","three","four","five","six","seven","eight","nine"];
let sum = 0;
let rem;
while (n > 0) {

  rem = n % 10;
  n = n / 10;
  n = parseInt(n);
  sum=rem;
 
    console.log(ar[sum]);
   
}

