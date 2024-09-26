var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
for (var idx in days){
 if (days[idx] == "Wednesday")
   break;
 console.log("It's " + days[idx] + "<br>");
}


var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
for (var idx in days){
 if (days[idx] == "Wednesday")
   continue;
 console.log("It's " + days[idx] + "<br>");
}