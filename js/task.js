alert(`Hello Mr Osama`)

let subjects1;
subjects1 =parseInt(prompt("what is the name of the material ?"));
let Arabic;
Arabic =parseInt(prompt("Total Arabic Material"));
let subjects2;
subjects2 =parseInt(prompt("what is the name of the material ?"));
let English;
English =parseInt(prompt("Total English Material"));
let subjects3;
subjects3 =parseInt(prompt("what is the name of the material ?"));
let math;
math =parseInt(prompt("Total Math Material"));
 let sience;
 let subjects4;
subjects4 =parseInt(prompt("what is the name of the material ?"));
 sience =parseInt(prompt("Total Sience Material"));
 let subjects5;
subjects5 =parseInt(prompt("what is the name of the material ?"));
let frence;
frence =parseInt(prompt("Total Frence Material"));
let total;
total=parseInt(prompt("How much is your total?"));
let total2=Arabic+English+frence+math+sience/total;
document.write(`Total Subjects${total2}`);
document.write(` <div class="era">
<div class="ara">${subjects1}</div>
<div class="ara">${subjects2}</div>
<div class="ara">${subjects3}</div>
<div class="ara">${subjects4}</div>
<div class="ara">${subjects5}</div>
<div class="ara">total</div>
<div class="ara">TOTAL %</div>
</div>
<div class="num">
<div class="nu">${Arabic}</div>
<div class="nu">${sience}</div>
<div class="nu">${English}</div>
<div class="nu">${frence}</div>
<div class="nu">${math}</div>
<div class="nu">230</div>
<div class="nu">deg 76%</div>
</div>`)