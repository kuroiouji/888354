console.log('Hello SE');

const pi = 3.1444;
var number1 = 20;
var number2 = 20.50;
var txt = "Hello SE";
var arry = Array("SE", "IT", "CS");
var obj = {
    "fname": "Bulakorn",
    "lname": "Maneesang"
};

console.log('pi' + pi);
console.log('number1' + number1);
console.log('number2' + number2);
console.log('txt' + txt);
console.log('arry' + arry);
console.log(obj);

arry.forEach(function (element) {
    console.log(element);
});

arry.forEach(function (element, index) {
    console.log("arry[" + index + "] : " + element);
});