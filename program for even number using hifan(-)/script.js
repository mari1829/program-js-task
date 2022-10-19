let c=parseInt(prompt("value"));
let f=[];

d=c.toString();
for(i=0; i<d.length; i++){
    // console.log(d[i-1]);
    if(d[i-1]%2==0 && d[i]%2==0){   
        f.push("-",d[i])
    }
    else{
        f.push(d[i])
        // console.log(f);
    }
}
f=f.join("");
console.log(f);