var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1;
var day = today.getDate();

var birthYear = prompt("اكتب سنة ميلادك:");
var age = year - birthYear;

console.log(`النهاردة ${day}-${month}-${year} وانت عندك ${age} سنة`);
