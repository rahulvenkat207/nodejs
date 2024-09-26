/*
i = 0;
while(i < 10)
{
    console.log(i);
    i++;

}
*/

/*var days = ["Wednesday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var i = 0;

do {
    var day = days[i++];
    console.log("It's " + day + "\n"); // \n adds a new line in console output
} while (day != "Wednesday");*/

for (var x=1; x<=3; x++){
    for (var y=1; y<=3; y++){
      console.log(x + " X " + y + " = " + (x*y) + "<br>");
    }
   }
  
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
for (var idx in days){
console.log("It's " + days[idx] + "<br>");
   }


   var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
   for (var idx in days){
    if (days[idx] == "Wednesday")
      break;
    console.log("It's " + days[idx] + "<br>");
   }
  