let d=27,mon=07,yr=2002;
date=mon+"/"+d+"/"+yr;
console.log(date);
let g_date=new Date(date);
console.log(g_date);
fn_day=g_date.getDay(g_date);
console.log(fn_day);
out=g_date-((24*60*60*1000)*(fn_day-1));
console.log(out);
output=new Date(out);
console.log(output); 