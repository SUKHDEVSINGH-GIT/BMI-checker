

function bmivalue(){ 

var weight=document.getElementById("weight").value;
var height=document.getElementById("height").value;


height=height*12;
height=height*0.025;

var newbmivalue = weight/(height*height);

document.getElementById("bmi").value=newbmivalue;

}
