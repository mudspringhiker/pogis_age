var today = new Date();
var pogisDOB = new Date(2014, 11, 15);
var pogisCurrentAge = (today.getFullYear() - pogisDOB.getFullYear());
// console.log("Pogi is " + pogisCurrentAge + " years old today."); 

$("p").text("Today's date is " + today.toDateString() + ".")
$("h3").text("Pogi is " + pogisCurrentAge + " years old today.");
