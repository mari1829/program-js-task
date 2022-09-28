var startEle = document.getElementById("start");
var finalEle = document.getElementsByClassName("problems")[0];
var res=document.getElementById("end")

function stage1opperation() {
  var opperationEle = document.getElementById("opperation");
  var rangeEle = document.getElementById("range"),
    opperation = opperationEle.value,
    range = rangeEle.value;
  //    console.log(opperation,range);

  //    Looping
  reset();

  for (i = 1; i <= 16; i++) {
    // randomnumber(range);

    let num1 = randomnumber(range);
    let num2 = randomnumber(range);
    console.log(num1, num2);

    update(num1, num2, opperation);
  }
}

function randomnumber(range) {
  return parseInt(Math.random() * range);
}

function update(numb_1, numb_2, opperation) {
  let element = document.createElement("div");
  element.setAttribute("class", "new");
  let num_1 = document.createElement("h3");
  let num_2 = document.createElement("h3");
  let opperationElem = document.createElement("h3");
  let inpt = document.createElement("input");
  inpt.setAttribute("class", "input1");
  inpt.setAttribute("type", "text");

  num_1.innerText = numb_1;
  num_2.innerText = numb_2;
  opperationElem.innerText = s_fun(opperation);

  element.append(num_1);
  element.append(num_2);
  element.append(opperationElem);
  element.append(inpt);

  finalEle.append(element);
}

function reset() {
  finalEle.innerHTML = "";
}

function s_fun(opera) {
  switch (opera) {
    case "add":
      return "+";
      break;

    case "sub":
      return "-";
      break;

    case "Multi":
      return "*";
      break;

    case "divide":
      return "/";
      break;

    default:
      return "/";
      break;
  }
}

function enable(){
  res.removeAttribute("disabled");

}
enable();
startEle.addEventListener("click", stage1opperation);
