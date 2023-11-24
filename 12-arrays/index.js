// Need to run the code below in a browser console
var guestList = ["A", "B", "C", "D", "E"];
var guestName = prompt("What is your name?");

if (guestList.includes(guestName)) {
    alert("Welcome");
} else {
    alert("Yikes");
}