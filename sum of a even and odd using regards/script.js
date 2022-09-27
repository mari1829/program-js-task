let arr="12349087",sum=0,res,sums=0,result,
od=arr.replace(/[^13579]/g,"");
console.log(od);
let eve=arr.replace(/[^24680]/g,"");
console.log(eve);

let spl=od.split("");
for(i=0;i<spl.length;i++){
	spl[i]=parseInt(spl[i]);
	res=sum+spl[i];
	sum=res;
}
console.log(sum);

let sp=eve.split("");
for(j=0;j<sp.length;j++){
	sp[j]=parseInt(sp[j]);
	result=sums+sp[j];
	sums=result;
}
console.log(sums);