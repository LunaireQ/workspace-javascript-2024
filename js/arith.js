// get the element 
let spanE = document.getElementById('num1');
console.log("spanE -" + spanE);

let spanF = document.getElementById('num2');
console.log("SpanF -" + spanF);
// element --- property
var num1 = parseInt(document.getElementById('num1').textContent); 
var num2 = parseInt(document.getElementById('num2').textContent); 
console.log(typeof num1);
console.log(typeof num2);



//process
var c = num1 + num2;

//display
document.write(c);