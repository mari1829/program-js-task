 let obj=[{
	"F-name":"mari",
	"l-name":"selvam",
	"Gender":"Male",
	"age":"23"
	},
	{"Father-name":"paramasivan",
	"place":"tenkasi",
	
	},
	{"Brother-name":"Bala",
	"gender":"male",
	"age":"21",

	},
	{"Qulification":"BE",
	"passed-out":"2021",
	
	}
],len=0;
//console.log(obj.length);
for(i=0;i<obj.length;i++){
	for(j in obj[i]){
		len++;
	}
}
console.log(len); 

