// let ad=parseInt(prompt("value"));
// // let ad="1234"
// // let st=ad.replace(/[02468]$/g,""),
// even=ad.replace(/[^02468]/g,"");
// console.log(even)


 function odd(){
	let number=document.getElementById("opt").value,
	even=number.replace(/[^24680]$/g,"");
	
	if(number==even){
		document.getElementById("con").innerHTML="The Number is Even";
	}
	else{
		document.getElementById("con").innerHTML="The Number is Odd";
	}
}
document.getElementById("btn1").addEventListener("click",odd);