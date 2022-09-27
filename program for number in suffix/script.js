let ar=parseInt(prompt("Enter a Value")),
rem=ar%10,
rem1=ar%100;

function numeric(){
    if(rem==1 && rem1!==11){
        console.log(ar+"st");
    }
   else if(rem==2 && rem1!==12){
    console.log(ar+"nd");
   }
    

    else if(rem==3 && rem1!==13){
        console.log(ar+"rd");
    }
    else{
        console.log(ar+"th");
    }
}
numeric()







