const hour = new Date().getHours(); 
let greeting;
if (hour < 18) {
  greeting = "Good day!";
} else {
  greeting = "Good evening!";
}
document.getElementById("greeting").innerHTML = greeting;
//if else statement based on time