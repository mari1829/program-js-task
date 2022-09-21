let splchar="MAri!2@#45#$";
function rmv(){
	let str=splchar.replace(/[^a-zA-Z]/g, ""),
	ls=splchar.replace(/[^0-9]/g, "");
	console.log(str);
	console.log(ls);
	
}
rmv();